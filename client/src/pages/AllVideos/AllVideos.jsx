import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { getAllVideos } from '../../api/videosAndShows';

const AllVideos = () => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllVideos();

      if (Array.isArray(data) && data[0] === false) {
        alert(data[1]);
        return;
      }

      setAllVideos(data.data);
    })();
  }, []);

  return (
    <div className='py-10'>
      <h1 className='text-4xl font-bold my-10'>Videos</h1>

      {allVideos.length === 0 && <p className='text-xl'>No uploaded videos...</p>}

      <div className='grid grid-cols-4 gap-20'>
        {allVideos.map(video => (
          <Card
            key={video._id}
            image={video.thumbnail}
            heading={video.name}
            summary={video.description.slice(0, 100)}
            subHeading={`Price: ${video.price}C`}
            link={`/access-video/${video._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllVideos;
