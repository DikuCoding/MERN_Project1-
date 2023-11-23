import React from 'react'
import "./home.css"
import  {useEffect, useState} from 'react'

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);


  const userHomePage = async()=>{
    try{
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          // Accept: "application/json",  no need of token in this
          "Content-Type": "application/json"
        },
        // credentials:"include"
      });
  
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
  
      // if(!res.status ===200){
      //     const error =new Error(res.error);
      //     throw error;
      // }
  
    }catch(err){
      console.log(err);
      // navigate("/login", { replace: true });
    }
  }
    
    useEffect(()=>{
        userHomePage();
    }, []);
  return (
    <>
    <div className="home-page">
      <div className="home-div">
        <p className='pt-5'>WELCOME</p>
        <h1>{userName}</h1>
        <h1>{show? 'Happy to see you back' : 'We are the MERN developer'}</h1>
      </div>
    </div>
      
    </>
  )
}

export default Home
