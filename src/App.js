
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from './style/GlobalStyle';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import FilterForm from './components/FilterForm';
import StoreList from './components/StoreList';
import DetailForm from './components/StandardDetailForm';
import SpecialDetailForm from './components/SpecialDetailForm';
import StandardDetailForm from './components/StandardDetailForm';
import ProfileDetailForm from './components/ProfileDetailForm';
import { useEffect } from 'react';
import Cart from './components/Cart';
import "react-toastify/dist/ReactToastify.css";

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

  const data = ['m1', 'm2', 'm3'];
  const feedback = [
    {
      username: 'David',
      content: 'Giat nhu cc',
      stars: 5,
      createDate: '22/08/2000'
    },
    {
      username: 'David',
      content: 'Giat nhu cc',
      stars: 5,
      createDate: '22/08/2000'
    }
  ]
  const price = [
    {
      id: '1',
      to: '5',
      from: '6',
      unit: 'kg',
      price: 20000,
    },

    {
      id: '2',
      to: '5',
      from: '6',
      unit: 'kg',
      price: 50000,
    },


    {
      id: '3',
      to: '5',
      from: '6',
      unit: 'kg',
      price: 70000
    },

  ];

  const store1 = {
    id:1
  };

  const store2 = {
    id:2
  };




  return (
    // <ThemeProvider theme={theme}>
    //   <Router>
    //     <GlobalStyle />

    //     <Routes>
    //       <Route path="/" element={<MainLayout filter={<FilterForm></FilterForm>} list ={<StoreList></StoreList>}/>}/>
    //       {/* <Route path="/about" element={<About />} />
    //       <Route path="/stores" element={<Stores />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/stores" element={<Stores />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/singlestore/:id" element={<SingleStore />} />
    //       <Route path="/singleproduct/:id" element={<SingleProduct />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="*" element={<ErrorPage />} />
    //       <Route path='/user/:activepage' element={<UserProfile />} /> */}
    //     </Routes>


    //   </Router>


    // </ThemeProvider >




    <ThemeProvider theme={theme}>
      <Router>
        <ToastContainer />
        <Routes>
        <Route path="/" element={<MainLayout filter={<FilterForm></FilterForm>} list ={<StoreList></StoreList>}/>}/>
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/standard" element={<StandardDetailForm id ={5} name='Giat say tong hop' store={store1} feedback={feedback} prices={price} isStandard={true}></StandardDetailForm> }/>
          <Route path="/special" element={<SpecialDetailForm name='Giat ao so mi' id={4} store={store2}  price={30000} materials={data} feedback={feedback} ></SpecialDetailForm>} />
          
         
        </Routes>
      </Router>
      <GlobalStyle />

      
      {/* <ProfileDetailForm></ProfileDetailForm> */} 
     

    </ThemeProvider>

  );
};






export default App;
