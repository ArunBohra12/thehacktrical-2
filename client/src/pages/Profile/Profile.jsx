import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { apiUrl, theatrifyUser } from '../../Utils/GlobalConstants';
import { OrgButtons, Section, Header, Videos, Video, VideoGrid } from './Profile.styles';

const Profile = () => {
  const [userData, setuserData] = useState({});

  const [accessedVideos, setaccessedVideos] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(theatrifyUser));
    setuserData(userData);
  }, []);

  useEffect(() => {
    async function fetchUser() {
      // console.log(userData._id);
      const { data } = await axios.get(`${apiUrl}/api/auth/${userData._id}`);
      // console.log(data.user);
      setuserData(data.user);
      setaccessedVideos(data.user.accessedVideos);
    }
    fetchUser();
  }, [userData]);

  return (
    <>
      <Navbar />
      <Header>
        <div className='header'>
          <div className='header-img-div'>
            <img src={userData.photo} alt='Test' />
          </div>
          <div className='header-text'>
            <h1 className='header-title'>{userData.name}</h1>
            {userData.userType === 'org' ? (
              <div className='org-vision'>
                <h2 className='org-vision-title'>Organization Vision:</h2>
                <p className='org-vision-description'>{userData.orgVision}</p>
              </div>
            ) : null}
            <div className='org-stats'>
              <div className='shows-stats'>
                No. of Shows Boked: <span className='number'>0</span>
              </div>
              <div className='video-stats'>
                No. of Videos Accessed: <span className='number'>{accessedVideos.length}</span>
              </div>
            </div>
          </div>
        </div>
      </Header>
      {
        userData.userType !== 'org' ?     
        <Videos>
        <h2>Accessed Videos</h2>
        <VideoGrid>
          {accessedVideos.map((video, index) => {
            return (
              <Video>
                <img src={video.thumbnail} alt='' />
                <h4>{video.name}</h4>
              </Video>
            );
          })}
        </VideoGrid>
      </Videos> : null
      }
      <Section>
        {userData.userType === 'org' ? (
          <OrgButtons>
            <Link to='/createshow'>Create a Show</Link>
            <Link to='/uploadvideo'>Upload Video</Link>
          </OrgButtons>
        ) : null}
      </Section>
    </>
  );
};

export default Profile;
