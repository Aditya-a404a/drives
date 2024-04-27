
"use client";
import React  from "react";
import '/src/app/addcar/styles.css'


import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

import Image from "next/image";

export default withPageAuthRequired(function addcar() {
    const { user,isloading} = useUser();
  return (
    <>
    <div className= "navbar" >
        <div className="navbar-logo">
            <h1> Drives ō͡≡o </h1>
        </div>
        <div className="navbar-profile">
            <a href= "/ " className="navbar-home"> Home </a>
            <a href="/profile">
            <Image src={user.picture} alt="profile" className="navbar-profile-image"  width={100} height={100} />
            </a>
          </div>
    </div>
    <div className="hero-section">
      <div className="hero-section-title">
        <h1>Add car by filling details</h1>
      </div>
      <form className="hero-section-form">

        <div className="hero-section-form-input">
          <label className="hero-label">Car Name</label>
          <input type="text" placeholder="Enter Car Name" className="hero-input-field" />
        </div>
        <div className="hero-section-form-input">
          <label className="hero-label">Car Model</label>
          <input type="text" placeholder="Enter Car Model" className="hero-input-field" />
        </div>
        <div className="hero-section-form-input">
          <label className="hero-label">Car Number</label>
          <input type="text" placeholder="Enter Car Number" className="hero-input-field" />
        </div>
        <div className="hero-section-form-input">
          <label className="hero-label">Car Image</label>
          <input type="file" className="hero-input-field" />
        </div>
        <div className="hero-section-form-input">
          <label className="hero-label">Car Price</label>
          <input type="text" className="hero-input-field" placeholder="Enter Car Price per Day" />
        </div>
        <div className="hero-section-form-input">
          <input type="submit"  palceholder= "Submit " />
        </div>
      </form>
    </div>
    </>  
  );
});
