import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 20px;
  justify-content: space-between;
`;

const Products = () => {
  //  USE IMAGES AND DESC FROM BACKEND
  const { popularProducts } = useSelector((state) => state.products.products);

  return (
    <Container>
      {popularProducts?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
