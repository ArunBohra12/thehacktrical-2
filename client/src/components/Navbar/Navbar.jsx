import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

import { CreditScore, Logo, Section, UserSubSection } from './Navbar.styles';

const Navbar = () => {
  return (
    <Section>
      <Logo>theatrify</Logo>
      <UserSubSection>
        <CreditScore width='40%'>
          <ProgressBar
            completed={80}
            className='wrapper'
            barContainerClassName='container'
            completedClassName='barCompleted'
            labelClassName='label'
          />
        </CreditScore>
      </UserSubSection>
    </Section>
  );
};

export default Navbar;
