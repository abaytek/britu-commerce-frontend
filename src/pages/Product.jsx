import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove, ShoppingBasket } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 30px;
  margin-top: 2rem;
  display: flex;
  align-items:center;
  justify-content: space-between;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media(max-width: 768px){
    width: 60%;
    height: 60%;
  }
`;
const Image = styled.img`
  height: 50vh;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 100;
`;
const Description = styled.p`
  margin: 20px 0;
  line-height: 1.4;
`;
const Price = styled.span`
  font-size: 40px;
`;
const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  gap: 2rem;
  width: 50%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 30%;
  display: flex;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: teal;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Product = () => {
  const {pathname} = useLocation()
  console.log(pathname)

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="/images/images_1.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>ምርጥ የሃበሻ ጥበብ</Title>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            neque non dignissimos vero deserunt voluptate deleniti ut veritatis
            ducimus animi impedit nobis voluptatem, ratione, necessitatibus iste
            sit? Atque, blanditiis illo.
          </Description>
          <Price>$ 20</Price>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{
                  cursor: 'pointer',
                  padding: '5px',
                  background: 'gray',
                  borderRadius: '50%',
                  color: 'whitesmoke',
                }}
              />
              <Amount>1</Amount>
              <Add
                style={{
                  cursor: 'pointer',
                  padding: '5px',
                  background: 'gray',
                  borderRadius: '50%',
                  color: 'whitesmoke',
                }}
              />
            </AmountContainer>
            <Button>
              <ShoppingBasket style={{ marginRight: '10' }} /> ወደ ማጠራቀሚያ
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
