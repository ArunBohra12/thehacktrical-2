import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateOrgInfo } from '../../api/auth';

import { ReactComponent as AddCircle } from '../../assets/SVGs/AddCircle.svg';
import Button from '../../components/Button/Button';
import UserContext from '../../Context/UserContext';
import { saveToLocalStorage } from '../../Utils/Storage';

const TellUsMore = () => {
  const orgImage = useRef(null);
  const [vision, setVision] = useState('');
  const [image, setImage] = useState('');
  const { refreshData } = UserContext();

  const navigate = useNavigate();

  const handleImageUpload = () => {
    const [file] = orgImage.current.files;
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const [photo] = orgImage.current.files;

    if (!photo || !vision) return alert('Please provide all the details');

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('orgVision', vision);

    const data = await updateOrgInfo(formData);

    if (Array.isArray(data) && data[0] === false) {
      alert(data[1]);
      return;
    }

    saveToLocalStorage('user', JSON.stringify(data.data));
    refreshData();

    navigate('/me');
  };

  return (
    <div className='login-container grid grid-cols-2 gap-x-10 py-2 overflow-hidden overflow-y-scroll'>
      <div className='welcome rounded-lg p-10 flex flex-col gap-10'>
        <h2 className='text-2xl font-bold'>theatrify</h2>
        <h2 className='text-6xl font-bold mt-10'>Tell us a little more about you.</h2>
        <p className='text-xl'>
          Let's create your organization page using which you will be able to publish past event videos and new event
          tickets.
        </p>
      </div>
      <div className='py-10'>
        <h2 className='text-5xl font-bold mb-5'>Add More Info</h2>
        <form className='mt-10 pr-20' onSubmit={handleSubmit}>
          <div className='mb-10'>
            <p className='mb-2 text-xl'>Organization Image</p>
            <label
              htmlFor='org-img'
              className='rounded-full inline-block h-20 w-20 relative bg-cover'
              style={{ backgroundColor: 'var(--color-gray)', backgroundImage: `url(${image})` }}
            >
              <AddCircle className='h-5 w-5 absolute right-2 bottom-0' />
              <input
                ref={orgImage}
                type='file'
                id='org-img'
                className='hidden'
                accept='image/*'
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <div>
            <label htmlFor='company-vision' className='block mb-2 text-xl'>
              Tell us about your company vision
            </label>
            <textarea
              className='rounded p-4 max-w-full min-w-full'
              rows='8'
              placeholder='My company works on the foundation of...'
              id='company-vision'
              value={vision}
              onChange={e => setVision(e.target.value)}
            ></textarea>
          </div>

          <Button type='submit' className='mt-8 text-xl py-2.5'>
            Finish Set-up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TellUsMore;
