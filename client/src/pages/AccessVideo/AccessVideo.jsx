import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as CreditsLogo } from '../../assets/SVGs/Credits.svg';
import UserContext from '../../Context/UserContext';
import Button from '../../components/Button/Button';
import { accessVideo, getOneVideo, hasAccessToVideo } from '../../api/videosAndShows';
import { saveToLocalStorage } from '../../Utils/Storage';

const AccessVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [hasVideoAccess, setHasVideoAccess] = useState(false);
  const { user, refreshData } = UserContext();

  useEffect(() => {
    (async () => {
      const data = await getOneVideo(videoId);

      if (Array.isArray(data) && data[0] === false) {
        alert(data[1]);
        return;
      }

      setVideo(data.data);
    })();
  }, [videoId]);

  useEffect(() => {
    (async () => {
      const data = await hasAccessToVideo(videoId);

      if (Array.isArray(data) && data[0] === false) {
        alert(data[1]);
        return;
      }

      setHasVideoAccess(data.data.hasAccess);
    })();
  }, [videoId]);

  const purchaseVideo = () => {
    (async () => {
      const data = await accessVideo(video._id);

      if (Array.isArray(data) && data[0] === false) {
        alert(data[1]);
        return;
      }

      saveToLocalStorage('user', JSON.stringify(data.data));
      setHasVideoAccess(true);
      refreshData();
    })();
  };

  if (video === null) return <></>;

  return (
    <div className='flex gap-10 py-10'>
      <div className='w-1/2'>
        <h2 className='text-4xl font-bold my-10'>{video.name}</h2>
        <img src={video.thumbnail} alt={video.name} className='w-full rounded' />
      </div>
      <div className='w-1/2 bg-[#151A1E] p-10 rounded'>
        <h2 className='text-4xl font-bold mb-10'>Order Summary</h2>
        <h3 className='text-2xl font-bold my-5'>Get access to - {video.name}</h3>
        <p className='text-lg my-8'>{video.description}</p>
        <div className='flex gap-5 items-center'>
          <Button className='!bg-[#070a0c] flex gap-2 items-center text-xl'>
            <CreditsLogo />
            {video.price}&nbsp; Credits!
          </Button>
          <p className='text-lg'>You have {user.credits} credits left!</p>
        </div>

        {hasVideoAccess === false ? (
          <Button className='text-2xl mt-10 w-full py-2' onClick={purchaseVideo}>
            Purchase!
          </Button>
        ) : (
          <Link to={`/stream/${videoId}`}>
            <Button className='text-2xl mt-10 w-full py-2' onClick={purchaseVideo}>
              Watch Video
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AccessVideo;
