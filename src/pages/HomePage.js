import * as React from "react";
// import { useState, useEffect, useContext} from "react";
import profilepic from "../images/profilephoto2.jpeg"

import CoffeeGridBoxes from "../components/CoffeeGridBoxes"
import Books from "../components/Books"


const HomePage = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="title-font sm:text-5xl underline text-4xl mb-4 font-medium text-black">
            Hi, I'm Erick Chandra.
          </p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            <br className="hidden lg:inline-block " />A penultimate Computer Science Student at SUTD, specialising in Fintech and Artificial Intelligence.
          </h1>
          <p className="mb-8 leading-relaxed text-justify"> My experience leans towards <b>Backend Software Engineering</b> and a bit of <b>Frontend Development</b>. During my free time, I enjoy watching, reading, or listening to podcasts about <b>startups</b>, <b>technology</b>, and inspirational figures. This has sparked my interest in becoming a <b>Venture Capitalist</b> one day. I also have a passion for <b>photography</b>, brewing <b>specialty coffee</b>, playing <b>basketball</b>, cooking, visiting libraries or exhibitions, and participating in <b>leadership</b> events. Occasionally, I upcycle waste for personal <b>sustainability</b> projects.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={profilepic}
          />
        </div>
      </div>
      <div className="container mx-auto flex px-10 py-5 lg:flex-row flex-col items-center ">
        <div className="flex justify-center content-center flex-col lg:flex-row ">
          <div className="flex-col content-center ml-6">
            <div className=" pt-5 w-80 content-center">
              <a className=" inline-flex w-full  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 hover:text-white rounded text-lg">
                Books I'm Currently Reading
              </a>
              <Books
                title="Think Like A Monk"
                writer="Jay Shetty"
                pages="352"
                pict={require("../images/Books/thinklikeamonk.jpeg")}
              />
            </div>
          </div>
          <div className="flex-col content-center ml-6">
            <div className=" pt-5 w-80 content-center">
              <a className=" inline-flex w-full  text-white bg-teal-400 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 hover:text-white rounded text-lg">
                Coffee I'm Currently Brewing
              </a>
              <CoffeeGridBoxes
                beansName ="Colombia Yobani Ramos"
                roaster= "Morgon Coffee Roasters, Gothenburg, Sweden"
                altitude ="1900"
                varietal = "Pink Bourbon"
                process = "Washed"
                tastingnotes = "Juicy and clean with notes of lemonade and mango"
                personalremarks = "Beans that I brought back from my exchange in Sweden."
                beanspicture= {require('../images/Coffee/MorgonCoffeeColombia.jpeg')}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default HomePage;