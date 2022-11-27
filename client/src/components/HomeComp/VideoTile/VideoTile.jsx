import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Section } from './VideoTitle.styles'

const VideoTile = ({id, img, title, description, price}) => {
    const navigate = useNavigate()
    const accessVideoHandler = () => {
        navigate('/accessvideo', {state:{videoId: id, videoDescription: description, videoPrice: price, videoName: title, videoImg: img}})        
    }
  return (
    <Section onClick={accessVideoHandler} >
        <img src={img} alt="" />
        <h3>{title}</h3>
    </Section>
  )
}

export default VideoTile