import React, { useRef, useState } from 'react';

import FormGroup from '../../components/FormGroup/FormGroup';
import Button from '../../components/Button/Button';
import { createShow } from '../../api/videosAndShows';

const defaultFormValues = {
  name: '',
  location: '',
  date: '',
  description: '',
  price: 0,
};

const CreateShow = () => {
  const [showDetails, setShowDetails] = useState(defaultFormValues);

  const thumbnailInput = useRef(null);

  const inputHandler = e => {
    setShowDetails({ ...showDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', showDetails.name);
    formData.append('location', showDetails.location);
    formData.append('date', showDetails.date);
    formData.append('description', showDetails.description);
    formData.append('price', showDetails.price);
    formData.append('photo', thumbnailInput.current.files[0]);

    const data = await createShow(formData);

    if (Array.isArray(data) && data[0] === false) {
      alert(data[1]);
      return;
    }

    alert('Show created successfully');
    setShowDetails(defaultFormValues);
  };

  return (
    <div className='py-10'>
      <h1 className='text-4xl font-bold mb-10'>Create a Show</h1>

      <form onSubmit={submitHandler} className='w-[70%]'>
        <FormGroup
          label='Event Name'
          id='event-name'
          name='name'
          value={showDetails.name}
          onChange={inputHandler}
          placeholder='A name for your event'
          className='mb-8'
        />

        <div className='mb-8 text-xl'>
          <span className='mr-4'>Event Thumbnail</span>
          <Button className='ml-4' type='button'>
            <label htmlFor='thumbnail' className='mb-2'>
              Choose an Image
            </label>
          </Button>
          <input type='file' accept='image/*' ref={thumbnailInput} id='thumbnail' className='hidden' />
        </div>

        <FormGroup
          label='Location'
          id='event-location'
          name='location'
          placeholder='Event location'
          value={showDetails.location}
          onChange={inputHandler}
          className='mb-8'
        />

        <FormGroup
          label='Event Date'
          id='event-date'
          name='date'
          type='date'
          value={showDetails.date}
          onChange={inputHandler}
          className='mb-8'
        />

        <div className='mb-8'>
          <label htmlFor='company-vision' className='block mb-2 text-xl'>
            Event description
          </label>
          <textarea
            className='rounded p-4 max-w-full min-w-full'
            rows='5'
            name='description'
            id='description'
            placeholder='A brief description that includes everything your audience needs to know.'
            value={showDetails.description}
            onChange={inputHandler}
          ></textarea>
        </div>

        <FormGroup
          label='Price'
          id='event-price'
          name='price'
          type='number'
          value={showDetails.price}
          onChange={inputHandler}
          className='mb-8'
        />

        <Button className='w-full my-5 text-xl py-2'>Create Show</Button>
      </form>
    </div>
  );
};

export default CreateShow;
