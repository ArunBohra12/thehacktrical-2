import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  min-height: calc(100vh - 4rem);
  padding: 2rem 0;
  background: #070a0c;
  box-sizing: border-box;
`;

export const SlideShow = styled.div`
  position: relative;
  height: 50vh;
  width: 90vw;
  margin: 0 auto;

  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  padding: 1rem 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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
  margin: 0 auto;
  margin-top: 1rem;
  width: 90%;

  h1{
    text-align: left;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    margin: 3rem 0;
    color: #eee;
  }
`

export const TheatreTiles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`

export const RecentVideos = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 90%;
  
  h1 {
    text-align: left;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    margin: 3rem 0;
    color: #eee;
  }
`

export const VideoTiles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`
