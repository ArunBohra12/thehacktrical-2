import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { CheckoutForm, Section, VideoSummary } from './AccessVideo.styles'

const AccessVideo = () => {
  return (
    <>
    <Navbar/>
    <Section>
      <VideoSummary>
      </VideoSummary>
      <CheckoutForm>
      </CheckoutForm>
    </Section>
    </>
  )
}

export default AccessVideo