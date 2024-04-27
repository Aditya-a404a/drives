'use client';

import React from 'react';
import { useUser,withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import '/Users/adityaarora/drivesprojectnew/src/app/dashboard/styles.module.css'
import NavBar from '/Users/adityaarora/drivesprojectnew/src/app/dashboard/components/navbar.js';
import HeroSection from '/Users/adityaarora/drivesprojectnew/src/app/dashboard/components/herosection.js';
import Hero from '@/components/hero';





export default withPageAuthRequired(function CSRPage() {

    const { user,isloading} = useUser();

  





  return (
    <>

    <NavBar/>
    <HeroSection/>

    </>
      
  );
});



