import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid white;
  background: #070a0c;
  /* background: lightblue; */
`;

export const Logo = styled.h3`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
`;

export const UserSubSection = styled.div`
/* border: 1px solid white; */
width: 55vw;
display: flex;
align-items: center;
justify-content: space-around;
`

export const CreditScore = styled.div`
  width: 16vw;
  /* margin: 0 auto; */
  /* box-sizing: border-box; */
  transition: all 0.2s ease;
  /* height: 15px; */
  /* overflow-y: hidden; */
  /* overflow: hidden; */

  .wrapper {
    /* height: 15px; */
    border: 2px solid #ffffff;
    border-radius: 25px;
    width: 100%;
    position: relative;
  }

  .container {
    border-radius: 25px;
    background-color: inherit;
    /* background-color: blue; */
    width: 100%;
    height: 15px;
    /* line-height: 0; */
  }

  .barCompleted {
    height: 15px;
    overflow-y: hidden;
    position: absolute;
    border-radius: 25px;
    background: linear-gradient(90deg, #ff5924 0%, #ff0703 100%);
    width: ${props => props.width};
  }

  .label {
    /* line-height: 0; */
    font-size: 0px;
  }
`;

export const Menu = styled.ul`
display: flex;
width: 30vw;
align-items: center;
justify-content: space-between;
margin-right: 3rem;
/* border: 1px solid white; */
`

export const MenuItem = styled.li`
color: #ffffff;
list-style: none;
`
