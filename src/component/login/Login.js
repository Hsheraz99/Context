import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login=()=>{
   const authCtx=useContext(AuthContext);
    return<div><button onClick={authCtx.onLogin}>Login</button></div>
    }
    export default Login;