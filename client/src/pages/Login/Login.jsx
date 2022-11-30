import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../../components/FormGroup/FormGroup';
import Button from '../../components/Button/Button';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
  };

  return (
    <div className='login-container grid grid-cols-2 gap-x-10 py-2'>
      <div className='welcome rounded-lg p-10 flex flex-col gap-10'>
        <h2 className='text-2xl font-bold'>theatrify</h2>
        <h2 className='text-6xl font-bold mt-10'>
          Welcome <br /> back!
        </h2>
        <p className='text-xl'>A platform where you can buy and sell tickest for local or online events.</p>
      </div>
      <div className='py-10'>
        <h2 className='text-5xl font-bold mb-5'>Log In</h2>
        <p className='text-2xl'>
          Don't have an account?&nbsp;
          <Link to='/register' className='underline'>
            Sign Up
          </Link>
        </p>
        <form className='mt-10 pr-20' onSubmit={handleLogin}>
          <FormGroup
            className='mt-10  text-xl'
            label='Email'
            id='login-email'
            type='email'
            placeholder='example@gmail.com'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <FormGroup
            className='mt-8 text-xl'
            label='Password'
            id='login-password'
            placeholder='********'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button type='submit' className='mt-8 text-xl py-2.5'>
            Login to Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
