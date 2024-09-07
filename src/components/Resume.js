import React from "react";
import resume from "../assets/Resume_Michael_Nguyen.pdf";

export default function Resume() {
  return (
    <section id="resume">
      <div className="text-gray-400 bg-blue-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Resume
            </h1>
          </div>

          {/* Add PDF download button */}
          <div className="text-center mb-10">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-600"
            >
              Resume_Michael_Nguyen (View PDF)
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
