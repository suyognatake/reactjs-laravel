import React, { useState } from 'react';
import AuthUser from '../services/AuthUser';

const Login = () => {
  const {http,setToken} = AuthUser();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const submitform = () => {
    // console.log(email + ''+ password);
    http.post('/login',{email:email,password:password}).then((res)=>{
       setToken(res.data.user,res.data.access_token);
    })
  }
  return (
    <div className="row justify-content-center pt-5">
       <div className="col-sm-6">
            <div className="card p-4">
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
             <button type="button" onClick ={submitform} className="btn btn-primary mt-4">Login</button>
              </div>
          </div>
    </div>
  )
}

export default Login