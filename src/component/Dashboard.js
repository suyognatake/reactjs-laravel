import React, { useEffect, useState } from 'react';
import AuthUser from '../services/AuthUser';

const Dashboard = () => {

  const {http} = AuthUser();
  const [userdetail,setUserdetail] = useState();

  useEffect(()=>{
     fetchUserDetails();
  },[]);

  const fetchUserDetails = () =>{
      http.post('/me').then((res)=>{
         setUserdetail(res.data);

      });
  }
 function renderElement(){
    if(userdetail){
    return <div>
         <h4>Name</h4>
        <p>{userdetail.name}</p>
        <h4>Email</h4>
        <p>{userdetail.email}</p>
    </div>
  }
  else{
      return <p>Loading....</p>
  }
}
   return(
      <div>
          {renderElement()}
      </div>
   )
}

export default Dashboard