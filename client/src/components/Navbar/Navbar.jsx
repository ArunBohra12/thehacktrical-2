import { Link } from 'react-router-dom';
import { ReactComponent as CreditIcon } from '../../assets/SVGs/Credits.svg';

import './Navbar.css';

export const CreditSvg = CreditIcon;

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='logo'>theatrify</h3>

      <div className='navbar-links'>
        <Link to='/home'>Home</Link>
        <Link to='/shows'>Shows</Link>
        <Link to='/videos'>Videos</Link>
      </div>

      <div className='credits flex gap-2' title='Total Credits: 500'>
        <div className='credits-icon'>
          <CreditSvg />
        </div>
        <div className='total-credits'>500</div>
      </div>

      <button className='buy-credits'>Buy Credits</button>

      <Link to='/me'>
        <img
          className='profile-image rounded-full'
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
          alt='Profile'
        />
      </Link>
    </div>
  );
};

export default Navbar;
