import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  // Check for the token in localStorage
  const token = localStorage.getItem('token');

  // If there's a token, render the passed component; otherwise, redirect to sign-in page
  return token ? <Component /> : <Navigate to="/signin" />;
};
export default PrivateRoute