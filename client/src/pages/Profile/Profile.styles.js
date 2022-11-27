import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  height: 50vh;
  position: relative;
  background-color: #070B0D;
  `;

export const OrgButtons = styled.div`
width: 80%;
margin: 32px auto;
  display: flex;
  gap: 32px;

  a {
      padding: 16px 24px;
      color: #fff;
      background-color: #283BA7;
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
background-color: #070B0D;
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
