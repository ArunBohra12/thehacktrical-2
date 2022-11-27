import styled from "styled-components";

export const Section = styled.div`
width: 100vw;
min-height: 100vh;
color: #fff;
font-family: Urbanist, sans-serif;

.section {
    width: 100%;
    background-color: #070B0D;
    height: 100vh;
    padding-top: 64px;

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 60%;
        margin: 0 auto;
        gap: 64px;

        .grid-item {
            padding: 16px 24px;
            border: 1px solid #fff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-size: 18px;
            font-weight: 600;
            transition: all .1s ease-in;

            &:hover {
                background-color: #283BA7;
                border-color: #283BA7;
            }
        }
    }

    .or {
        margin: 32px 0;
    }

    .custom {
        width: 60%; 
        margin: 0 auto;
        text-align: left;

        * {
            display: block;
        }

        .label {
            font-size: 18px;
            margin-bottom: 12px;
        }

        .custom-input {
            font-size: 18px;
            color: #fff;
            font-family: Urbanist, sans-serif;
            padding: 16px 24px;
            width: 100%;
            background-color: #151A1E;
            border: none;
            border-radius: 4px;

            &:focus {
                outline: none;
            }
        }
    }
}
`