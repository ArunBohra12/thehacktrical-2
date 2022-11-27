import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowTile from '../../components/HomeComp/ShowTitle/ShowTile'
import Navbar from '../../components/Navbar/Navbar'
import { RecentShows, TheatreTiles } from '../Home/Home.styles'

const AllVideos = () => {
  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    async function fetchAllShows () {
      const {data} = await axios.get('http://localhost:8000/api/videos');
      setAllVideos(data.data)
    }
    fetchAllShows()
  }, [])

  return (
    <>
      <Navbar/>

      <RecentShows>
        <h1>Videos</h1>

          <TheatreTiles>
            {
              allVideos.map((video,index) => {
                return (
                  <ShowTile key={index} id={video._id} img={video.thumbnail} title={video.name} venue={video.location} description={video.description} price={video.price} date={video.date}/>
                )
              })
            }
          </TheatreTiles>
      </RecentShows>
    </>
  )
}

export default AllVideos