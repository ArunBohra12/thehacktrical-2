import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { getAllShows, getAllVideos } from '../../api/organisation';

const OrgProfile = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [shows, setShows] = useState([]);

  // To set videos data
  useEffect(() => {
    (async () => {
      const videosData = await getAllVideos(id);
      const showsData = await getAllShows(id);

      if (Array.isArray(showsData) && showsData[0] === false) {
        alert(showsData[1]);
      }

      if (Array.isArray(videosData) && videosData[0] === false) {
        alert(videosData[1]);
      }

      if (showsData.data) setShows(showsData.data);
      if (videosData.data) setVideos(videosData.data);
    })();
  }, [id]);

  // To set shows data
  useEffect(() => {
    (async () => {})();
  }, []);

  return (
    <div className='pb-20'>
      <div className='mt-20'>
        <h3 className='my-8 text-2xl font-bold'>Uploaded Shows</h3>

        {shows.length === 0 && <p className='text-xl'>No uploaded shows...</p>}

        <div className='grid grid-cols-4 gap-20'>
          {shows.map(show => (
            <div key={show._id}>
              <Card
                image={show.photo}
                heading={show.name}
                summary={show.description.slice(0, 100)}
                subHeading={`Price: ${show.price}C`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=' mt-20'>
        <h3 className='my-8 text-2xl font-bold'>Uploaded Videos</h3>
        <div className='grid grid-cols-4 gap-20'>
          {videos.length === 0 && <p className='text-xl'>No uploaded videos...</p>}

          {videos.map(video => (
            <div key={video._id}>
              <Card
                image={video.thumbnail}
                heading={video.name}
                summary={video.description.slice(0, 100)}
                subHeading={`Price: ${video.price} C`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgProfile;
