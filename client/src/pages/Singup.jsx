import React from 'react';
import { Link } from 'react-router-dom';
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

const RegisterForm = styled.div`
  /* border: 1px solid red; */
  margin-left: 4rem;
  margin-top: 1rem;
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
      margin: 0.5rem 0 1rem 0;
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

      &:focus{
        outline: none;
      }
    }
  }
`;

const RadioButtons = styled.div`
  display: flex;
  margin: 1rem 0 1.4rem;
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  isolation: isolate;

  width: 260px;
  margin-right: 1rem;
  height: 63px;

  background: #151a1e;
  border-radius: 8px;

  label {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #d0d5dd;
  }

  input {
    width: 2rem;
    cursor: pointer;
  }
`;

const Buttons = styled.div`
display: flex;
/* align-items: center; */
/* justify-content: space-between; */
/* border: 1px solid red; */
width: 40vw;

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

div{
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
      margin-left: 2rem;
}
`

const Singup = () => {
  const signupHandler = e => {
    e.preventDefault();
    alert('ok');
  };
  return (
    <Section>
      <LeftContainer
        heading='Get started with us!'
        subHeading='A platform where you can buy and sell tickest for local or online theatre events.'
      />
      <RightContainer>
        <RegisterForm>
          <form onSubmit={signupHandler}>
            <label htmlFor='email' className='upperInputs'>
              Email
            </label>
            <input type='email' name='email' placeholder='example@gmail.com' className='grey-inputs' />
            <label htmlFor='name' className='upperInputs'>
              Name
            </label>
            <input type='text' name='name' placeholder='Adarsh Dubey' className='grey-inputs' />
            <label htmlFor='password' className='upperInputs'>
              Password
            </label>
            <input type='password' name='password' placeholder='*******' className='grey-inputs' />
            <label htmlFor='confirmPassword' className='upperInputs'>
              Confirm Password
            </label>
            <input type='password' name='confirmPassword' placeholder='*******' className='grey-inputs' />
            <RadioButtons>
              <RadioButton>
                <input type='radio' name='audience' />
                <label htmlFor='audience'>Audience</label>
              </RadioButton>
              <RadioButton>
                <input type='radio' name='organisation' />
                <label htmlFor='organisation'>Organisation</label>
              </RadioButton>
            </RadioButtons>
            <Buttons>
            <button type='submit'>Submit</button>
            <Link to="/login" >
            <div>
            Sign In
            </div>
            </Link>
            </Buttons>
          </form>
        </RegisterForm>
      </RightContainer>
    </Section>
  );
};

export default Singup;
