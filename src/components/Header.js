import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/" style={{color:'white'}}>
               
                <img src="https://res.cloudinary.com/df6mibrwv/image/upload/v1698172847/xeasuevjyadfgzuj25jx.png" alt="my logo img" />
                         

            </NavLink>

            <Nav />
        </MainHeader>
    );
};

const MainHeader = styled.header`
  padding:0 4rem;
  height: 7rem;
  background-color: #00A9FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
   
  }
  img{
    height: 70px;
    width: 70px;
  }
`;
export default Header;