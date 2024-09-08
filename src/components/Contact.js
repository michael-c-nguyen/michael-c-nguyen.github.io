// src/components/Contact.js

import React from "react";
import linkedin from "../assets/LI-In-Bug.png";
import github from "../assets/github-mark-white.png";
import leetcode from "../assets/leetcode.png";


export default function Contact() {
  return (
    <section id="contact" className="relative bg-stone-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap px-5 py-10">
        {/* Map iframe */}
        <div className="lg:w-1/2 w-full relative">
          <iframe
            width="100%"  
            height="400" 
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252373.1418090323!2d-121.9455378783064!3d37.24425172130786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia!5e0!3m2!1sen!2sus!4v1725687574280!5m2!1sen!2sus"
          />
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center p-10">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-full px-6 mb-4">
              <h2 className="title-font font-semibold items-center tracking-widest text-xs">
              📍
              </h2>
              <p className="mt-1">California, USA</p>
            </div>
            <div className="w-full px-6">
              <h2 className="title-font font-semibold items-center tracking-widest text-xs">
              📧
              </h2>
              <a href="mailto:nguyen.michael.26@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white leading-relaxed">
                nguyen.michael.26@gmail.com
              </a>
              <h2 className="title-font font-semibold items-center tracking-widest text-xs mt-4">
              📱
              </h2>
              <p className="leading-relaxed">(949) 560-7127</p>
            </div>
          </div>

          {/* Connect with Me */}
          <div className="flex flex-col items-center mt-8">
            <h2 className="text-white text-3xl mb-4 font-medium title-font text-center">
              Connect with me!
            </h2>
            <div className="flex">
              <a href="https://www.linkedin.com/in/michaelnguyen26" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" width={48} height={48} />
              </a>
              <a href="https://www.github.com/michaelnguyen26" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" width={40} height={40} style={{ marginLeft: '1rem' }}/>
              </a>
              <a href="https://leetcode.com/u/mycallwin/" target="_blank" rel="noopener noreferrer">
                <img src={leetcode} alt="Leetcode" width={34} height={34} style={{ marginLeft: '1.2rem' }}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}