import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Section } from './UploadVideo.styles';
import { theatrifyUser } from '../../Utils/GlobalConstants';

const UploadVideo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);

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
        <input type="file" ref={videoInput} />
        <input type="file" ref={thumbnailInput} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Upload Video</button>
        </form>
    </Section>
    </>
  )
}

export default UploadVideo