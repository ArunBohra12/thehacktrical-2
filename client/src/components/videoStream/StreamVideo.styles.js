import styled from "styled-components";

export const StreamPage = styled.div`
  min-height: 100vh;
  background-color: #070a0c;

  .video-container {
    max-width: 958px;
    min-height: 100vh;
    margin: 1.5rem auto;

    h1, .video-description, video {
      width: 100%;
      margin: 0 auto;
      text-align: left;
      color: #414141;
    }

    h1 {
      font-size: 2rem;
      margin: 2rem auto;
    }

    .video-description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    video {
      border-radius: 4px;
    }
  }

`;