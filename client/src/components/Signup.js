import React, {useState} from 'react'
import "./style.css"
import { Link , useNavigate} from "react-router-dom";
const Signup = () => {
  const navigate  =  useNavigate();
  const [user, setUser] = useState({
    name: "",email:"", phone:"", work:"", password:"", cpassword:""
  });

  let name, value;

  const handleInputs =(e)=>{
    console.log(e);
    name=e.target.name;
    value= e.target.value;

    setUser({...user, [name]:value});  //using spread operator
  }
  //code to post data into database
  const PostData= async(e)=>{
    e.preventDefault();

    // Object destructuring
    const {name,email, phone, work, password, cpassword}=user;

    // Using fetch API
    const res = await fetch("/register", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name,email, phone, work, password, cpassword
      })
    });
    const data = await res.json();
    if(data.status===422|| !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else{
      window.alert("Registration Successfull");
      console.log(" Registration Successfull");

      navigate("/login", { replace: true });
      // navigate.push("/login");
    }
  }

  return (
    <>
      <form method="POST" className='form register-form' id="register-form">
  <div className="mb-3 form-group">
    <h1 className='my-3'>Sign Up</h1>
    <label htmlFor="name" className="form-label">
    <i className="zmdi zmdi-account-circle"></i>
    </label>
    <input type="text" className="name" id="name" name="name" autoComplete='off' value={user.name} onChange={handleInputs}  placeholder='Your name'/>
  </div> 
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address
    </label>
    <input type="email" name="email" className="form-control" id="email"  aria-describedby="emailHelp" value={user.email} onChange={handleInputs} placeholder='Your email address'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone number
    </label>
    <input type="email" name="phone" className="form-control" aria-describedby="emailHelp" value={user.phone} onChange={handleInputs} placeholder='Your phone number'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Profession
    </label>
    <input type="text" className="form-control" name="work" id='work'  aria-describedby="emailHelp" value={user.work} onChange={handleInputs} placeholder='Your profession'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" id="password" className="form-control" value={user.password} onChange={handleInputs}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control c-password" id='cpassword' name="cpassword" value={user.cpassword} onChange={handleInputs} />
  </div>
  <input type="submit" name="signup" id="signup" value="Register"  onChange={handleInputs} className="btn btn-primary" onClick={PostData}></input>
</form>
<div className="siginup">
  <Link to="/login" className="registered">I am already registered</Link>
</div>
    </>
  )
}

export default Signup
