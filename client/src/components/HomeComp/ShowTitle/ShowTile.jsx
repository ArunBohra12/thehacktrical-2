import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Section } from './ShowTile.styles'

const ShowTile = ({show}) => {
  const {photo, name, location} = show;
  const navigate = useNavigate()

  const navigateToShow = () => {
    // navigate(`/video/${show._id}`)
  }

  return (
    <Section onClick={() => navigateToShow()}>
        <img src={photo} alt={name} />
        <h3>{name}</h3>
        <h4>{location}</h4>
    </Section>
  )
}

export default ShowTile
