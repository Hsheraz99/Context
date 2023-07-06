import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AuthHandler from './component/authHandler/AuthHandler';
import Home from './component/home/Home';
import Login from './component/login/Login';
import AuthContext from './component/context/AuthContext';
import { useEffect } from 'react';
function App() {
      const [isAuthenticated,setisAuthenticated]=useState(false);
      useEffect(()=>{
        const isStorageLoggedIn=localStorage.getItem('isLoggedIn')==='1';
        setisAuthenticated(isStorageLoggedIn);
        },[]);
     
      const onLogin=()=>{
        localStorage.setItem('isLoggedIn','1')
        setisAuthenticated(true);
      }
      const onLogout=()=>{
        localStorage.setItem('isLoggedIn','0')
        setisAuthenticated(false);
       }
 
  
   return (

 <>
 <div className='App' >
  <AuthContext.Provider value={{
    isLoggedIn:isAuthenticated,
    onLogin,onLogout
  }}>
  
  <AuthHandler/>
  </AuthContext.Provider>
 </div>
 </>
);
}
export default App;
