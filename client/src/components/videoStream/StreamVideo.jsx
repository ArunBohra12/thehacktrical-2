import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { apiUrl } from '../../Utils/GlobalConstants';
import Navbar from '../Navbar/Navbar';
import { StreamPage } from './StreamVideo.styles';

const StreamVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${apiUrl}/api/videos/${videoId}`);

      console.log(data)
      if (data.status === 'success') {
        setVideo(data.data);
      }
    })();
  }, []);

  console.log(video)

  return (
    <StreamPage>
      <Navbar />

      {
        video !== null && (
          <div className='video-container'>
            <h1>{video.name}</h1>
            <div className='video-description'>
              {video.description}
            </div>

            <video controls>
              <source src={`http://localhost:8000/api/videos/stream/${videoId}`} type='video/mp4' />
            </video>
          </div>
        )
      }
    </StreamPage>
  );
};

export default StreamVideo;
