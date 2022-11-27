import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { theatrifyUser } from '../../Utils/GlobalConstants'
import { OrgButtons, Section } from './Profile.styles'

const Profile = () => {
  const [userData, setuserData] = useState({})
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(theatrifyUser));
    setuserData(userData)
  }, [])
  
  return (
    <>
    <Navbar/>
    <Section>
    {
      userData.userType === 'org' ? <OrgButtons>
      <Link to="/createshow" >
      <button>Create a Show</button>
      </Link>
      <Link to="/uploadvideo" >
      <button>Upload Video</button>
      </Link>
      </OrgButtons> : null
    }
    Profile
    </Section>
    </>
  )
}

export default Profile