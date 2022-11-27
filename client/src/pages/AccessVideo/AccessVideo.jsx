import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar, { CreditSvg } from '../../components/Navbar/Navbar';
import { CheckoutForm, Pay, Price, Section, VideoSummary } from './AccessVideo.styles';
import dummyImg from '../../assets/ShowImgs/jane eyre.jpg';
import axios from 'axios';
import { theatrifyUser } from '../../Utils/GlobalConstants';

const AccessVideo = () => {
  const [videoDetails, setvideoDetails] = useState({
    id: '',
    description: '',
    price: '',
    name: '',
    img: ''
  })

  const [btnText, setbtnText] = useState('Checkout')
  const [userData, setuserData] = useState({})
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(theatrifyUser));
    setuserData(userData)
  }, [])

  const location = useLocation();

  useEffect(() => {
    setvideoDetails({
      id: location.state.videoId,
      description: location.state.videoDescription,
      price: location.state.videoPrice,
      name: location.state.videoName,
      img: location.state.videoImg
    })
  }, []);

  const handleCheckout = async e => {
    e.preventDefault();
    
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    }
    // {{BASE_URL}}/videos/accessVideo/63830418c552cfb2184d1c7a
    const {data} = await axios.post(`http://localhost:8000/api/videos/accessVideo/${videoDetails.id}`, {}, config)
    console.log(data);
    if (data.status === 'success') {
      setbtnText('Checked 🤩')
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <VideoSummary>
          <h1>Order Summary</h1>
          <img src={videoDetails.img} alt='' />
          <h2>{videoDetails.name}</h2>
          <p>
            {videoDetails.description}
          </p>
        </VideoSummary>
        <CheckoutForm>
          <form onSubmit={handleCheckout}>
            <h1>Payment Details</h1>
            <h2>{videoDetails.name}</h2>
            <Pay>
              <Price>
                <CreditSvg />
                <span>{videoDetails.price} Credits!</span>
              </Price>
              <h3>You have {userData.credits} credits left</h3>
            </Pay>
            <button type='submit'>{btnText}</button>
          </form>
        </CheckoutForm>
      </Section>
    </>
  );
};

export default AccessVideo;
