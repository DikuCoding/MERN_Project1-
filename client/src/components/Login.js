import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from "../App"
import { useContext } from "react";

const Login = () => {

  const {state, dispatch} = useContext(UserContext)

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data =  res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({type: 'USER', payload: true})
      window.alert("Login Successfully");
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <form method="POST" className="form">
        <div className="mb-3">
          <div className="siginup">
            <h1 className="my-3">Sign Up</h1>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password "
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
          />
        </div>
        <input
          type="submit"
          name="signup"
          id="signup"
          value="Log In"
          className="btn btn-primary"
          onClick={loginUser}
        ></input>
      </form>
      <Link to="/forgot-password" className="registered">
       Forgot Password
      </Link>
      <Link to="/signup" className="registered">
        Create an account
      </Link>
    </>
  );
};

export default Login;
