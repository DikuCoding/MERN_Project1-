import React from 'react'
import "./contact.css"
import  {useEffect, useState} from 'react'

import me from "../images/me.jpg"
import { Link , useNavigate} from "react-router-dom";

const Contact = () => {
  // const navigate = useNavigate();

  const [userData, setUserData] = useState({});

const userContact = async()=>{
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
    setUserData(data);

    if(!res.status ===200){
        const error =new Error(res.error);
        throw error;
    }

  }catch(err){
    console.log(err);
    // navigate("/login", { replace: true });
  }
}
  
  useEffect(()=>{
      userContact();
  }, []);
  return (
    <>
    <div className='contact_info'>
      <div className="container-fluid">
        <div className="row mx-auto">
          <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
            {/* Phone Number */}
            <div className="contact_info_item d-flex justify-content-start align-items-center my-3">
            <i className="zmdi zmdi-code-smartphone phone"></i>
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Phone
                </div>
                <div className="contact_info_text">
                  9840032315
                </div>
              </div>
            </div>
            {/* Email Address */}
            <div className="contact_info_item d-flex justify-content-start align-items-center my-3">
            <i className="zmdi zmdi-code-smartphone phone"></i>
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Email
                </div>
                <div className="contact_info_text">
                  dikeshk.com.np
                </div>
              </div>
            </div>
            {/* Location */}
            <div className="contact_info_item d-flex justify-content-start align-items-center my-3">
            <i className="zmdi zmdi-code-smartphone phone"></i>
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Address
                </div>
                <div className="contact_info_text">
                  Bhaktapur
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Contact us form */}
    <div className="contact_form mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact_form_container py-5">
              <div className="contact_form_title">
                Get in Touch  </div>
                <form action="" id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input type="text" id="contact_form_name" className='contact_form_name input_field'
                    value={userData.name} 
                    placeholder='Your name' />

                    <input type="email" id="contact_form_email" className='contact_form_email input_field' 
                    value={userData.email} 
                    placeholder='Your email' />

                    <input type="number" id="contact_form_phone" className='contact_form_phone input_field' 
                    value={userData.phone} 
                    placeholder='Your Phone Number' />
                  </div>

                  <div className="contact_form_text mt-4">
                    <textarea name="text_field contact_form_message" 
                    
                    placeholder='Your message' cols="30" rows="10"></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button type='submit' className='button contact_submit_button'>Send Message</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Contact
