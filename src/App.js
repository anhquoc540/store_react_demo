
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import FilterForm from './components/FilterForm';
import StoreList from './components/StoreList';
import DetailForm from './components/StandardDetailForm';
import SpecialDetailForm from './components/SpecialDetailForm';
import StandardDetailForm from './components/StandardDetailForm';
// import ProfileDetailForm from './components/ProfileDetailForm';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import "react-toastify/dist/ReactToastify.css";
import SingleStore from './components/SingleStore';
import HeroSection from './components/HeroSection';
import Login from './components/Login';
import SignUp from './components/SignUp';
import History from './components/History';
import Profile from './components/Profile';
import ProfileLayout from './components/layout/ProfileLayout'
const App = () => {
  // useEffect(() =>{
  //   navigator.geolocation.getCurrentPosition((positon) => 
  //   )
  // },[]
  // )
const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

 



  return (

    <ThemeProvider theme={theme}>

      <BrowserRouter>
      
        <ToastContainer />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainLayout filter={<FilterForm></FilterForm>} content={<StoreList></StoreList>}  section={<HeroSection></HeroSection>}/>} /> 
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/USER' element={<SignUp/>}></Route>
          <Route path='login/signup' element={<SignUp/>}/>
          <Route path="/single-store/:id" element={<MainLayout  content={<SingleStore></SingleStore>}/>} /> 
          <Route path="/single-service/:id" element={<MainLayout content={<SpecialDetailForm></SpecialDetailForm>}/>} />
          <Route path="/cart" element={<MainLayout  content={<Cart />}/>} />
          <Route path="/standard" element={<StandardDetailForm></StandardDetailForm>} />
          <Route path="/special" element={<SpecialDetailForm></SpecialDetailForm>} />
          <Route path="/profilelayout" element={<ProfileLayout />} >
            <Route path="/profilelayout/profile" element={<Profile />} />
            <Route path="/profilelayout/history" element={<History />} />
          </Route>

        </Routes>
      </BrowserRouter>

    //
      {/* <SingleStore></SingleStore>

       <ProfileDetailForm></ProfileDetailForm>  */}


    </ThemeProvider>

  );
};






export default App;
