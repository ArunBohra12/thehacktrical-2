import styled from "styled-components";

export const Section = styled.div`
width: 100vw;
min-height: calc(100vh - 4rem);
background: #151A1E;
display: flex;
`

export const VideoSummary = styled.div`
 background: #070a0c;
 width: 50vw;
 min-height: calc(100vh - 4rem);
 padding: 2rem;

 h1{
    font-family: 'Urbanist';
font-style: normal;
font-weight: 500;
font-size: 35px;
color: #FFFFFF;
margin-bottom: 1rem;
}

img{
    width: 488px;
height: 274.5px;
object-fit: contain;
}

h2{
    font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 26px;
margin-top: 1rem;
color: #FFFFFF;
}

h3{
    font-family: 'Urbanist';
font-style: normal;
font-weight: 300;
font-size: 20px;
margin-top: 0rem;
color: #FFFFFF; 
}

p{
    width: 30vw;
    margin: 0 auto;
    margin-top: 1rem;
    font-family: 'Urbanist';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #FFFFFF;
}
`

export const CheckoutForm = styled.div`
/* border: 1px solid white; */
width: 50vw;
padding-left: 10vw;
text-align: left;
h1{
    /* margin: 2rem auto; */
    /* border: 1px solid white; */
    font-family: 'Urbanist';
font-style: normal;
font-weight: 500;
font-size: 40px;
color: #FFFFFF;
margin-top: 2rem;
margin-bottom: 2rem;
}

h2{
    font-family: 'Urbanist';
    margin-bottom: 1.5rem;
font-style: normal;
font-weight: 700;
font-size: 30px;
color: #FFFFFF;
}

button{
    display: flex;
/* flex-direction: row; */
justify-content: center;
align-items: center;
padding: 24px 0px;
box-sizing: border-box;
overflow: hidden;
width: 20vw;
height: 57px;
background: #283BA7;
border-radius: 59px;
border: none;
margin-top: 4rem;
cursor: pointer;

font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 24px;
color: #FFFFFF;
/* margin: 4rem auto 0 auto; */
}

`

export const Pay = styled.div`
/* border: 1px solid white; */
display: flex;
align-items: center;
/* justify-content: space-between; */

h3{
    font-family: 'Urbanist';
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #FFFFFF;
margin-left: 2rem;
text-decoration: underline;
}
`

export const Price = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 24px;
gap: 12px;
/* width: 197px; */
/* height: 61px; */
background: #070B0D;

span{
    color: #ffffff;
    font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 24px;
color: #FFFFFF;
}
`