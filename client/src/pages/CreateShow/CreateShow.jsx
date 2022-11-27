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
          <label htmlFor="name" className="label">Event Name</label>
          <input type='text' name='name' id='name' value={showDetails.name} onChange={inputHandler} placeholder="A cool name for your event" />
          <label htmlFor="thumbnail" className="label">Event Thumbnail</label>
          <div className="thumbnail-btn">
          <input type="file" ref={thumbnailInput} id="thumbnail" />Choose a file</div>
          <label htmlFor="location" className="label">Event Location</label>
          <input type='text' name='location' id='location' value={showDetails.location} onChange={inputHandler} />
          <label htmlFor="date" className="label">Event Date</label>
          <input type='date' name='date' id='date' value={showDetails.date} onChange={inputHandler} />
          <label htmlFor="description" className="label">Event Description</label>
          <textarea name='description' id='description' cols='30' rows='10' value={showDetails.description} onChange={inputHandler} placeholder="A brief description that includes everything your audience needs to know."/>
          <label htmlFor="price" className="label">Event Price (in credits)</label>
          <input type='number' name='price' id='price' value={showDetails.price} onChange={inputHandler} defaultValue="50" />
          <button type='submit' className='main-btn'>Create Show</button>
        </form>
      </Section>
    </>
  );
};

export default CreateShow;
