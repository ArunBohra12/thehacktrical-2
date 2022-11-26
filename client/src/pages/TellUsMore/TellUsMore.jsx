import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LeftContainer from '../../components/AuthComp/LeftContainer/LeftContainer';
import { InfoForm, RightContainer, Section } from './TellUsMore.styles';

const TellUsMore = () => {
  const [orgData, setorgData] = useState({
    orgId: '',
    orgToken: '',
    orgVision: '',
    photo: '',
  });

  const orgImageInput = useRef(null)
  const navigate = useNavigate(); 
  const location = useLocation();

  useEffect(() => {
    setorgData({...orgData, orgId: location.state.id, orgToken: location.state.token})
  }, [])

  const orgInfoHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', orgImageInput.current.files[0]);
    formData.append('orgVision', orgData.orgVision)
    // console.log(orgData);
    const {data} = await axios.patch(`http://localhost:8000/api/auth/${orgData.orgId}/orginfo`, formData,
    {
      headers: {
        Authorization: `Bearer ${orgData.orgToken}`
      }
    });
    console.log(data);
    if (data.status === 'success') {
      navigate('/');
    }
  };

  return (
    <Section>
      <LeftContainer
        heading='Tell us a little more about you'
        subHeading='Let’s create your organization page using which you will be able to publish past event videos and new event tickets.'
      />
      <RightContainer>
        <InfoForm>
          <form onSubmit={orgInfoHandler}>
            <input
              type='file'
              name='photo'
              ref={orgImageInput}
            />
            <label htmlFor='orgVision'>Tell us about your groups vision</label>
            <textarea
              name='orgVision'
              placeholder='Our group aims for and provides to the audience ...'
              value={orgData.orgVision}
              onChange={e => setorgData({ ...orgData, [e.target.name]: e.target.value })}
            ></textarea>
            <button type='submit'>Finish Set-up</button>
          </form>
        </InfoForm>
      </RightContainer>
    </Section>
  );
};

export default TellUsMore;
