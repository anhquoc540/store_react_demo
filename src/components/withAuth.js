import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../utils/baseUrl';

const withAuth = (Component) => {
  const AuthRoute = async (props) => {
    const isLoggedIn = localStorage.getItem('userInfoDTO') !== null;
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };

  return AuthRoute;
};

export default withAuth;
