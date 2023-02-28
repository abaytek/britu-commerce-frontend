import React from 'react';
import Category from './Category';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

const Categories = () => {
  //  USE IMAGES AND DESC FROM BACKEND
  const { categories } = useSelector((state) => state.products?.products);

  return (
    <Container>
      {categories?.map((item) => (
        <Category item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
