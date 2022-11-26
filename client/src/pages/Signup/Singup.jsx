import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftContainer from '../../components/AuthComp/LeftContainer/LeftContainer';
import { Section, RightContainer, RegisterForm, RadioButtons, RadioButton, Buttons } from './Signup.styles';

const Singup = () => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  })

  const [userType, setUserType] = useState('user')

  const inputhandler = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  const signupHandler = e => {
    e.preventDefault();
    console.log(userData);
    console.log(userType);
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
            <input type='email' name='email' placeholder='example@gmail.com' className='grey-inputs' value={userData.email} onChange={inputhandler} />
            <label htmlFor='name' className='upperInputs'>
              Name
            </label>
            <input type='text' name='name' placeholder='Adarsh Dubey' className='grey-inputs' value={userData.name} onChange={inputhandler}  />
            <label htmlFor='password' className='upperInputs'>
              Password
            </label>
            <input type='password' name='password' placeholder='*******' className='grey-inputs' value={userData.password} onChange={inputhandler}  />
            <label htmlFor='confirmPassword' className='upperInputs'>
              Confirm Password
            </label>
            <input type='password' name='confirmPassword' placeholder='*******' className='grey-inputs' value={userData.confirmPassword} onChange={inputhandler}  />
            <RadioButtons>
              <RadioButton onClick={() => setUserType('user')} >
                <input type='radio' name='audience' value={userType} checked={userType === 'user'}  />
                <label htmlFor='audience'>Audience</label>
              </RadioButton>
              <RadioButton onClick={() => setUserType('org')}  >
                <input type='radio' name='organisation' value={userType} checked={userType === 'org'} />
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
