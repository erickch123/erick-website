import React, {useState,useEffect} from 'react';
import { Route, Routes, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"
function App() {
  console.log("app is running")
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
      </Routes>
      
      {/* <h1 className="text-3xl-green font-bold underline">
        Hello world!
      </h1>    */}

    </div>
  );
}

export default App;
