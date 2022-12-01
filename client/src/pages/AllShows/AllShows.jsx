import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { getAllShows } from '../../api/videosAndShows';

const AllShows = () => {
  const [allShows, setAllShows] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllShows();

      if (Array.isArray(data) && data[0] === false) {
        alert(data[1]);
        return;
      }

      setAllShows(data.data);
    })();
  }, []);

  return (
    <div className='py-10'>
      <h1 className='text-4xl font-bold my-10'>Shows</h1>

      {allShows.length === 0 && <p className='text-xl'>No shows currently...</p>}

      <div className='grid grid-cols-4 gap-20'>
        {allShows.map(show => (
          <Card
            key={show._id}
            image={show.photo}
            heading={show.name}
            summary={`Location: ${show.location}`}
            subHeading={`Price: ${show.price}C`}
            link={`/access-show/${show._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllShows;
