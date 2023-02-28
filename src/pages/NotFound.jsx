import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: teal;
`;
const TextLarge = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0 2rem;
`;
const TextDesc = styled.h1`
  color: teal;
`;

const Line = styled.span`
  font-size: 40px;
  margin: 0 2rem;
`;

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <TextLarge>404</TextLarge>
        <Line>|</Line>
        <TextDesc>Page Not Found</TextDesc>
      </Container>
    </>
  );
};

export default NotFound;
