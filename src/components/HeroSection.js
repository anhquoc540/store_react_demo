//import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";
import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { ignoreInitialAspectRatio } from "@cloudinary/url-gen/qualifiers/aspectRatio";

const HeroSection = ({ myData }) => {
  const { name, image } = myData;
  const cld = new Cloudinary({cloud: {cloudName: 'df6mibrwv'}});
  const imageSection= cld.image("ifcbbfxfbngpkprwr1j8")
  
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1 className="intro-data">{ name }</h1>
            {/* <NavLink to={`/stores`}>
              <Button>show now</Button>
            </NavLink> */}
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
           <img src="https://res.cloudinary.com/df6mibrwv/image/upload/v1698121213/e36txqj4nysoqbop852a.jpg"/>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0;

  img {
    min-width: 80rem;
    height: 30rem;
  }

  .hero-section-data {
    p {
      margin: 1rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-left: 5rem;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;