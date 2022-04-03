import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {LOGIN,LOGIN_ERROR} from '../actionTypes/actionTypes';
import setAuthHeader from '../../utils/setAuthHeader';


export const login =(admindata,navigate)=>dispatch=>{
    axios.post('/login',admindata)
    .then(res=>{
        const token = res.data.token;
        localStorage.setItem('auth_token',token); 
        setAuthHeader(token);   
        const decode = jwtDecode(token);
        dispatch({
            type:LOGIN,
            payload:{
                admin:decode, 
            }
        })
        navigate('/');
        
    })
    .catch(error=>{
        dispatch({
            type:LOGIN_ERROR,
            payload:{
                error:error.response
            }
        })
    })
}


export const logout = navigate =>{
    localStorage.removeItem('auth_token');
    navigate('/login')
    return{
        type:LOGIN,
        payload:{
            admin:{}
        }
    }
}

