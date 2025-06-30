import * as React from "react";
// import { useState, useEffect, useContext} from "react";
// import profilepic from "https://storage.googleapis.com/erc-photos/home/profileBali.jpg"

import CoffeeGridBoxes from "../components/Coffee/CoffeeGridBoxes"
import BooksHome from "../components/Books/BooksHome"

const HomePage = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="title-font sm:text-5xl underline text-4xl mb-4 font-medium text-black">
            Hi, I'm Erick Chandra.
          </p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            <br className="hidden lg:inline-block " />A tech professional based in Singapore, with expertise in software engineering, artificial intelligence, and data; SUTD Computer Science Class of 2024.
          </h1>
          <p className="mb-8 leading-relaxed text-justify">During my free time, I enjoy watching, reading, or listening to podcasts about <b>startups</b>, <b>technology</b>, and inspirational figures. This has sparked my interest in becoming a <b>Venture Capitalist</b> one day. I also have a passion for <b>photography</b>, brewing <b>specialty coffee</b>, playing <b>basketball</b>, cooking, visiting libraries or exhibitions, and participating in <b>leadership</b> events. Occasionally, I upcycle waste for personal <b>sustainability</b> projects.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://storage.googleapis.com/erc-photos/home/profileBali.jpg"
          />
        </div>
      </div>
      {/* <div className="container mx-auto flex px-10 py-5 lg:flex-row flex-col items-center ">
        <div className="flex justify-center content-center flex-col md:flex-row ">
          
          <div className="flex-col content-center ml-6">
            <div className=" pt-5 w-80 content-center text-center">
              <a className=" inline-flex w-full  text-white bg-teal-400 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 hover:text-white rounded text-lg ">
                Coffee I'm Currently Brewing
              </a>
              <CoffeeGridBoxes
                  beansName ="Colombia Risaralda Finca Milan Logan #186"
                  roaster="Urban Coffee Roasters, Hongkong"
                  altitude="1750"
                  varietal= "Castillo and Caturra"
                  process="Carbonic Maceration with Lactobacillus Washed"
                  tastingnotes="Vanilla, Blackcurrant candy, Mayonnaise"
                  personalremarks= "Bought it from my Hongkong Conference Trip,very sweet"
                  beanspicture= {require('../images/Coffee/Hongkong/UrbanFincaMilan.webp')}
                  />
            </div>
          </div>

        </div>

      </div> */}
        <div className="container mx-auto flex px-10 py-5">
          <div className="flex flex-col md:flex-row  items-start gap-8 w-full">
            <div className="flex flex-col items-center w-80">
              <div className="pt-5 w-full text-center">
                <button
                  type="button"
                  className="inline-flex w-full text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 hover:text-white rounded text-lg text-center"
                  disabled
                  aria-disabled="true"
                >
                  Books I'm Currently Reading
                </button>
                <BooksHome
                  title="Think Like a Rocket Scientist"
                  writer="Ozan Varol"
                  pages="326"
                  pict="https://storage.googleapis.com/erc-photos/books/thinklikearocketscientist.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-80">
              <div className="pt-5 w-full text-center">
                <a className="inline-flex w-full text-white bg-teal-400 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 hover:text-white rounded text-lg">
                  Coffee I'm Currently Brewing
                </a>
                <CoffeeGridBoxes

                          
                  beansName ="ATY ZARKEIWIN"
                  roaster="People Coffee, Wellington, New Zealand"
                  altitude="NA"
                  varietal= "Mixed"
                  process="NA"
                  tastingnotes="orange, peach, red apple and grape."
                  personalremarks= "My bro bought it from New Zealand"
                  beanspicture= "https://storage.googleapis.com/erc-photos/coffee/home-brew/NewZealandPeopleCoffeeAty.webp"

                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
export default HomePage;