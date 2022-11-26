import React from 'react';
import { Link } from 'react-router-dom';
import LeftContainer from '../../components/AuthComp/LeftContainer/LeftContainer';
import { Section, RightContainer, RegisterForm, RadioButtons, RadioButton, Buttons } from './Signup.styles';

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
              <Link to='/login'>
                <div>Sign In</div>
              </Link>
            </Buttons>
          </form>
        </RegisterForm>
      </RightContainer>
    </Section>
  );
};

export default Singup;
