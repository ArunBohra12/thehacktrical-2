import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid white; */
  background: #070a0c;
  /* background: lightblue; */
`;

export const Logo = styled.h3`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  margin-left: 4rem;
`;

export const UserSubSection = styled.div`
/* border: 1px solid white; */
width: 50vw;
display: flex;
align-items: center;
justify-content: space-around;
/* border: 1px solid white; */
`

export const Menu = styled.ul`
display: flex;
width: 30vw;
align-items: center;
justify-content: space-between;
margin-right: 3rem;


`

export const MenuItem = styled.li`
color: #ffffff;
font-family: 'Urbanist';
font-style: normal;
font-weight: 500;
list-style: none;

&:nth-last-child(1) {
/* border: 1px solid white; */
/* padding: 10px; */
padding: 16px 24px;
/* gap: 10px; */

/* width: 179px; */
/* height: 63px; */

background: #151A1E;
border-radius: 4px;
}
`

export const ProfileDetails = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* border: 1px solid white; */

img{
  border-radius: 50%;
width: 46px;
height: 46px;
object-fit: cover;
cursor: pointer;
}
`

export const Credits = styled.div`
display: flex;
align-items: center;
justify-content: center;

svg{
  width: 38px;
height: 38px;
}
`
