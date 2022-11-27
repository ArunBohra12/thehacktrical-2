import React from 'react'
import Navbar, { CreditSvg } from '../../components/Navbar/Navbar'
import { Section } from './Credits.styles'

const Credits = () => {
  return (
    <>
    <Navbar />
    <Section>
      <section className='section'>
        <div className="grid-container">
          <a href="#" className="grid-item"><CreditSvg/> Buy 50 Credits</a>
          <a href="#" className="grid-item"><CreditSvg/> Buy 100 Credits</a>
          <a href="#" className="grid-item"><CreditSvg/> Buy 150 Credits</a>
          <a href="#" className="grid-item"><CreditSvg/> Buy 200 Credits</a>
          <a href="#" className="grid-item"><CreditSvg/> Buy 250 Credits</a>
          <a href="#" className="grid-item"><CreditSvg/> Buy 300 Credits</a>
        </div>
        <div className="or">OR</div>
        <div className="custom">
          <label htmlFor="custom-input" className="label">Enter a custom amount</label>
          <input type="number" className="custom-input" id='custom-input' placeholder='1000' />
        </div>
      </section>
    </Section>
    </>
  )
}

export default Credits