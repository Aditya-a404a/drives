import React from 'react';



import Image from 'next/image';

export default function CarCard() {

    return(


        <div className="hero-section-car">
                    <Image src="/images/car3.jpg" className="hero-section-image" alt="car" width={400} height={400} />
                    <div className="hero-section-text-title">
                    <h1 className="car-name">Honda Civic R</h1>

                    <div className='car-middle-section'>
                    <h2 className="car-model">Model: 2021</h2>
                    </div>

                    <h2 className= "car-no"> Vehicle Number</h2>
                    
                    <p className= "car-price">  booked on Price: $50/day</p>
                    <p className= "car-price"> booked by : Aditya Agency</p>
                    <div className='car-start'>
                        <label for="start"> Booked on   </label>
                    </div>
                        

                        
                        
                    
                    
                    
        </div>
        </div>



    )}




