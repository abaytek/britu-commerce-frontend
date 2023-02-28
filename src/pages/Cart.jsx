import { Navbar, Announcement } from '../components';
import styled from 'styled-components';
import { Add, RemoveOutlined, ShopOutlined } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  DecreaseCartQuantity,
  removeFromCart,
} from '../features/cart';
import { Link } from 'react-router-dom';
import Checkout from '../components/Checkout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  
  @media(max-width: 768px){
    padding: 0;
    padding-top: 2rem;
  }
`;
const Heading = styled.h2`
  text-align: center;
  border-bottom: 2px solid orange;
  color: #333;
  padding: 0.5rem;
  font-weight: normal;
  cursor: context-menu;
  margin: 2rem 0;
`;
const Table = styled.table`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px){
    width: 100%;
  }
`;
const TableHead = styled.thead`
  width: 100%;
  border-bottom: 2px solid #d1c9fa;
`;
const TableBody = styled.tbody`
  width: 100%;
  border-bottom: 2px solid #d1c9fa;
`;
const TR = styled.tr`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem;

  @media(max-width: 768px){
    text-align: left;
  }
`;
const Th = styled.th`
  flex: 1;
`;
const Td = styled.th`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  
  @media(max-width: 768px){
    align-items: center;
    justify-content: flex-start;
  }
`;
const ItemDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.p`
  font-weight: bold;
`;
const Img = styled.img`
  width: 100px;
  height: 80px;
  object-fit: contain;

  @media(max-width: 768px){
    display: none;
  }
`;
const Remove = styled.a`
  border-bottom: 2px solid orange;
  margin-top: 1rem;
  color: red;
  cursor: pointer;

  @media(max-width: 768px){
    display: none;
  }
`;
const Count = styled.span`
  font-weight: bold;
`;
const ItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const EmptyBag = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 768px){
    flex-direction: column;
  }
`;
const EmptyBagText = styled.h2`
  font-weight: bold;
  color: teal;
  margin: 2rem 0;
`;
const ImgNoItem = styled.img`
  height: 70%;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { popularProducts } = useSelector((state) => state.products?.products);

  // Remove single product
  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };
  // Increase quantity
  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };
  // Decrease quantity
  const handleDecreaseQuantity = (item) => {
    dispatch(DecreaseCartQuantity(item));
  };

  return (
    <>
      <Announcement />
      <Navbar />
      {cartItems.length === 0 ? (
        <EmptyBag>
          <ImgNoItem
            src={popularProducts?.at(3).img}
            alt={popularProducts?.at(3).name}
          />
          <div>
            <EmptyBagText>Your Bag Is Empty,</EmptyBagText>
            <Link
              style={{
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1.5rem',
                padding: '1.5rem',
                color: 'teal',
                border: '2px solid gray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
              to="/"
            >
              <ShopOutlined />
              Go shopping
            </Link>
          </div>
        </EmptyBag>
      ) : (
        <Container>
          <Heading>🖐🖐 Here are the items on Your Shopping bag</Heading>
          <Table>
            <TableHead>
              <TR>
                <Th>Item</Th>
                <Th>Unit Price</Th>
                <Th>Quantity</Th>
                <Th>Total Price</Th>
              </TR>
            </TableHead>

            {cartItems.map((item) => (
              <TableBody key={item.id}>
                <TR>
                  <Td>
                    <ItemDesc>
                      <Text>{item?.name}</Text>
                      <Img src={item?.img}></Img>
                    </ItemDesc>
                    <Remove onClick={() => handleRemoveItem(item)}>
                      Remove Item
                    </Remove>
                  </Td>
                  <Td>{item.price} ብር</Td>
                  <Td>
                    <ItemCount>
                      <Add
                        style={{
                          padding: '5px',
                          background: '#d1c9fa',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleIncreaseQuantity(item)}
                      />
                      <Count>{item.itemQuantity}</Count>
                      <RemoveOutlined
                        style={{
                          padding: '5px',
                          background: '#d1c9fa',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleDecreaseQuantity(item)}
                      />
                    </ItemCount>
                  </Td>
                  <Td>{item.price * item.itemQuantity} ብር</Td>
                </TR>
              </TableBody>
            ))}
          </Table>
        </Container>
      )}
      {/* Only visible if there is an item in cart */}
      {cartItems.length > 0 && <Checkout cartItems={cartItems} />}
    </>
  );
};

export default Cart;
