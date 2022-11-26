import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  padding: 20px;
  display: flex;
  background: #070a0c;
`;

export const RightContainer = styled.div`
  /* border: 1px solid red; */
  width: calc(60vw - 20px);
  color: #ffffff;
`;

export const InfoForm = styled.div`
  margin-left: 4rem;
  margin-top: 1rem;
  display: flex;
  border: 1px solid red;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    label {
      font-family: 'Urbanist';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      /* line-height: 31px; */
      color: #ffffff;
    }
  }

  textarea {
    padding: 16px 24px;
    gap: 10px;
    width: 664px;
    height: 253px;
    background: #151a1e;
    border-radius: 8px;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 31px;
    color: #667085;
    margin: 0.5rem 0 1rem 0;

    &::placeholder {
      font-family: 'Urbanist';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #3e4245;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    margin-top: 1rem;
    padding: 12px 40px;
    background: #0a1e8f;
    border-radius: 8px;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    /* line-height: 31px; */
    color: #ffffff;
    cursor: pointer;
  }
`;