import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Section } from './VideoTitle.styles'

const VideoTile = ({img, title}) => {
    const navigate = useNavigate()
    const accessVideoHandler = () => {
        navigate('/accessvideo')        
    }
  return (
    <Section onClick={accessVideoHandler} >
        <img src={img} alt="" />
        <h3>{title}</h3>
    </Section>
  )
}

export default VideoTile