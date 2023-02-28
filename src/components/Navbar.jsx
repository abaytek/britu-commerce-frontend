import { Favorite, FavoriteBorderOutlined, Search } from '@material-ui/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from '../features/auth';
import { getTotal } from '../features/cart';

const Container = styled.div`
  height: 60px;
  position: fixed;
  top: 30px;
  z-index: 100;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  @media(max-width: 768px){
    flex: 0;
  }
`;
const SearchContainer = styled.div`
  margin-left: 25px;
  display: flex;
  padding: 5px;
  align-items: center;
  border: 1px solid lightgray;

  @media(max-width: 768px){
    display:none;
    margin-left: 0;
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
  background: none;
`;
const Center = styled.div`
  text-align: center;
`;
const Logo = styled.h1`
  color: gray;
  cursor: pointer;
  letter-spacing: 10px;
  font-size: 50px;

  @media(max-width: 768px){
    font-size: 20px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Member = styled.div`
  text-transform: uppercase;
  margin-left: 20px;
  font-size: 18px;
  color: #333;
  border-bottom: 2px solid tomato;
  cursor: pointer;
`;
const Logout = styled.p`
  font-size: 18px;
  color: #333;
  border-bottom: 2px solid tomato;
  cursor: pointer;
`;
const BtnContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Count = styled.p`
  font-size: 10px;
  width: 18px;
  height: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: whitesmoke;
  background: teal;
  position: absolute;
  top: -0.5rem;
  right: -0.6rem;
`;
function Navbar({ showWishList, setShowWishList }) {
  const { _id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // Logout User
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  // Get cart data
  const { cartItems, wishList } = useSelector((state) => state.cart);

  const handleToggleWishList = () => {
    setShowWishList(!showWishList);
  };

  // get total amount
  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input></Input>
            <Search
              style={{ fontSize: 14, color: 'gray', cursor: 'pointer' }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Logo>ቡልኮ ገበያ.</Logo>
          </Link>
        </Center>
        <Right>
          {_id ? (
            <>
              <Logout onClick={handleLogout}>Logout</Logout>

              {wishList.length > 0 ? (
                <BtnContainer onClick={handleToggleWishList}>
                  <Favorite
                    style={{
                      color: 'red',
                      marginLeft: '1rem',
                    }}
                  />
                  <Count>{wishList.length}</Count>
                </BtnContainer>
              ) : (
                <FavoriteBorderOutlined
                  style={{ marginLeft: '1rem', cursor: 'pointer' }}
                  onClick={handleToggleWishList}
                />
              )}
            </>
          ) : (
            <>
              <Link style={{ textDecoration: 'none' }} to="/auth/register">
                <Member>ይመዝገቡ</Member>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/auth/login">
                <Member>ይግቡ</Member>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
