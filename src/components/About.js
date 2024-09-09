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
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center">
          <h1 className="font-mono title-font md:text-2xl text-3xl mb-4 font-medium text-white">
            <TypingEffect className="hidden lg:inline-block" text="  Hello, my name is Michael! I am an experienced software engineer 
            and I am passionate about building a better future using technology! 💻" typingSpeed={38} />
          </h1>
        </div>
      </div>
      <div className=" container px-5 py-10 mx-auto text-center lg:px-40 items-center justify-center  mt-40 mb-40 font-mono leading-relaxed text-base">
        <h1 className="font-mono title-font md:text-2xl text-3xl mb-4 font-medium text-white">About me!</h1>
          <p>
              My name is Michael Nguyen and I graduated with a B.S. in Earth Systems Science and also with a Masters in Software Engineering from UC Irvine.
              I am experienced and well versed in the domain of software engineering, backend development, and data analytics.
              You can view my completed work by navigating to the Projects section above! Thank you for visiting!
          </p>
        </div>
    </section>
  );
}