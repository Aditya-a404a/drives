'use client';

import React from 'react';
import { useUser,withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import '/src/app/dashboard/styles.css'
import NavBar from '/src/app/dashboard/components/navbar.js';
import HeroSection from '/src/app/dashboard/components/herosection.js';






export default withPageAuthRequired(function CSRPage() {

    const { user,isloading} = useUser();

  





  return (
    <>

    <NavBar/>
    <HeroSection/>

    </>
      
  );
});



