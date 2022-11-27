import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { theatrifyUser } from '../../Utils/GlobalConstants'
import { OrgButtons, Section, Header } from './Profile.styles'

const Profile = () => {
  const [userData, setuserData] = useState({})
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(theatrifyUser));
    setuserData(userData)
  }, [])
  
  return (
    <>
    <Navbar/>
    <Header>
    <div className="header">
        <div className="header-img-div">
          <img src="https://images.unsplash.com/photo-1669484179894-4cfb13b51b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Test Image" />
        </div>
        <div className="header-text">
          <h1 className="header-title">Organization Name will be here</h1>
          <div className="org-vision">
            <h2 className="org-vision-title">Organization Vision:</h2>
            <p className="org-vision-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          </div>
          <div className="org-stats">
            <div className="shows-stats">No. of shows: <span className="number">12</span></div>
            <div className="video-stats">No. of videos: <span className="number">14</span></div>
          </div>
        </div>
      </div>
    </Header>
    <Section>
    {
      userData.userType === 'org' ? <OrgButtons>
      <Link to="/createshow" >
      Create a Show
      </Link>
      <Link to="/uploadvideo" >
        Upload Video
      </Link>
      </OrgButtons> : null
    }
    </Section>
    </>
  )
}

export default Profile