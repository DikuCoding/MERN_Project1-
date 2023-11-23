import React, { useEffect, useContext } from 'react'
import { useNavigate} from "react-router-dom";
import {UserContext} from "../App"

const Logout = () => {
    const {state, dispatch} = useContext(UserContext)

    const navigate = useNavigate();
    // promises

    useEffect(()=>{
        fetch('/logout',{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res)=>{
            navigate("/login", { replace: true });
            if(!res.status ===200){
                dispatch({type: 'USER', payload: false})
                const error =new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        });
    })
  return (
    
    <>
      <h1>Logout Page</h1>
    </>
  )
}

export default Logout
