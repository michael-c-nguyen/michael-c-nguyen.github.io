import React from "react";
import { useEffect, useState } from "react";
import professionalPhoto from "../images/Professional_Photo.JPG";

export default function About() {
  const TypingEffect = ({ text, typingSpeed }) => {
  const [displayedText, setDisplayedText] = useState(" ");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length-1) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text]);

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
        <div></div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center">
          <h1 className="font-mono title-font md:text-2xl text-3xl mb-4 font-medium text-white">
            <TypingEffect className="hidden lg:inline-block" text="  Hello, my name is Michael! I am a passionate software engineer 
            that enjoys building a better future using technology! 💻" typingSpeed={44} />
          </h1>
        </div>
      </div>
    </section>
  );
}