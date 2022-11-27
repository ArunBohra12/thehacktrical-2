import React from 'react'
import { Section } from './ShowTile.styles'

const ShowTile = ({img, title, venue}) => {
  return (
    <Section>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <h4>{venue}</h4>
    </Section>
  )
}

export default ShowTile