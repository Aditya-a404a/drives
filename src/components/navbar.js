"use client";
import React from 'react';
import  './navbar.css';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';




export default function NavBar() {

    const {user , isloading } =  useUser();
    console.log(user)
    

    




    return (
        <nav className="navbar">
            <div className="navbar-inner">
                
                <h1 className="nav-heading">Drives ō͡≡o</h1>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/dashboard" className="navbar-link">Rent</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/contact" className="navbar-link">About</a>
                    </li>
                </ul>
                { Boolean(user) && (
                    <div className="">
                        <a href="/api/auth/logout" className="navbar-item">Logout</a>
                    
                    </div>
                ) }
                { Boolean(user).valueOf() || (<div className="">
                    <a href="/api/auth/login" className="navbar-item">Login</a>
                    <a href="/api/auth/login" className="navbar-item">Signup</a>
                </div>)}
            </div>
        </nav>
    );
}


   




    
