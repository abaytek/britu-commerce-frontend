import styled from 'styled-components';

const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Center = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: whitesmoke;
  border-top: 5px dotted black;
  border-bottom: 5px dotted black;
  border-left: 5px dotted black;
  border-right: 5px dotted black;
  animation: infinite 3s spin ease-in-out;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = styled.p`
  margin-top: 2rem;
  color: #333;
  font-size: 1.5rem;
`;

const Spinner = () => {
  return (
    <Container>
      <Center></Center>
      <Loading>Loading ...</Loading>
    </Container>
  );
};

export default Spinner;
