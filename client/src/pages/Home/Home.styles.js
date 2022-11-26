import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  min-height: calc(100vh - 4rem);
  padding-top: 20px;
  background: #070a0c;
  box-sizing: border-box;
`;

export const SlideShow = styled.div`
 position: relative;
  height: 50vh;
  width: 90vw;
  margin: 0 auto;
  /* border: 4px solid white; */
  /* margin-top: 2rem; */

  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  /* margin: 0; */
  padding: 0;

  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

export const RecentShows = styled.div`
border: 1px solid white;
margin: 0 auto;
margin-top: 3rem;
width: 90%;
h1{
  text-align: left;
  font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 30px;
/* margin-left: 2rem; */
color: #FFFFFF;
}
`

export const TheatreTiles = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;

`

export const RecentPlays = styled.div``
