import { useEffect, useState } from 'react';

import { getBookedShows, getUnlockedVideos } from '../../api/videosAndShows';
import Card from '../../components/Card/Card';

const UserProfile = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [shows, setShows] = useState([]);

  // to set videos & shows data
  useEffect(() => {
    (async () => {
      const videosData = await getUnlockedVideos(id);
      const showsData = await getBookedShows(id);

      if (Array.isArray(showsData) && showsData[0] === false) {
        console.error(showsData[1]);
      }

      if (Array.isArray(videosData) && videosData[0] === false) {
        console.error(videosData[1]);
      }

      if (showsData.data) setShows(showsData.data ? showsData.data : []);
      if (videosData.data) setVideos(videosData.data ? videosData.data : []);
    })();
  }, [id]);

  return (
    <div className='pb-20'>
      <div className='mt-20'>
        <h3 className='my-8 text-2xl font-bold'>Booked Shows</h3>

        {shows.length === 0 && <p className='text-xl'>No uploaded shows...</p>}

        <div className='grid grid-cols-4 gap-20'>
          {shows.map(show => (
            <div key={show._id}>
              <Card
                image={show.photo}
                heading={show.name}
                summary={show.description.slice(0, 100)}
                subHeading={`Location: ${show.location}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=' mt-20'>
        <h3 className='my-8 text-2xl font-bold'>Accessed Videos</h3>
        {videos.length === 0 && <p className='text-xl'>No videos yet...</p>}
        <div className='grid grid-cols-4 gap-20'>
          {videos.map(video => (
            <div key={video._id}>
              <Card
                image={video.thumbnail}
                heading={video.name}
                summary={video.description.slice(0, 100)}
                subHeading={`Price: ${video.price} C`}
                link={`/stream/${video._id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
