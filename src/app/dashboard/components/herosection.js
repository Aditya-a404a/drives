import React from "react";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import Image from "next/image";
import CarCard from '/src/app/dashboard/components/carcard.js';


export default function HeroSection() {

    return (
        <div className="hero-section">

            <div className="hero-section-cars">
                <div className="hero-section-cars-text">
                    <h1>Find the perfect car for your next adventure</h1>
                </div>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                
                
                
            

            </div>
            
            
        </div>
    )

}

