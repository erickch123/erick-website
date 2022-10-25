import React, {useState,useEffect} from 'react';
import { Route, Routes, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Coding from "./pages/Coding";
import Photography from "./pages/Photography";
import Hobbies from "./pages/Hobbies";
import VentureCapital from "./pages/VentureCapital";
import Coffee from "./pages/Coffee";
import ReferralCode from "./pages/ReferralCode";
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
function App() {
  console.log("app is running")
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Coding" element={<Coding />} />
      <Route path="/Photography" element={<Photography />} />
      <Route path="/VentureCapital" element={<VentureCapital />} />
      <Route path="/Coffee" element={<Coffee />} />
      <Route path="/PromoCode" element={<ReferralCode />} />
      <Route path="/Hobbies" element={<Hobbies />} />
      {/* <Route path="/Contact" element={<Contact />} /> */}

      
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
      <Footer/>
      {/* <h1 className="text-3xl-green font-bold underline">
        Hello world!
      </h1>    */}

    </div>
  );
}

export default App;
