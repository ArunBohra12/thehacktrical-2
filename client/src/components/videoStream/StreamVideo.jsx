import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../../constants';

const StreamVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${API_URL}/videos/${videoId}`);

      if (data.status === 'success') {
        setVideo(data.data);
      }
    })();
  }, [videoId]);

  return (
    <div className='py-10'>
      {video !== null && (
        <div className='video-container'>
          <h1 className='text-4xl font-bold my-10'>{video.name}</h1>
          <div className='text-lg mb-10'>{video.description}</div>

          <video
            controls
            // width: 900px; height: 640px;
            className='rounded border-solid border-4 border-zinc-50 object-cover h-[640px] w-[900px]'
            poster={video.thumbnail}
          >
            <source src={`${API_URL}/videos/stream/${videoId}`} type='video/mp4' />
          </video>
        </div>
      )}
    </div>
  );
};

export default StreamVideo;
