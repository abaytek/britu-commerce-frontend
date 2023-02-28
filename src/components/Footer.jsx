import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: column;
`;
const Logo = styled.h1`
  font-size: 26px;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const SocialIcon = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background: #${(props) => props.color};
  border-radius: 50%;
  color: white;
`;
const Desc = styled.p`
  line-height: 1.3;
  font-size: 16px;
  width: 85%;
  margin: 15px 0;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h2`
  font-size: 20px;
  padding-bottom: 20px;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: tomato;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ገበያ</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi
          ad ipsum blanditiis explicabo facilis officiis voluptate debitis
          pariatur magni.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>አስፈላጊ አድራሻዎች</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>
      <Right>
        <Title>አድራሻ</Title>
        <ContactItem>
          <Room /> Bole Rwanda, Addis Ababa
        </ContactItem>
        <ContactItem>
          <Phone /> +2559870909
        </ContactItem>
        <ContactItem>
          <Email /> abay@dev.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
