import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  height: calc(100vh - 40px);
  width: calc(40vw - 20px);
  background: #0a1e8f;
  border-radius: 20px;
  color: 1px solid white;

  h1,
  h4 {
    color: #ffffff;
  }

  h1 {
    text-align: left;
    width: 60%;
    margin-left: 2rem;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    color: #ffffff;
    margin-bottom: 1rem;
    /* border: 1px solid red; */
  }

  h4 {
    text-align: left;
    margin-left: 2rem;
    width: 70%;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
    color: #ffffff;
    /* border: 1px solid red; */
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 2rem;

  h3 {
    font-family: 'Urbanist', sans-serif;
    font-style: normal;
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
  }
`;

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
