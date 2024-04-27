import React from 'react';
import { useUser,withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';


export default function Navbar() {

    const {user , isloading } =  useUser();

        return (
            <>
        
            <div className="navbar">
        
                <div className="navbar-logo">
                    
                        
                    <h1> Drives ō͡≡o </h1>
                    
                </div>
                <div className="navbar-profile">

                <a className="navbar-add-car" href="/">
                    <h1> Home 🏠  </h1>
                </a>

                <a href="/addcar" className="navbar-add-car" >
                    <h1>Add car Instead 🚘 </h1>
                </a>
                
                <a href="/profile">
                <img src={user.picture} alt="profile" className="navbar-profile-image"  width={20} height={20} />
                </a>
                <div className="add_car"> 
        
                
              
                
                
                </div>
            
                </div>
        
        
            </div>
        
            </>
              
          );
        }