import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import LeftContainer from '../../components/AuthComp/LeftContainer/LeftContainer';
import { Section, RightContainer, RegisterForm, RadioButtons, RadioButton, Buttons } from './Signup.styles';
import { apiUrl, theatrifyUser } from '../../Utils/GlobalConstants';

const Singup = () => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  });

  const [userType, setUserType] = useState('user');

  const navigate = useNavigate();

  const inputhandler = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const signupHandler = async e => {
    e.preventDefault();

    const {data} = await axios.post(`${apiUrl}/api/auth/signup`, {
      userType,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      passwordConfirm: userData.passwordConfirm
    });

    data.user.token = data.token
    if (data.status === 'success') {
      localStorage.setItem(theatrifyUser, JSON.stringify(data.user))
      if (userType === 'org') {
        navigate('/moreinfo', {state:{id: data.user._id, token: data.user.token}})
      } else {
        navigate('/')
      }
    }
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
            <input
              type='email'
              name='email'
              placeholder='example@gmail.com'
              className='grey-inputs'
              value={userData.email}
              onChange={inputhandler}
            />
            <label htmlFor='name' className='upperInputs'>
              Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Adarsh Dubey'
              className='grey-inputs'
              value={userData.name}
              onChange={inputhandler}
            />
            <label htmlFor='password' className='upperInputs'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='*******'
              className='grey-inputs'
              value={userData.password}
              onChange={inputhandler}
            />
            <label htmlFor='passwordConfirm' className='upperInputs'>
              Confirm Password
            </label>
            <input
              type='password'
              name='passwordConfirm'
              placeholder='*******'
              className='grey-inputs'
              value={userData.passwordConfirm}
              onChange={inputhandler}
            />
            <RadioButtons>
              <RadioButton onClick={() => setUserType('user')}>
                <input type='radio' name='audience' value={userType} checked={userType === 'user'} />
                <label htmlFor='audience'>Audience</label>
              </RadioButton>
              <RadioButton onClick={() => setUserType('org')}>
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
