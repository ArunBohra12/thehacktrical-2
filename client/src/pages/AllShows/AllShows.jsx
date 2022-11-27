import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowTile from '../../components/HomeComp/ShowTitle/ShowTile'
import Navbar from '../../components/Navbar/Navbar'
import { RecentShows, TheatreTiles } from '../Home/Home.styles'

const AllShows = () => {
  const [allShows, setAllShows] = useState([])

  useEffect(() => {
    async function fetchAllShows () {
      const {data} = await axios.get('http://localhost:8000/api/shows');
      setAllShows(data.data)
    }
    fetchAllShows()
  }, [])
  
  return (
    <>
      <Navbar/>

      <RecentShows>
          <h1>All Shows</h1>

          <TheatreTiles>
            {
              allShows.map((show,index) => {
                return (
                  <ShowTile key={index} id={show._id} img={show.photo} title={show.name} venue={show.location} description={show.description} price={show.price} date={show.date}/>
                )
              })
            }
          </TheatreTiles>      
      </RecentShows>
    </>
  )
}

export default AllShows