import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../features/cart';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  justify-content: center;

  @media(max-width: 768px){
    justify-content: space-between;
  }
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: whitesmoke;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.direction === 'left' && '1rem'};
  right: ${(props) => props.direction === 'right' && '1rem'};
  cursor: pointer;
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 2s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  
  @media(max-width: 768px){
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  // flex: 1;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 768px){
    height: 60%;
  }
`;
const Img = styled.img`
  height: 100%;
  object-fit: contain;

  @media(max-width: 768px){
    height: 80%;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
  letter-spacing: 10px;

  @media(max-width: 768px){
    font-size: 30px;
    letter-spacing: 10px;
  }
`;
const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 5px;
  margin-bottom: 50px;
  margin-top: 30px;

  @media(max-width: 768px){
    font-size: 16px;
    letter-spacing: 2px;
    margin-top: 15px;
  }
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
    border: 1px solid orange;
    color: black;
  }

  @media(max-width: 768px){
    padding: 8px 15px;

  }
`;

const Slider = () => {
  // SLIDER FUNCTIONALITY
  const [slideIndex, setSlideIndex] = useState();
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  //  USE IMAGES AND DESC FROM BACKEND
  const { sliderItems } = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  // Add to cart
  const handleAddtoCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('right')}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems?.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Img src={item.img}></Img>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button onClick={() => handleAddtoCart(item)}>አሁኑኑ ይግዙ</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
