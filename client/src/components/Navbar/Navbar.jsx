import React, { useEffect, useState } from 'react';
import { Credits, Logo, Menu, MenuItem, ProfileDetails, Section, UserSubSection } from './Navbar.styles';
import { theatrifyUser } from '../../Utils/GlobalConstants';
import { Link } from 'react-router-dom';

export const updateNavbar = () => {

}

export const CreditSvg = () => {
  return (
    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9224 6.58301C19.9348 7.48224 21.5776 9.04475 22.5765 11.0095C23.5754 12.9743 23.8699 15.2223 23.4108 17.3781C22.9517 19.5338 21.7668 21.4668 20.0539 22.854C18.3411 24.2413 16.2042 24.9988 14.0001 25C12.1148 24.9999 10.271 24.4462 8.6976 23.4074C7.12423 22.3687 5.89056 20.8908 5.14972 19.1571C4.40889 17.4235 4.19352 15.5104 4.53035 13.6554C4.86718 11.8004 5.74137 10.0852 7.04441 8.72267C7.94235 9.97653 9.12721 10.9974 10.5001 11.7C10.5241 10.1584 10.888 8.6411 11.5658 7.25628C12.2436 5.87146 13.2186 4.65325 14.4212 3.68851C15.3391 4.91956 16.5395 5.91189 17.9212 6.58184L17.9224 6.58301Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.0001 21.5C15.1101 21.4996 16.1784 21.0773 16.9886 20.3187C17.7989 19.5601 18.2905 18.5219 18.3639 17.4144C18.4373 16.3069 18.087 15.2129 17.384 14.354C16.681 13.495 15.6778 12.9354 14.5776 12.7885C13.3731 13.8663 12.5795 15.3283 12.3318 16.9255C11.4331 16.7057 10.5871 16.3091 9.84329 15.7588C9.62728 16.416 9.57018 17.115 9.67666 17.7985C9.78314 18.482 10.0502 19.1305 10.4559 19.6908C10.8615 20.2511 11.3943 20.7072 12.0104 21.0217C12.6265 21.3362 13.3084 21.5001 14.0001 21.5V21.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

const Navbar = () => {
  const [userData, setUserData] = useState({});

  // const [shouldUpdateNav, setShouldUpdateNav] = useState(false)

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const userData = JSON.parse(localStorage.getItem(theatrifyUser));
      setUserData(userData);
    }
    fetchUserData();
  }, []);

  return (
    <Section>
      <Logo>theatrify</Logo>
      <UserSubSection>
        <Menu>
          <MenuItem>
            <Link to='/'>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/allshows'>Shows</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/allvideos'>Videos</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/credits'>Buy Credits</Link>
          </MenuItem>
        </Menu>
        <ProfileDetails>
          {userData.userType !== 'org' ? (
            <Credits>
              <CreditSvg/>
              <h3 id="userCredits" >{userData.credits}</h3>
            </Credits>
          ) : null}
          <Link to="/me" >
          <img src={userData.photo} alt='' />
          </Link>
        </ProfileDetails>
      </UserSubSection>
    </Section>
  );
};

export default Navbar;
