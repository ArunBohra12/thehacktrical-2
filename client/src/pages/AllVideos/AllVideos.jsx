import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Section } from './AllVideos.styles'

const AllVideos = () => {
  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    async function fetchAllShows () {
      const {data} = await axios.get('http://localhost:8000/api/videos');
      console.log(data.data);
      setAllVideos(data.data)
    }
    fetchAllShows()
  }, [])
  return (
    <>
    <Navbar/>
    <Section>
    {
      allVideos.map((video,index) => {
        return (
          <h1>{video.name}</h1>
        )
      })
    }
    </Section>
    </>
  )
}

export default AllVideos