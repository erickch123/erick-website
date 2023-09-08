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
import Leadership from './pages/Leadership';
import Travel from './pages/Travel';
function App() {
  console.log("app is running")
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/coding" element={<Coding />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/ventureCapital" element={<VentureCapital />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/promoCode" element={<ReferralCode />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/travel" element={<Travel />} />
      
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
