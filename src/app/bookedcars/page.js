"use client";
import React from 'react';

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import '/src/app/dashboard/styles.css'
import Image from 'next/image';
import '/src/components/navbar.css';
import CarCard from '/src/app/dashboard/components/carcard.js';


export default withPageAuthRequired(function BookedCars() {

    const{ user, isLoading } = useUser();

    return (

        <>
        <div className="navbar">
        <div className="navbar-logo">
            <h1> Drives ō͡≡o </h1>  
        </div>
        <div className="navbar-profile">
        <a href="/profile">
        <Image src={user.picture} alt="profile" className="navbar-profile-image"  width={20} height={20} />
        </a>
        <div className="add_car">
        </div>
        </div>
    </div>
    <CarCard/>

    


        
        </>


        



    );
});
