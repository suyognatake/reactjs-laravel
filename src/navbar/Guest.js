import {Routes,Route,Link} from 'react-router-dom';
import Home from "../component/Home"
import Login from "../component/Login";
import Register from '../component/Register';

function Guest() {
  return (
    <div >
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
<ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/login">Login </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/register">Register </Link>
  </li>
</ul>

</nav>
<div className="container">
   <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
   </Routes>
</div>
    </div>
  );
}

export default Guest;
