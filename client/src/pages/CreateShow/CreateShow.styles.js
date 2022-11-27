import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);
  background: #070b0d;
  text-align: left;

  form {
    font-family: Urbanist, sans-serif;
    width: 60%;
    max-width: 800px;
    margin: 64px auto;
    color: #fff;
  }

  input,
  textarea {
    display: block;
    font-family: Urbanist, sans-serif;
    font-size: 20px;
    background-color: #151a1e;
    color: #fff;
    border-radius: 4px;
    border: none;
    padding: 14px 20px;
    width: 100%;
    margin-bottom: 32px;

    &:focus {
        outline: none;
    }
}

textarea {
    resize: vertical;
}

.label {
      margin-bottom: 12px;
    display: block;
    font-size: 24px;
  }

  .thumbnail-btn {
    position: relative;
    background-color: #283BA7;
    padding: 12px 24px;
    width: fit-content;
    margin-bottom:32px;
    border-radius: 4px;
    overflow: hidden;

    input {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
    }
  }

  .main-btn {
    width: 100%;
    background-color: #283BA7;
    font-family: Urbanist, sans-serif;
    font-size: 20px;
    color: #fff;
    border: none;
    border-radius: 200px;
    padding: 16px 24px;

    &:hover {
        cursor: pointer;
    }

  }
`;
