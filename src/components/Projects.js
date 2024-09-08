import { CodeIcon } from "@heroicons/react/solid";
import React from 'react';
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-blue-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Languages: Python, Java, Javascript, SQL, MATLAB, and C
          </p>
          <br />
          <p className="text-white">
            <b><i>Hover to view more information and some cards are clickable</i></b>
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.image}
              className="h-full items-center justify-center"
            >
              <div className="relative bg-gray-900 border-4 border-gray-800 rounded-lg overflow-hidden w-full h-full">
                {project.image.length > 1 ? (
                  project.image.map((image, index) => (
                    <img
                      key={index}
                      alt="project_image"
                      className="w-full object-cover mb-8"
                      src={image}
                    />
                  ))
                ) : (
                  project.image.map((image, index) => (
                    <img
                      key={index}
                      alt="project_image"
                      className= {project.class}
                      src={image}
                    />
                  ))
                )}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-xs md:text-sm title-font font-medium text-red-500 mb-1 text-center">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-sm md:text-lg font-medium text-white mb-2 text-center">
                    {project.title}
                  </h1>
                  <p
                  className="leading-relaxed text-xs md:text-base text-center overflow-auto"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
