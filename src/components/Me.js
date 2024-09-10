import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from "react";

export default function Me(){
  // Initialize AOS
  AOS.init({
    startEvent: 'scroll',
    delay: 200,
    duration: 2500,
    mirror: true,
  });

  return (
    <section id="me">
      <div data-aos="zoom-in-up" className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col items-center justify-center w-full mb-20">
        <h1 className="font-mono title-font md:text-3xl text-3xl mb-4 font-medium text-white">🙂</h1>
          <p className="font-mono lg:w-[150%] items-center justify-center leading-relaxed text-base">
          🎮: Baldur's Gate 3, Overwatch, Valorant, Genshin Impact, Fortnite, PvE, and RPG's
          <br></br>
          <br></br>
          🎥: Marvel, Action/Adventure, and Sci-Fi
          <br></br>
          <br></br>
          🍛: Japanese Curry
          <br></br>
          <br></br>
          🎵: K-Pop, Pop, R&B, Electronic, Indie, Alt Rock, Classical, and LoFi
          <br></br>
          <br></br>
          🌎: Norway, Korea, Japan, Scotland, Ireland, New Zealand, Indonesia, Cambodia, and Vietnam
          </p>
        </div>
      </div>
    </section>
  );
}