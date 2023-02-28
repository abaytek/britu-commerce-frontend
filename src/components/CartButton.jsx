import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  position: fixed;
  top: 10rem;
  right: 2rem;
  z-index: 100;
  background: #fc3c01;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  @media(max-width: 768px){
    width: 3rem;
    height: 3rem;
    right: 1rem;
  }
`;
const CartButton = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/cart');
  };
  return (
    <Container>
      <Badge
        style={{ cursor: 'pointer' }}
        badgeContent={cartTotalQuantity}
        overlap="rectangular"
        onClick={handleClick}
      >
        <ShoppingCartOutlined />
      </Badge>
    </Container>
  );
};

export default CartButton;
