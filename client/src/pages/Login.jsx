import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LeftContainer from '../components/AuthComp/LeftContainer';

const Section = styled.div`
  width: 100vw;
  padding: 20px;
  display: flex;
  background: #070a0c;
`;

const RightContainer = styled.div`
  /* border: 1px solid red; */
  width: calc(60vw - 20px);
  color: #ffffff;
`;

const Heading = styled.div`
  /* border: 1px solid red; */
  text-align: left;
  margin-left: 3rem;
  margin-top: 2rem;
  h2,
  h4 {
    font-family: 'Urbanist';
    font-style: normal;
    color: #ffffff;
  }

  h2 {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 53px;
    color: #ffffff;
    margin-bottom: 0.8rem;
  }

  h4 {
    font-weight: 500;
    font-size: 22px;

    a {
      text-decoration: underline;
    }
  }
`;

const LoginForm = styled.div`
  /* border: 1px solid red; */
  margin-left: 4rem;
  margin-top: 2rem;
  display: flex;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    label.upperInputs {
      font-family: 'Urbanist';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      /* line-height: 31px; */
      color: #ffffff;
    }

    input.grey-inputs {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 12px 16px;
      width: 45vw;
      margin: 0.5rem 0 2rem 0;
      background: #151a1e;
      border-radius: 8px;
      color: #3e4245;
      font-family: 'Urbanist';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      &::placeholder {
        font-family: 'Urbanist';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #3e4245;
      }

      &:focus {
        outline: none;
      }
    }

    button{
      padding: 12px 40px;
      background: #0a1e8f;
      border-radius: 8px;
      font-family: 'Urbanist';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      /* line-height: 31px; */
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate()
  const loginHandler = (e) => {
    e.preventDefault();
    alert('yo')
    navigate('/')
  }
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
          <form onSubmit={loginHandler} >
            <label htmlFor='email' className='upperInputs'>
              Email
            </label>
            <input type='email' name='email' placeholder='example@gmail.com' className='grey-inputs' />
            <label htmlFor='password' className='upperInputs'>
              Password
            </label>
            <input type='password' name='password' placeholder='*******' className='grey-inputs' />
            <button type="submit">Log in to account</button>
          </form>
        </LoginForm>
      </RightContainer>
    </Section>
  );
};

export default Login;