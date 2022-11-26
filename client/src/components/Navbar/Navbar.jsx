import React, { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

import { CreditScore, Logo, Menu, MenuItem, Section, UserSubSection } from './Navbar.styles';
import { theatrifyUser } from '../../Utils/GlobalConstants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [userData, setUserData] = useState({});

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const userData = JSON.parse(localStorage.getItem(theatrifyUser));
      console.log(userData);
      setUserData(userData);
      console.log((userData.credits/500)*100);
      // setLoading(false);
    }
    fetchUserData();
  }, []);

  return (
    <Section>
      <Logo>theatrify</Logo>
      <UserSubSection>
        <CreditScore width={`(${userData.credits}/500)*100}%`}>
          <ProgressBar
            completed={`(${userData.credits}/500)*100}%`}
            className='wrapper'
            barContainerClassName='container'
            completedClassName='barCompleted'
            labelClassName='label'
          />
        </CreditScore>
        <Menu>
        <MenuItem>
        <Link to="/allshows" >Shows</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/allvideos" >Events</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/credits" >Buy Credits</Link>
        </MenuItem>
        <MenuItem>
        <Link to="/me" >My Profile</Link>
        </MenuItem>
        </Menu>
      </UserSubSection>
    </Section>
  );
};

export default Navbar;
