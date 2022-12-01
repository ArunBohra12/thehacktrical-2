import React, { useState, useRef } from 'react';

import FormGroup from '../../components/FormGroup/FormGroup';
import Button from '../../components/Button/Button';
import { uploadVideo } from '../../api/videosAndShows';

const UploadVideo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const videoInput = useRef(null);
  const thumbnailInput = useRef(null);

  const submitHandler = async e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('video', videoInput.current.files[0]);
    formData.append('thumbnail', thumbnailInput.current.files[0]);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);

    const data = await uploadVideo(formData);

    if (Array.isArray(data) && data[0] === false) {
      alert(data[1]);
      return;
    }

    alert('Video uploaded successfully');
    setName('');
    setPrice(0);
    setDescription('');
  };

  return (
    <div className='py-10'>
      <h1 className='text-4xl font-bold mb-10'>Upload a Video</h1>

      <form onSubmit={submitHandler} className='w-[70%]'>
        <FormGroup
          label='Video Name'
          id='video-name'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='A name for your video'
          className='mb-8'
        />

        <div className='mb-8'>
          <label htmlFor='company-vision' className='block mb-2 text-xl'>
            Video description
          </label>
          <textarea
            className='rounded p-4 max-w-full min-w-full'
            rows='5'
            id='description'
            placeholder='A brief description for the video.'
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className='mb-8 text-xl'>
          <span className='mr-4'>Video File</span>
          <Button className='ml-4' type='button'>
            <label htmlFor='video' className='mb-2'>
              Choose video file
            </label>
          </Button>
          <input type='file' accept='video/*' ref={videoInput} id='video' className='hidden' />
        </div>

        <div className='mb-8 text-xl'>
          <span className='mr-4'>Video Thumbnail</span>
          <Button className='ml-4' type='button'>
            <label htmlFor='thumbnail' className='mb-2'>
              Choose an Image
            </label>
          </Button>
          <input
            type='file'
            accept='image/png,image/jpg,image/jpeg'
            ref={thumbnailInput}
            id='thumbnail'
            className='hidden'
          />
        </div>

        <FormGroup
          label='Video Price (in credits)'
          id='video-price'
          type='number'
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder='Price for your video'
          className='mb-8'
        />

        <Button className='w-full my-5 text-xl py-2'>Create Show</Button>
      </form>
    </div>
  );
};

export default UploadVideo;
