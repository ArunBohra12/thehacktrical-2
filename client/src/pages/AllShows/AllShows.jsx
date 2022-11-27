import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Section } from './AllShows.styles'

const AllShows = () => {
  const [allShows, setAllShows] = useState([])

  useEffect(() => {
    async function fetchAllShows () {
      const {data} = await axios.get('http://localhost:8000/api/shows');
      console.log(data.data);
      setAllShows(data.data)
    }
    fetchAllShows()
  }, [])
  
  return (
    <>
    <Navbar/>
    <Section>
      {
        allShows.map((show,index) => {
          return(
            <h1>{show.name}</h1>
          )
        })
      }
    </Section>
    </>
  )
}

export default AllShows