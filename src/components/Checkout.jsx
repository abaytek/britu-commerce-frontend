import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 3rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 768px){
    padding: 2rem 1rem;
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;
const ClearCart = styled.a`
  text-decoration: none;
  padding: 0.6rem 1rem;
  background: whitesmoke;
  border: 2px solid gray;
  border-radius: 1rem;
  cursor: pointer;

  @media(max-width: 768px){
    width: 80%;
    text-align: center;
  }
`;
const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: start;
  gap: 1rem;
  margin-top: 1rem;
`;
const Text = styled.p``;
const PayButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: white;
  font-size: 1rem;
  background: #ff6347;
  cursor: pointer;

  @media(max-width: 768px){
    padding: 1rem 1rem;
  }
  
`;
const SubTotalText = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;
const SubTotalValue = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;
const Checkout = ({ cartItems }) => {
  const dispatch = useDispatch();

  // cartTotalAmount
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const { _id } = useSelector((state) => state.auth);

  // clear everything in cart
  const handleClearCart = () => {
    dispatch(clearCart(cartItems));
  };

  return (
    <Container>
      <ClearCart onClick={handleClearCart}>Clear Cart</ClearCart>
      <Payment>
        <SubTotalContainer>
          <SubTotalText>Sub Total</SubTotalText>
          <SubTotalValue>{cartTotalAmount} ብር</SubTotalValue>
        </SubTotalContainer>
        <Text>Shipping fee processed at checkout page</Text>
        {_id ? (
          <PayButton>Checkout</PayButton>
        ) : (
          <Link to="/auth/login">
            <PayButton>Login to Checkout</PayButton>
          </Link>
        )}
      </Payment>
    </Container>
  );
};

export default Checkout;
