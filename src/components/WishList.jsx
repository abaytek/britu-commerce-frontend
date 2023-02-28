import { DeleteOutline, ShoppingCartOutlined } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  addToCart,
  removeAllWishlist,
  removeFromWishlist,
} from '../features/cart';
const Container = styled.div`
  position: fixed;
  top: 90px;
  right: 0;
  display: flex;
  transform: translateX(${(props) => (props.showWishList ? '0rem' : '25rem')});
  transition: all 0.5s ease-in-out;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100%;
  padding: 2rem;
  z-index: 100;
  background: whitesmoke;
  color: white;
  overflow: scroll;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;
const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  background: white;
  color: black;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: whitesmoke;
  }
`;
const ProductDesc = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Img = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
`;
const Header = styled.h4`
  color: orange;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid orange;
  text-align: center;
`;
const ClearBtn = styled.a`
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: teal;
  margin: 1rem 0;
  border: 1px solid orange;
  width: 80%;
  text-align: center;
`;
const ItemContainer = styled.div`
  // position: relative;

  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`;
const NoItemText = styled.p`
  color: teal;
  font-weight: bold;
  border-bottom: 2px solid gray;
  text-align: center;
  padding: 10px;
`;
const ImgWishList = styled.img`
  height: 70%;
  
  @media(max-width:768px){
    height: 50%;
    width: 50%;
  }
`;

const WishList = ({ showWishList, setShowWishList }) => {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.cart);
  const { popularProducts } = useSelector((state) => state.products?.products);

  const handleDeleteWishList = (item) => {
    dispatch(removeFromWishlist(item));
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleClearWishList = () => {
    dispatch(removeAllWishlist());
  };
  return (
    <>
      <Container showWishList={showWishList}>
        <Header>Your wishlist items</Header>
        {wishList?.length === 0 ? (
          <ItemContainer>
            <ImgWishList
              src={popularProducts?.at(3).img}
              alt={popularProducts?.at(3).name}
            />
            <NoItemText>Currently no item in your wishlist bag</NoItemText>
          </ItemContainer>
        ) : (
          <>
            {wishList?.map((item) => (
              <ProductContainer key={item.id}>
                <ProductDesc>
                  <Img src={item.img} alt={item.name}></Img>
                  <p>{item.name}</p>
                </ProductDesc>
                <ProductAction>
                  <DeleteOutline
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDeleteWishList(item)}
                  />
                  <ShoppingCartOutlined
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAddToCart(item)}
                  />
                </ProductAction>
              </ProductContainer>
            ))}
            <ClearBtn onClick={handleClearWishList}>Clear All</ClearBtn>
          </>
        )}
      </Container>
    </>
  );
};

export default WishList;
