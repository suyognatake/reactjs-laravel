import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from "./services/AuthUser";
import Guest from "../src/navbar/Guest";
import Auth from "../src/navbar/Auth";

function App() {

  const {getToken} = AuthUser();
    if(!getToken()){
      return <Guest />
    }
  return (
             <Auth />
  );
}

export default App;
