import React, { useEffect, useState, useRef } from "react";
import professionalPhoto from "../images/Professional_Photo.JPG";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function About() {
  useEffect(() => {
    AOS.init({
      startEvent: 'scroll',
      delay: 450,
      duration: 2000,
      mirror: true,
    });
  }, []);

  // TypingEffect Component
  const TypingEffect = ({ text, typingSpeed }) => {
    const [displayedText, setDisplayedText] = useState("");
    

    useEffect(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length - 1) {
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, [text, typingSpeed]);

    return <p>{displayedText}</p>; 
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <img
          className="object-cover object-center rounded mt-4"
          alt="Michael"
          src={professionalPhoto}
        />
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center">
          <h1 className="font-mono title-font md:text-2xl text-3xl mb-4 font-medium text-white">
            <TypingEffect 
              text="  Welcome! I am an experienced software engineer and I am passionate about using technology to design and build products that foster a safe, better, and inclusive future!" 
              typingSpeed={48} 
            />
          </h1>
        </div>
      </div>
      <div className="font-mono title-font md:text-2xl text-3xl container mx-auto text-center items-center justify-center mt-80 mb-60 leading-relaxed text-base">
          <p>👇 Learn more about me below! 👇</p>
        </div>
      <div
         data-aos="zoom-in-up" className="container px-5 py-10 mx-auto text-center lg:px-40 items-center justify-center mt-40 mb-40 font-mono leading-relaxed text-base transition-all duration-1000"
      >
        <h1 className="font-mono title-font md:text-3xl text-3xl mb-4 font-medium text-white">👋</h1>
        <p>
          My name is Michael Nguyen and I graduated from the University of California, Irvine with a B.S. in Earth Systems Science in 2020 and also with a Masters in Software Engineering in 2022.
          I am well versed in the domain of software engineering with experience and specialties in backend engineering, frontend engineering, and data engineering/analytics.
          You can view my projects by navigating to the <a href="/#/projects"><b className="hover:text-red-500"><u>Projects</u></b></a> section above! Thank you for visiting!
        </p>
      </div>
    </section>
  );
}
