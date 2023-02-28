import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Announcement } from '../components';
import Navbar from '../components/Navbar';
import { loginUser } from '../features/auth';

const TopContainer = styled.div`
  height: 100vh;
`;
const RegisterMain = styled.div`
  height: calc(100vh - ${90}px);
  background: url('./images/images_1.png') rgba(0, 0, 0, 0.2) center right;
  background-repeat: no-repeat;
  width: 100%;
  position: fixed;
  top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: whitesmoke;
  width: 20rem;
  height: 50%;
  padding: 4rem 4rem;
  border-radius: 100px 0 100px 0;
`;
const Title = styled.h2`
  color: tomato;
  margin-bottom: 1rem;
  text-align: center;
`;
const Label = styled.p`
  font-size: 16px;
  margin-bottom: 0.3rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid teal;
  outline: none;
  margin-bottom: 0.7rem;
  width: 90%;
  font-size: 1rem;
  border-radius: 15px;
`;
const Button = styled.button`
  border: none;
  outline: none;
  background: tomato;
  margin-bottom: 1rem;
  padding: 0.6rem 1.8rem;
  width: fit-content;
  cursor: pointer;
  color: whitesmoke;
`;
const Register = styled.div`
  display: flex;
  align-items: center;
`;
const CheckText = styled.p`
  color: #333;
  font-size: 18px;
`;
const LoginError = styled.p`
  color: red;
  margin: 0.8rem 0;
  text-align: left;
`;

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { _id, loginStatus, loginError } = useSelector((state) => state.auth);

  // REDIRECT USER IF THEY SUCCESFULLY LOGGED IN
  const navigate = useNavigate();
  useEffect(() => {
    if (_id) {
      navigate('/');
    }
  }, [_id, navigate]);

  // DISPATCH LOGIN USER ACTION
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginUser(user));
  };

  return (
    <TopContainer>
      <Announcement />
      <Navbar />
      <RegisterMain>
        <Container>
          <Title>Login</Title>

          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {loginStatus === 'rejected' ? (
            <LoginError>{loginError}</LoginError>
          ) : null}
          <Button onClick={handleLogin}>Submit</Button>
          <Register>
            <CheckText>Do have an account </CheckText>
            <Link
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                fontWeight: 'bold',
                borderBottom: ' 2px solid tomato',
              }}
              to="/auth/register"
            >
              Register
            </Link>
          </Register>
        </Container>
      </RegisterMain>
    </TopContainer>
  );
};

export default Login;
