import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar, { CreditSvg } from '../../components/Navbar/Navbar';
import { CheckoutForm, Pay, Price, Section, VideoSummary } from './AccessVideo.styles';
import dummyImg from '../../assets/ShowImgs/jane eyre.jpg';
import axios from 'axios';

const AccessVideo = () => {
  const [videoDetails, setvideoDetails] = useState({
    id: '',
    description: '',
    price: '',
    name: '',
    img: ''
  })
  const location = useLocation();

  useEffect(() => {
    setvideoDetails({
      id: location.state.videoId,
      description: location.state.videoDescription,
      price: location.state.videoPrice,
      name: location.state.videoName,
      img: location.state.videoImg
    })

    // const data = axios.get('')
  }, []);

  const handleCheckout = async e => {
    e.preventDefault();
    alert('checkout');
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
              <h3>You have 200 credits left</h3>
            </Pay>
            <button type='submit'>Checkout</button>
          </form>
        </CheckoutForm>
      </Section>
    </>
  );
};

export default AccessVideo;
