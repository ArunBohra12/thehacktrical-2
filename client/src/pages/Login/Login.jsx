import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftContainer from '../../components/AuthComp/LeftContainer/LeftContainer';
import { Section, RightContainer, Heading, LoginForm } from './Login.styles';


const Login = () => {
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const loginHandler = e => {
    e.preventDefault();
    alert('yo');
    navigate('/');
  };
  return (
    <Section>
      <LeftContainer
        heading='Welcome back!'
        subHeading='A platform where you can buy and sell tickest for local or online events.'
      />
      <RightContainer>
        <Heading>
          <h2>Sign In</h2>
          <h4>
            Dont have an account? <Link to='/'>Sign Up!</Link>
          </h4>
        </Heading>
        <LoginForm>
          <form onSubmit={loginHandler}>
            <label htmlFor='email' className='upperInputs'>
              Email
            </label>
            <input type='email' name='email' placeholder='example@gmail.com' className='grey-inputs' value={loginData.email}  />
            <label htmlFor='password' className='upperInputs'>
              Password
            </label>
            <input type='password' name='password' placeholder='*******' className='grey-inputs' value={loginData.password} />
            <button type='submit'>Log in to account</button>
          </form>
        </LoginForm>
      </RightContainer>
    </Section>
  );
};

export default Login;
