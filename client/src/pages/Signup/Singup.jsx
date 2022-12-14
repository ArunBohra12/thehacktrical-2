import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import FormGroup from '../../components/FormGroup/FormGroup';
import UserContext from '../../Context/UserContext';
import { register } from '../../api/auth';
import { saveToLocalStorage } from '../../Utils/Storage';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { refreshData } = UserContext();
  const navigate = useNavigate();

  const handleSignup = async e => {
    e.preventDefault();

    const userType = document.querySelector('input[name="user-type"]:checked').value;

    if (!name || !email || !password || !userType) {
      return alert('Please provide all the values');
    }

    const data = await register({ name, email, password, userType });

    if (Array.isArray(data) && data[0] === false) {
      alert(data[1]);
      return;
    }

    saveToLocalStorage('token', data.token);
    saveToLocalStorage('user', JSON.stringify(data.user));
    refreshData();

    if (userType === 'org') navigate('/org-info');
    else navigate('/me');
  };

  return (
    <div className='signup-container grid grid-cols-2 gap-x-10 py-4 overflow-hidden overflow-y-scroll'>
      <div className='welcome rounded-lg p-10 flex flex-col gap-10'>
        <h2 className='text-2xl font-bold'>theatrify</h2>
        <h2 className='text-6xl font-bold mt-10'>Get started with us!</h2>
        <p className='text-xl'>A platform where you can buy and sell tickest for local or online events.</p>
      </div>
      <div className='py-4'>
        <h2 className='text-4xl font-bold mb-5'>Sign Up</h2>
        <p className='text-2xl'>
          Already have an account?&nbsp;
          <Link to='/login' className='underline'>
            Log In
          </Link>
        </p>
        <form className='mt-2 pr-20' onSubmit={handleSignup}>
          <FormGroup
            className='mt-10  text-xl'
            label='Name'
            id='signup-name'
            placeholder='Organization Name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <FormGroup
            className='mt-10  text-xl'
            label='Email'
            id='login-email'
            placeholder='example@gmail.com'
            type='email'
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

          <p className='mt-4 text-xl'>Who are you?</p>
          <div className='flex gap-10 mt-2'>
            <FormGroup
              className='flex flex-row-reverse items-center gap-x-4'
              label='Audience'
              id='login-audience'
              type='radio'
              value='user'
              defaultChecked={true}
              name='user-type'
            />

            <FormGroup
              className='flex flex-row-reverse items-center gap-x-4'
              label='Organizer'
              id='login-organizer'
              type='radio'
              value='org'
              name='user-type'
            />
          </div>

          <Button type='submit' className='mt-8 text-xl py-2.5'>
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
