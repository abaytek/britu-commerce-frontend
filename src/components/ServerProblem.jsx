import styled from 'styled-components';

const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TextLg = styled.h1`
  margin: 2rem 0;
  font-size: 3rem;
  color: #222;
`;
const Text = styled.h2`
  color: #777;
  margin: 2rem 0;
  font-size: 30px;
  letter-spacing: 5px;
`;
const TextSm = styled.h3`
  color: teal;
  letter-spacing: 8px;
  font-size: 25px;
  font-weight: bold;
`;

const ServerProblem = () => {
  return (
    <Container>
      <TextLg>🤷‍♀️ oOops</TextLg>
      <Text>Something went wrong 🤦‍♂️</Text>
      <TextSm>Check back again, We are Working on it</TextSm>
    </Container>
  );
};

export default ServerProblem;
