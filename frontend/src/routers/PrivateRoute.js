import React,{useEffect} from 'react';
import {Navigate} from 'react-router-dom';



function PrivateRoute({children}) { 
   //---------------------------------------------
   const authenticated = true;
    return authenticated ? children : <Navigate to="/login"/>;
  }

export default PrivateRoute;