import React, {createContext, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Login from './components/Login';
import Siginup from './components/Signup';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';

import { initialState,reducer } from './reducer/UseReducer';
import ForgotPassword from './components/ForgotPassword';

  // 1.Context API
  export const UserContext = createContext();
const Routing =()=>{
  return(
    <Routes>
  <Route exact path="/" element={<Home/>} > </Route>
  <Route exact path="/about" element={<About/>} > </Route>
  <Route exact path="/contact" element={<Contact/>} > </Route>
  <Route exact path="/login" element={<Login/>} > </Route>
  <Route exact path="/signup" element={<Siginup/>} > </Route>
  <Route exact path="/logout" element={<Logout/>} > </Route>
  <Route exact path="/forgot-password" element={<ForgotPassword/>} > </Route>
  <Route path="*" element={<Errorpage/>}>
  </Route>
  </Routes>
  )
}
const App=()=> {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>

      <Navbar/>
      <Routing/>
      
      </UserContext.Provider>
      
      {/* <Errorpage></Errorpage> */}
      
    </>
  );
}

export default App;
