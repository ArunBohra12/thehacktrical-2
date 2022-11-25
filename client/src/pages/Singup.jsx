import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div`
  width: 100vw;
  padding: 20px;
  display: flex;
  background: #1e1e1e;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  height: calc(100vh - 40px);
  width: calc(40vw - 20px);
  background: #0a1e8f;
  border-radius: 20px;
  color: 1px solid white;

  h1,
  h4 {
    color: #ffffff;
  }

  h1 {
    text-align: left;
    width: 60%;
    margin-left: 2rem;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    color: #ffffff;
    margin-bottom: 1rem;
    /* border: 1px solid red; */
  }

  h4 {
    text-align: left;
    margin-left: 2rem;
    width: 80%;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
    color: #ffffff;
    /* border: 1px solid red; */
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 2rem;

  h3 {
    font-family: 'Urbanist', sans-serif;
    font-style: normal;
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
  }
`;

const RightContainer = styled.div`
  border: 1px solid red;
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

const RegisterForm = styled.div`
  border: 1px solid red;
  margin-left: 3rem;
  margin-top: 2rem;
  display: flex;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    label{
        font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 22px;
/* line-height: 31px; */
color: #FFFFFF;
    }

    input{
        display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 16px;
width: 664px;
background: #151A1E;
border-radius: 8px;
    }
  }
`;

const Singup = () => {
  const signupHandler = e => {
    e.preventDefault();
    alert('ok');
  };
  return (
    <Section>
      <LeftContainer>
        <Logo>
          <h3>theatrify</h3>
        </Logo>
        <h1>Get started with us!</h1>
        <h4>A platform where you can buy and sell tickest for local or online theatre events.</h4>
      </LeftContainer>
      <RightContainer>
        <Heading>
          <h2>Sign Up</h2>
          <h4>
            Already have an account? <Link to='/login'>Log In</Link>
          </h4>
        </Heading>
        <RegisterForm>
          <form onSubmit={signupHandler}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='' />
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='' />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='' />
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type='password' name='confirmPassword' id='' />
            <label htmlFor=''>Who are you?</label>
            <input type='radio' name='' id='' />
            <input type='radio' name='' id='' />
            <button type='submit'>Submit</button>
          </form>
        </RegisterForm>
      </RightContainer>
    </Section>
  );
};

export default Singup;
