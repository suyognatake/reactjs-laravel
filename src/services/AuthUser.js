import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function AuthUser() {
    // settoken use forn save the torkn
    const navigate = useNavigate();
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
     const getUser = () => {
        const userString = localStorage.getItem('user');
        const user_details = JSON.parse(userString);
        return user_details;
     }
     const logout = () => {
        localStorage.clear();
        navigate('/login');
     }
    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser()); //user for save the user value
    const saveToken = (user,token) => {
            localStorage.setItem('token',JSON.stringify(token));
            localStorage.setItem('user',JSON.stringify(user));
            setToken(token);
            setUser(user);
            navigate("/dashboard");
    }
    const http = axios.create({
        baseURL:"http://127.0.0.1:8000/api",
        headers: {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    });
    return {
          setToken:saveToken,
          token,
          user,
          getToken,
          http,
          logout
    }

    //register user api
}