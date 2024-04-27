"use client";
import React from 'react';
import './hero.css';
import Image from 'next/image';

export default function Hero  ()  {
    return (
        <section className="hero">
            <div class="hero-heading">
                <h1 className="hero-title"> Welcome to Drives ō͡≡o</h1>
                </div>
            <div className="hero-inner">
                <div>
                <p className="hero-subtitle"> At Drives ō͡≡o, we make renting a car a seamless and enjoyable experience. Whether you're planning a weekend getaway, a business trip, or just need a reliable ride for your daily commute, we've got you covered. Our user-friendly platform and extensive fleet of vehicles ensure that you'll find the perfect car for your needs, every time.</p>
                </div>
               
                <div className="hero-image">
                 <Image src="/assets/man-driver-and-steering-wheel-17470.png" alt="Car" className="hero-image" width={500} height={500} />
                </div>
                
            </div>

            <div className="hero-rent">
                <a className="hero-rent-tag" href='/p'>

                    <h1 className="hero-rent-tag"> Rent Now</h1>
                </a>
            </div>
        </section>
    );
}
