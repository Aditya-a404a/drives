import React from 'react';

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Image from 'next/image';
import honda from "/Users/adityaarora/drivesprojectnew/public/honda.png"


export default function CarCard() {

    return(


        <div className="hero-section-car">
                    <Image src={honda}className="hero-section-image" alt="car" width={400} height={400} />
                    <div className="hero-section-text-title">
                    <h1 className="car-name">Honda Civic R</h1>

                    <div className='car-middle-section'>
                    <h2 className="car-model">Model: 2021</h2>
                    </div>

                    <h2 className= "car-no"> Vehicle Number</h2>
                    
                    <p className= "car-price"> Price: $50/day</p>
                    <p className= "car-price"> From Aditya Agency</p>
                    <div className='car-start'>
                        <label for="start">Start Date </label>
                        <input type="date" className='car-date' id="start" name="trip-start" >

                        </input>
                        <label for="end">End Date </label>
                        <input type="date" className='car-date' id="end" name="trip-end">
                        </input>
                    </div>
                    <button className="hero-section-button">Book Now</button>
                    </div>
                    
                    
        </div>



    )}









