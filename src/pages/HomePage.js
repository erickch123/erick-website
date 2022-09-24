import * as React from "react";
// import { useState, useEffect, useContext} from "react";
import Books from '../components/Books'
import Coffee from '../components/Coffee'
import profilepic from "../images/profilephoto2.jpeg"
import theleanstartup from "../images/theleanstartup.jpeg"
import peopletempleacehextended from "../images/peopletempleacehextende.jpg"


const HomePage = ()=>{
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Erick Chandra.
            <br></br>
            <br className="hidden lg:inline-block " />A penultimate Computer Science Student at SUTD, specialising in Fintech and Artificial Intelligence.
          </h1>
          
          <p className="mb-8 leading-relaxed text-justify"> My experience inclines toward <b>Backend Software Engineering</b> and a bit of <b>Frontend Developer</b> (which is this website).
          During my free time, I love watching, reading, or listening to podcasts about <b>Startups</b>, technology, and inspirational figures; which makes me interested to become a <b>Venture Capitalist</b> one day.  I also love <b>Photography </b>, brewing <b> Specialty Coffee</b>,<b> Basketball</b>, cooking, visit libraries or exhibitions, and participating in <b>Leadership</b> events. Sometimes, I upcycle waste for personal <b>Sustainability</b> projects.
          </p>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src= {profilepic}
          />
        </div>
        
      </div>

      <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center ">
        <div className="flex justify-center ">
          <div className="flex-col content-center ">
            <a              className="inline-flex w-full  text-white  bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Books I'm Currently Reading
            </a>
            <div className = "pt-10 px-5 content-center ">
              <img
              className="object-cover object-center rounded max-h-100 max-w-xs"
              alt="hero"
              src= {theleanstartup}
              />
            </div>
          </div>
          <div className="flex-col content-center ml-6">
            <a className=" inline-flex w-full  text-white bg-teal-400 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 hover:text-white rounded text-lg">
              Coffee I'm Currently Brewing
            </a>
            <div className = "pt-10 max-w-xs px-5 content-center">
              <img
                className="object-cover object-center rounded max-h-128"
                alt="hero"
                src= {peopletempleacehextended}
                 />
            </div>
          </div>
           
          </div>

      </div>
    </section>
  );
  }
export default HomePage;