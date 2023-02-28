import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/auth';
import { useEffect } from 'react';
import { Announcement } from '../components';

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
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 4rem;
  border-radius: 100px 0 100px 0;
`;
const Title = styled.h2`
  color: tomato;
  margin-bottom: 0.5rem;
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
const Login = styled.div`
  display: flex;
  align-items: center;
`;
const CheckText = styled.p`
  color: teal;
  font-size: 16px;
`;

const RegisterError = styled.p`
  color: red;
  margin: 0.8rem 0;
  text-align: left;
`;

const Register = () => {
  const dispatch = useDispatch();
  const { registerError, registerStatus, _id } = useSelector(
    (state) => state.auth
  );

  // Redirect to homepage if they succesfully registerd
  const navigate = useNavigate();
  useEffect(() => {
    if (_id) {
      navigate('/');
    }
  }, [_id, navigate]);

  // user initila state
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  // select the auth state
  // handle Register
  const handleRegister = () => {
    dispatch(registerUser(user));
  };

  return (
    <TopContainer>
      <Announcement />
      <Navbar />
      <RegisterMain>
        <Container>
          <Title>Register</Title>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />

          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />

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
          {/* Handle Register error */}
          {registerStatus === 'rejected' ? (
            <RegisterError>{registerError}</RegisterError>
          ) : null}
          <Button onClick={handleRegister}>Submit</Button>
          <Login>
            <CheckText>Do have an account </CheckText>
            <Link
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                fontWeight: 'bold',
                borderBottom: ' 2px solid tomato',
              }}
              to="/auth/login"
            >
              Login
            </Link>
          </Login>
        </Container>
      </RegisterMain>
    </TopContainer>
  );
};

export default Register;
