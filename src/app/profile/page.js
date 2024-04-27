"use client"
import React from 'react';
import '/Users/adityaarora/drivesprojectnew/src/components/navbar.css';

import { useUser,withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Image from 'next/image';
import '/Users/adityaarora/drivesprojectnew/src/app/profile/styles.module.css'

export default withPageAuthRequired(function Profile() {
    
        const { user,isloading} = useUser();
    
        return (
            <>
            
            <nav className="navbar">
            <div className="navbar-inner">
                
                <h1>Drives ō͡≡o</h1>
                
                { Boolean(user) && (
                    <div className="">
                        <a href="/api/auth/logout" className="navbar-item">Logout</a>
                    
                    </div>
                ) }
                { Boolean(user).valueOf() || (<div className="">
                    <a href="/api/auth/login" className="navbar-item">Login</a>
                    <a href="/api/auth/signin" className="navbar-item">Signup</a>
                </div>)}
            </div>
        </nav>
        <div className="profile-section">


            <div className="profile-section-inner">
                <div className="profile-section-image">
                    <Image src={user.picture} alt="profile" className="profile-section-image"  width={200} height={200} />

                </div>
            </div>
            
            
            <div className="profile-box">

                <h1 className="profile-title">Profile Details</h1>

                
                <div>
                <p className='user-detail'> Name : {user.name}
                </p>
                <p> Email : { user.email}  
                </p> 
                </div>
                <div className="carbooked">

                <a href="/bookedcars" className="booked-cars"> View Booked Cars</a>
            </div>
            
            
            </div>
        </div>
        


        </>
        )
    }
)