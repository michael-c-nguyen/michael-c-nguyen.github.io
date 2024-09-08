import React from "react";

export default function Navbar() {
  const baseUrl = window.location.origin;  // Get the base URL of the current site
  const projectsUrl = `${baseUrl}/projects`;  
  const resumeUrl = `${baseUrl}/resume`;

  return (
    <header className="bg-stone-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 hover:text-red-500">
          <a href="/">Michael Nguyen </a>
            
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href= "/" className="mr-5 hover:text-red-500">
            Home
          </a>
          <a href= {projectsUrl} className="mr-5 hover:text-red-500">
            Projects
          </a>
          <a href= {resumeUrl} className="mr-5 hover:text-red-500">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
