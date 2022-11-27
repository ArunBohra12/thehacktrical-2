import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Section } from './UploadVideo.styles';
import { theatrifyUser } from '../../Utils/GlobalConstants';

const UploadVideo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState('');

  const [orgData, setorgData] = useState({
    orgId: '',
    orgToken: '',
    orgVision: '',
    photo: '',
  });


  const videoInput = useRef(null);
  const thumbnailInput = useRef(null);

  const [userData, setuserData] = useState({})
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(theatrifyUser));
    setuserData(userData)
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('video', videoInput.current.files[0]);
    formData.append('thumbnail', thumbnailInput.current.files[0]);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    }
    const {data} = await axios.post(`http://localhost:8000/api/videos`, formData, config);
    console.log(data);
  }

  return (
    <>
    <Navbar/>
    <Section>
        <form onSubmit={submitHandler}>
        <label htmlFor="name" className="label">Video Name</label>
        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="description" className="label">Video Description</label>
        <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor="video-file" className="label">Video File</label>
        <div className="input-btn"><input type="file" id='video-file' ref={videoInput} />Choose video file</div>
        <label htmlFor="video-thumbnail" className="label">Video Thumbnail</label>
        <div className="input-btn"><input type="file" id='video-thumbnail' ref={thumbnailInput} />Choose thumbnail image</div>
        <label htmlFor="price" className="label">Video Price</label>
        <input type="number" id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit" className='main-btn'>Upload Video</button>
        </form>
    </Section>
    </>
  )
}

export default UploadVideo