import React from 'react';
import { Navigate } from 'react-router-dom';


const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const isLoggedIn = localStorage.getItem('userInfoDTO') !== null;
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };

  return AuthRoute;
};

export default withAuth;
