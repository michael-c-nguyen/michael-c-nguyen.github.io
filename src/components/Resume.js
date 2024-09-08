import React from "react";
import resume from "../assets/Resume_Michael_Nguyen.pdf";
import { DocumentDownloadIcon } from "@heroicons/react/solid";

export default function Resume() {
  return (
      <section className="text-white bg-blue-900 body-font">
        {/* Resume Section */}
        <div className="bg-blue-900 text-center p-10 rounded-lg shadow-lg">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Resume
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <DocumentDownloadIcon className="w-6 h-6 text-white" />
            <a 
              href={resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white-700 hover:text-red-500"
            >
              Resume_Michael_Nguyen (PDF)
            </a>
          </div>
          
          <div className="bg-blue-900 text-center text-white p-10 flex justify-center">
            <embed
              src={`${resume}#page=1&zoom=95`}
              type="application/pdf"
              width="50%"  // Adjust as needed
              height="1100px"
              className="rounded-lg border"
            />
          </div>

        </div>
      </section>
  );
}
