import React from "react";

export default function Navbar() {
    return (
      <header className="bg-sky-900 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
          {/* <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="/About" className="ml-3 text-xl">
              Reed Barger
            </a>
          </a> */}
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="/Home" className="mr-5 hover:text-black">
              Home
            </a>
            <a href="/About" className="mr-5 hover:text-black">
              About
            </a>
            
            <a href="/Coding" className="mr-5 hover:text-black">
              Coding
            </a>
            <a href="/Photography" className="mr-5 hover:text-black">
              Photography
            </a>
            <a href="/VentureCapital" className="mr-5 hover:text-black">
              Venture Capital
            </a>
            <a href="/Coffee" className="mr-5 hover:text-black">
              Coffee
            </a>
            <a href="/ReferralCode" className="mr-5 hover:text-black">
              Referral Code
            </a>
            <a href="/Hobbies" className="mr-5 hover:text-black">
              Too many Other Hobbies
            </a>
            <a href="/Contact" className="mr-5 hover:text-black">
              Contact
            </a>
            
          </nav>
          {/* <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a> */}
        </div>
      </header>
    );
  }