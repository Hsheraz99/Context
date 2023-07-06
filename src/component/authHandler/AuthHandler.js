import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Home from "../home/Home";
import Login from "../login/Login";
 const AuthHandler = () => {
    const authCtx=useContext(AuthContext)
  return   authCtx.isLoggedIn ? <Home/>:<Login/>

}
export default AuthHandler;