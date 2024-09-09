import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import About from './components/About';
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Me from "./components/Me";

export default function App() {
  return (
    <HashRouter>
      <div className="text-white bg-blue-900 min-h-screen body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<><About /><Me /><Contact /></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </HashRouter>
  );
}