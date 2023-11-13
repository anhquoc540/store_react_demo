import React from "react";
import clsx from "clsx";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "styled-components";


  const Footer = () => {
const iconStyle = {
  fontSize: '5.4rem'
}
   return (
    <Wrapper>
      <div className="container">
         <div className="infoText">
            <span className="title">Customer services</span>
            <span className="info">Help center</span>
            <span className="info">Report abuse</span>
            <span className="info">Policies</span>
            <span className="info">Get paid for your feed back</span>
         </div>
         <div className="infoText">
            <span className="title">About us</span>
            <span className="info">About BirdStore2nd.com</span>
            <span className="info">Abount GOF Group</span>
            <span className="info">Legal Notice</span>
         </div>
         <div className="contactUs">
            <span>Contact us via</span>
            <div className="logoContainer">
               <FacebookIcon sx={iconStyle}/>
               <InstagramIcon sx={iconStyle}/>
               <GitHubIcon sx={iconStyle} />
            </div>
         </div>
         <div className="logo">
            <img src={'https://res.cloudinary.com/df6mibrwv/image/upload/v1698172847/xeasuevjyadfgzuj25jx.png'} alt="logo" />
         </div>
      </div>
      </Wrapper>
   );
}
export default Footer;
const Wrapper = styled.section`
.container {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3rem 18rem;
    position: relative;
    box-sizing: border-box;
    background-color: #00A9FF;

  
    .infoText {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      flex-wrap: nowrap;
      span {
        display: inline-block;
        word-wrap: normal;
        word-break: normal;
      }
      .title {
        font-family: "SeoulHangang";
        font-style: normal;
        font-weight: 400;
        font-size: 3rem;
        color: white;
      }
      .info {
        font-family: "SeoulHangang";
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2rem;
  
        color: white;
      }
    }
    .contactUs {
      font-family: "SeoulHangang";
      font-style: normal;
      font-weight: 400;
      font-size: 3rem;
      color: white;
      .logoContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        gap: 1rem;
      }
    }
  
    .logo {
      width: 18rem;
      height: 18rem;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;