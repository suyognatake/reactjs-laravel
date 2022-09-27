import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../services/AuthUser';

const Register = () => {
  const navigate = useNavigate();
  const {http,setToken} = AuthUser();
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();


  const registerform = () => {
    // console.log(email + ''+ password);
    http.post('/register',{name:name,email:email,password:password}).then((res)=>{
         navigate("/login");
    })
  }
  return (
    <div className="row justify-content-center pt-5">
       <div className="col-sm-6">
            <div className="card p-4">
            <div className="form-group">
                  <label>Name:</label>
              <input type="text" className="form-control" placeholder="Enter name" id="name" 
                    onChange={e =>setName(e.target.value)}/>
          </div>
              <div className="form-group">
                  <label>Email address:</label>
              <input type="email" className="form-control" placeholder="Enter email" id="email" 
                    onChange={e =>setEmail(e.target.value)}/>
          </div>
              <div className="form-group mt-3">
               <label>Password:</label>
                 <input type="password" className="form-control" placeholder="Enter password" id="pwd"
                    onChange={e =>setPassword(e.target.value)} />
                </div>
             <button type="button" onClick ={registerform} className="btn btn-primary mt-4">Login</button>
              </div>
          </div>
    </div>
  )
}

export default Register