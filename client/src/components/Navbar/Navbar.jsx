import { Link } from 'react-router-dom';

import { ReactComponent as CreditIcon } from '../../assets/SVGs/Credits.svg';
import UserContext from '../../Context/UserContext';
import Button from '../Button/Button';

import './Navbar.css';

export const CreditSvg = CreditIcon;

const Navbar = () => {
  const { user, isLoggedIn } = UserContext();

  return (
    <div className='navbar'>
      <h3 className='logo'>theatrify</h3>

      <div className='navbar-links'>
        {user?.type === 'user' && (
          <>
            <Link to='/shows'>Shows</Link>
            <Link to='/videos'>Videos</Link>
          </>
        )}
      </div>

      {isLoggedIn === true ? (
        <>
          {user.type === 'user' && (
            <>
              <div className='credits flex gap-2' title={`Total Credits: ${user.credits}`}>
                <div className='credits-icon'>
                  <CreditSvg />
                </div>
                <div className='total-credits'>{user.credits}</div>
              </div>
              <Button>Buy Credits</Button>
            </>
          )}

          <Link to='/me'>
            <img className='profile-image rounded-full' src={user.photo} alt={user.name} />
          </Link>
        </>
      ) : (
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
