import React,{useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {login} from '../statemanager/actions/auth';



function PrivateRoute({children}) { 
  const authenticated = useSelector((state)=>state.auth.isAuthenticated);
  const admin = useSelector((state)=>state.auth.admin);
  const expire_time = admin.exp;
  const current_time = new Date().getTime()/1000;
  let expTime = "";

  if(current_time<expire_time){
    expTime = true;
  }else{
    expTime = false;
  }
   //---------------------------------------------

   //const authenticated = true;
    return expTime && authenticated ? children : <Navigate to="/login"/>;
  }

export default PrivateRoute;