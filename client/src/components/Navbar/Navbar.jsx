import React, { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

import { CreditScore, Logo, Section, UserSubSection } from './Navbar.styles';
import { theatrifyUser } from '../../Utils/GlobalConstants';

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
      </UserSubSection>
    </Section>
  );
};

export default Navbar;
