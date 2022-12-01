import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getUser } from '../../api/auth';
import { removeFromLocalStorage } from '../../Utils/Storage';
import Button from '../../components/Button/Button';
import OrgProfile from './OrgProfile';
import UserProfile from './UserProfile';
import UserContext from '../../Context/UserContext';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { user: currentUser, refreshData } = UserContext();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getUser(currentUser._id);

      if (Array.isArray(data) && data[0] === false) {
        alert(data[1]);
        return;
      }

      setUser(data.user);
    })();
  }, [currentUser._id]);

  const handleLogout = () => {
    removeFromLocalStorage('token');
    removeFromLocalStorage('user');

    refreshData();

    navigate('/login');
  };

  if (user === null) return <></>;

  return (
    <>
      <div className='mt-10 flex gap-20'>
        <img src={user.photo} alt={user.name} className='rounded h-80 w-90 object-cover' />

        <div className='user-info w-full'>
          <div className='flex  justify-between'>
            <h2 className='text-4xl font-bold'>{user.name}</h2>
            <p
              className='text-red-800 font-bold p-2 rounded cursor-pointer'
              style={{ background: 'var(--color-gray)' }}
              onClick={handleLogout}
            >
              Log Out
            </p>
          </div>
          {user.type === 'org' ? (
            <>
              <p className='mt-8 text-xl'>{user.orgVision}</p>
              <div className='mt-10 flex gap-5'>
                <Link to='/create-show'>
                  <Button>Create Shows</Button>
                </Link>
                <Link to='/upload-video'>
                  <Button>Upload Videos</Button>
                </Link>
              </div>
            </>
          ) : (
            <p className='text-2xl mt-4'>Total Credits: {user.credits}</p>
          )}
        </div>
      </div>

      <div className='mt-10'>{user.type === 'org' ? <OrgProfile id={user._id} /> : <UserProfile id={user._id} />}</div>
    </>
  );
};

export default Profile;
