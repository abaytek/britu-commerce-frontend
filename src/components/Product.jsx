import {
  Favorite,
  FavoriteBorderOutlined,
  ShoppingBasketOutlined,
} from '@material-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart, addToWishlist, removeFromWishlist } from '../features/cart';

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5fbfd;
  margin: 5px;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background: lightgray;
`;
const Image = styled.img`
  height: 70%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  // ADD TO WISHLIST
  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };
  // REMOVE FROM WISHLIST
  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
  };
  const handleToggle = () => {
    setFavorite(!favorite);
  };
  // Add to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon onClick={() => handleAddToCart(product)}>
          <ShoppingBasketOutlined />
        </Icon>
        <Icon onClick={handleToggle}>
          {favorite ? (
            <Favorite
              style={{ color: 'red' }}
              onClick={() => handleRemoveFromWishlist(product)}
            />
          ) : (
            <FavoriteBorderOutlined
              onClick={() => handleAddToWishlist(product)}
            />
          )}
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
