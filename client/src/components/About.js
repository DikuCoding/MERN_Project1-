import React, {useEffect, useState} from 'react'
import "./about.css"
import me from "../images/me.jpg"
import { Link , useNavigate} from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

const callAboutPage = async()=>{
  try{
    const res = await fetch('/about', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials:"include"
    });

    const data = await res.json();
    console.log(data);
    setUserData(data);

    if(!res.status ===200){
        const error =new Error(res.error);
        throw error;
    }

  }catch(err){
    console.log(err);
    navigate("/login", { replace: true });
  }
}
  
  useEffect(()=>{
      callAboutPage();
  }, []);

  return (
    <>
      <div className="container emp-profile">
        <form  method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
              <img src={me} alt="dikesh" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                {/* <h5>Dikesh</h5> */}
                <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS <span>1/10</span></p>

  {/* <div className="container-fluid"> */}
    <ul className="nav nav-tabs" role="tablist">
       <li className='nav-item'>
    <a className="nav-link active" href="#home" data-toggle="tab" id="home-tab" role="tab" aria-controls="home">About</a>
    </li>
    <li className='nav-item'>
        <a className="nav-link active " id="profile-tab"  data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Timeline</a>
        </li>
        
          {/* testing */}
          {/* <!-- Button trigger modal --> */}
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ok sir
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
          {/* testing ends */}
        
    </ul>
  {/* </div> */}

              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit profile" />
            </div>
          </div>

          <div className="row">
            {/* left side url */}
            <div className="col-md-4 my-3">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="http://https://www.youtube.com/@ThapaTechnical" target="_blank">Youtube</a> <br/>
                <a href="http://https://www.youtube.com/@ThapaTechnical" target="_blank">Facebook</a> <br/>
                <a href="http://https://www.youtube.com/@ThapaTechnical" target="_blank">Instagram</a> <br/>
                <a href="http://https://www.youtube.com/@ThapaTechnical" target="_blank">LinkedIn</a> <br/>
                <a href="http://https://www.youtube.com/@ThapaTechnical" target="_blank">Website</a> <br/>
              </div>
            </div>
            {/* right side data toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id='myTabContent'>
                <div className="tab-pane fade  show active" id="home" role='tabpanel' aria-labelledby='home-tab'>
                  <div className="row">
                    <div className="col-md-6">
                      <label >User ID : </label>
                    </div>
                    <div className="col-md-6">
                      <p>777</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label >Name : </label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label >Email : </label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label >Phone : </label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label >Profession : </label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
               
                
        {/* <Link className="nav-link timeline " id="profile-tab"  data-toggle="tab" to="#profile" role="tab aria" aria-controls="profile">Timeline</Link> */}
                <div className="tab-pane show active " id='profile' role='tabpanel' aria-labelledby='profile-tab' >
                <div className="row">
                    <div className="col-md-6">
                      <label >Experience </label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                <div className="row">
                    <div className="col-md-6">
                      <label >Hourly Rate </label>
                    </div>
                    <div className="col-md-6">
                      <p>10$hr</p>
                    </div>
                  </div>
                <div className="row">
                    <div className="col-md-6">
                      <label >Total Projects </label>
                    </div>
                    <div className="col-md-6">
                      <p>10</p>
                    </div>
                  </div>
                <div className="row">
                    <div className="col-md-6">
                      <label >English level </label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                <div className="row">
                    <div className="col-md-6">
                      <label >Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>Every Time</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default About
