import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  height: 50vh;
  position: relative;
  background-color: #070b0d;
`;

export const OrgButtons = styled.div`
  width: 80%;
  margin: 32px auto;
  display: flex;
  gap: 32px;

  a {
    padding: 16px 24px;
    color: #fff;
    background-color: #283ba7;
    border-radius: 4px;
    font-family: Urbanist, sans-serif;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Header = styled.div`
  background-color: #070b0d;
  text-align: left;
  font-family: Urbanist, sans-serif;
  color: #fff;

  .header {
    width: 80%;
    max-width: 1200px;
    margin: 64px auto 0 auto;
    display: flex;
    gap: 64px;
  }

  .header-img-div {
    img {
      max-width: 100%;
      object-fit: cover;
    }
  }

  .header-text {
    width: 100%;
  }

  .header-title {
    font-size: 38px;
    margin-bottom: 24px;
  }

  .org-vision-title {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: underline;
    margin-bottom: 6px;
  }

  .org-vision-description {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
  }

  .org-vision {
    margin-bottom: 20px;
  }

  .org-stats {
    display: flex;
    gap: 36px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;

    span.number {
      font-size: 28px;
      font-weight: 700;
    }
  }
`;

export const Videos = styled.div`
  /* border: 1px solid white; */
  width: 90%;
  margin: 0 auto;
  text-align: left;
  margin-top: 3rem;

  h2 {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 46px;
    color: #ffffff;
  }
`;

export const VideoGrid = styled.div`
display: grid;
margin-top: 2rem;
grid-template-columns: auto auto auto;
/* border: 2px solid white; */
`

export const Video = styled.div`
/* border: 2px solid white; */
background-color: grey;
width: 26vw;
margin: 0 auto;
background: #D9D9D9;
border-radius: 8px;
cursor: pointer;

h4{
  /* border: 2px solid white; */
  width: 100%;
  text-align: center;
  /* margin: 0 auto; */
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    /* color: #ffffff; */
}

img {
  margin: 0 auto;
    /* border: 2px solid blue; */
    width: 100%;
    /* height: 490px; */
    object-fit: contain;
  }
`;
