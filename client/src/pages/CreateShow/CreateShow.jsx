import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { theatrifyUser } from '../../Utils/GlobalConstants';
import { Section } from './CreateShow.styles';

const CreateShow = () => {
  const [showDetails, setShowDetails] = useState({
    name: '',
    location: '',
    date: '',
    description: '',
    price: 0,
  });

  const thumbnailInput = useRef(null);
  const [userData, setuserData] = useState({})
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(theatrifyUser));
    setuserData(userData)
  }, [])
  const inputHandler = (e) => {
    setShowDetails({...showDetails, [e.target.name]: e.target.value})
  }
  const submitHandler = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', showDetails.name);
    formData.append('location', showDetails.location);
    formData.append('date', showDetails.date);
    formData.append('description', showDetails.description);
    formData.append('price', showDetails.price);
    formData.append('photo', thumbnailInput.current.files[0]);
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    }

    const {data} = await axios.post(`http://localhost:8000/api/shows`, formData, config);
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <Section>
        <form onSubmit={submitHandler}>
          <input type='text' name='name' id='' value={showDetails.name} onChange={inputHandler} />
          <input type="file" ref={thumbnailInput} id="" />
          <input type='text' name='location' id='' value={showDetails.location} onChange={inputHandler} />
          <input type='date' name='date' id='' value={showDetails.date} onChange={inputHandler} />
          <textarea name='description' id='' cols='30' rows='10' value={showDetails.description} onChange={inputHandler} />
          <input type='number' name='price' id='' value={showDetails.price} onChange={inputHandler} />
          <button type='submit'>Create Show</button>
        </form>
      </Section>
    </>
  );
};

export default CreateShow;
