import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100vw;
  padding: 20px;
  display: flex;
  /* height: 100; */
`;

const LeftContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
border: 1px solid red;
height: calc(100vh - 40px);
width: calc(40vw - 20px);
`;

const Logo = styled.div`
position: absolute;
top: 2rem;
left: 2rem;
`

const RightContainer = styled.div`
border: 1px solid red;
width: calc(60vw - 20px);
`;

const Singup = () => {
  return (
    <Section>
      <LeftContainer>
      <Logo>theatrify</Logo>
      <h1>Get started with us!</h1>
      <h4>A platform where you can buy and sell tickest for local or online theatre events.</h4>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Section>
  );
};

export default Singup;
