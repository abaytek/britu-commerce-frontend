import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background: #f5fdf5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  color: tomato;
`;
const Desc = styled.h2`
  font-size: 20px;
  color: darkgray;
  margin: 10px 0;
`;
const InputContainer = styled.div`
  background: white;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
  font-size: 15px;
  color: teal;
`;
const Button = styled.button`
  flex: 1;
  background: tomato;
  border: none;
  height: 100%;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>መረጃዎች</Title>
      <Desc>ስለሚፈልጓቸው እቃዎች መርጃ ለማግኘት ይመዝግቡ</Desc>
      <InputContainer>
        <Input placeholder="ኢሜል ያስገቡ" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
