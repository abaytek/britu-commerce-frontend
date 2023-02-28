import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 75vh;
  position: relative;
  border-radius: 5px;
  margin-top: 50px;
  transition: all 1s ease-in-out;
  &:hover {
    background: tomato;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: tomato;
  background: whitesmoke;
  padding: 10px 20px;
  margin-bottom: 20px;
`;
const Button = styled.a`
  text-decoration: none;
  padding: 12px 25px;
  background: linear-gradient(
    0deg,
    rgba(255, 27, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  );
  transition: all 0.2s ease;
  color: white;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
`;

const Category = ({ item }) => {
  return (
    <Container>
      <Img src={item.img}></Img>
      <Info>
        <Title>{item.title}</Title>
        <Button>ይቃኙ</Button>
      </Info>
    </Container>
  );
};

export default Category;
