import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: semi-bold;
  color: whitesmoke;
  letter-spacing: 5px;
  position: sticky;
  top: 0;
  z-index: 100;
  
  @media(max-width: 768px){
    letter-spacing: 2px;
  }
`;

const Announcement = () => {
  return <Container>በዓልን አስመልክቶ አስከ 50% የሚደርስ ልዩ ቅናሽ</Container>;
};

export default Announcement;
