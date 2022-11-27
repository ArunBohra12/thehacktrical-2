import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import Navbar from '../../components/Navbar/Navbar';
import { RecentShows, RecentVideos, Section, SlideShow, TheatreTiles, VideoTiles } from './Home.styles';
import ShowTile from '../../components/HomeComp/ShowTitle/ShowTile';
import axios from 'axios';
import VideoTile from '../../components/HomeComp/VideoTile/VideoTile';
import { apiUrl } from '../../Utils/GlobalConstants';

const Home = () => {
  const [upcomingShows, setupcomingShows] = useState([]);
  const [recentVideos, setRecentVideos] = useState([]);

  useEffect(() => {
    async function fetchUpcomingShows () {
      const {data} = await axios.get(`${apiUrl}/api/shows/upcoming`)
      setupcomingShows(data.data)
    }

    async function fetchVideos () {
      const {data} = await axios.get(`${apiUrl}/api/videos`)
      setRecentVideos(data.data)
    }

    fetchUpcomingShows();
    fetchVideos();
  }, [])
  
  return (
    <>
      <Navbar/>
      <Section>
        <SlideShow>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1489011397388-494518edf378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
        </SlideShow>
        <RecentShows>
          <h1 className='heading'>Upcoming Theatre Shows</h1>
          <TheatreTiles>
            {
              upcomingShows.map((show) => {
                return (
                  <ShowTile key={show._id} show={show} />
                )
              })
            }
          </TheatreTiles>
        </RecentShows>
        <RecentVideos>
          <h1 className='heading'>Recent Videos</h1>
          <VideoTiles>
            {
              recentVideos.map((video,index) => {
                return (
                  <VideoTile key={index} img={video.thumbnail} title={video.name} />
                )
              })
            }
          </VideoTiles>
        </RecentVideos>
      </Section>
    </>
  );
};

export default Home;
