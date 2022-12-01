import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as CreditsLogo } from '../../assets/SVGs/Credits.svg';
import UserContext from '../../Context/UserContext';
import Button from '../../components/Button/Button';
import { bookShow, getOneShow } from '../../api/videosAndShows';

const BookShow = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [hasShowAccess, setHasShowAccess] = useState(false);
  const { user, refreshData } = UserContext();

  useEffect(() => {
    (async () => {
      const data = await getOneShow(showId);

      if (Array.isArray(data) && data[0] === false) {
        alert(data[1]);
        return;
      }

      setShow(data.data);
    })();
  }, [showId]);

  const accessShow = () => {
    (async () => {
      const data = await bookShow(show._id);

      if (Array.isArray(data) && data[0] === false) {
        alert(data[1]);
        return;
      }

      setHasShowAccess(true);
      refreshData();
      alert('Purchase successful');
    })();
  };

  if (show === null) return <></>;

  return (
    <div className='flex gap-10 py-10'>
      <div className='w-1/2'>
        <h2 className='text-4xl font-bold my-10'>{show.name}</h2>
        <p className='text-xl my-2'>{show.location}</p>
        <img src={show.photo} alt={show.name} className='w-full rounded' />
      </div>
      <div className='w-1/2 bg-[#151A1E] p-10 rounded'>
        <h2 className='text-4xl font-bold mb-10'>Order Summary</h2>
        <h3 className='text-2xl font-bold my-5'>Get access to - {show.name}</h3>
        <p className='text-lg my-8'>{show.description}</p>
        <div className='flex gap-5 items-center'>
          <Button className='!bg-[#070a0c] flex gap-2 items-center text-xl'>
            <CreditsLogo />
            {show.price}&nbsp; Credits!
          </Button>
          <p className='text-lg'>You have {user.credits} credits left!</p>
        </div>

        {hasShowAccess === false ? (
          <Button className='text-2xl mt-10 w-full py-2' onClick={accessShow}>
            Purchase!
          </Button>
        ) : (
          <Button className='text-2xl mt-10 w-full py-2'>Sold!</Button>
        )}
      </div>
    </div>
  );
};

export default BookShow;
