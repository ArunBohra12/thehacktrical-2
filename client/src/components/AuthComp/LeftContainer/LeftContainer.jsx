import React from 'react';
import { Section, Logo } from './LeftContainer.styles'

const LeftContainer = ({ heading, subHeading }) => {
  return (
    <Section>
      <Logo>
        <h3>theatrify</h3>
      </Logo>
      <h1>{heading}</h1>
      <h4>{subHeading}</h4>
    </Section>
  );
};

export default LeftContainer;
