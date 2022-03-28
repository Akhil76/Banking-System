import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {LOGIN,LOGIN_ERROR} from '../actionTypes/actionTypes';
import setAuthHeader from '../../utils/setAuthHeader';

export const login =(admindata,history)=>dispatch=>{
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
        // history.push('/');
        window.location.href="/";
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


export const logout = history =>{
    localStorage.removeItem('auth_token');
    //history.push('/login')
    window.location.href="/login";
    return{
        type:LOGIN,
        payload:{
            admin:{}
        }
    }
}

