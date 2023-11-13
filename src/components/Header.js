import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/" style={{color:'white',fontSize:30}}>
               
                <img src="https://res.cloudinary.com/df6mibrwv/image/upload/v1698172847/xeasuevjyadfgzuj25jx.png" alt="my logo img" style={{ height: '80px', width: '80px',marginTop:10 }}/>
                         
            </NavLink>
            <NavLink to="/" style={{color:'white'}}>
              <h5>Trang chủ</h5>
            </NavLink>
            <NavLink to="/about" style={{color:'white'}}>
              <h5>Giới thiệu</h5>
            </NavLink>
            <NavLink to="/QuyTrinh" style={{color:'white'}}>
              <h5>Quy Trình</h5>
            </NavLink>
            <NavLink to="/contact" style={{color:'white'}}>
              <h5>Contact</h5>
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
h5{
  font-size:25px;
}
img{  
  font-size:30px;
}
  .logo {
    height: 5rem;
   
  }
`;
export default Header;