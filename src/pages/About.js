import React from "react";
import Books from '../components/Books'
import student from '../images/stud.png'
import lightbulb from '../images/lightbulb.jpeg'
import future from '../images/futuredrive.jpeg'


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto py-20 md:flex-row flex-col items-center hover:bg-gray-200">
        <div className ="items-center">
          <img className = "max-h-32 max-w-32 mx-auto mb-6" src ={student}
          />
          <h1 className = "text-center pb-10 text-2xl">
            <b>What I'm Doing Right now</b>
          </h1>
          <h2 className = "text-center">
            I am interning as a Backend Software Engineer at Mediacorp, a nationwide and worldwide broadcasting company in Singapore from September to December 2022. Right after, I am going for student exchange at Uppsala University, Sweden, until June 2023.  
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-20 md:flex-row flex-col items-center hover:bg-gray-200">
        <div>
          <img src ={lightbulb} className= "max-h-32 max-w-32 mx-auto mb-6"
          
          />
        <h1 className = "text-center pb-10 text-2xl">
            <b>What is this website about</b>
          </h1>
          <h2 className = "text-center">
            I want to express my ideas and projects that I have done. In general, I have a lot of activities apart from coding so what I am showcasing here includes school projects, personal projects, and other weird interests such like promo code since I am a frugal & cheapskate student.
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-20 md:flex-row flex-col  hover:bg-gray-200 items-center">
        <div>
        <img src ={lightbulb} className= "max-h-32 max-w-32 mx-auto mb-6"
          
          />
          <h1 className = "text-center pb-10 text-2xl">
            <b>What is the purpose?</b>
          </h1>
          <h2 className = "text-center">
            I hope what I have done maybe helpful to others who read, as well as having conversations with people who have the same interests with me to open up more opportunities and collaborations. I also feel that it's difficult to say everything about me to my friends, so in this website people may know 60-70% of myself
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-20 md:flex-row flex-col items-center hover:bg-gray-200">
        <div>
        <img src ={future} className= "max-h-32 max-w-32 mx-auto mb-6"
          
          />
          <h1 className = "text-center pb-10 text-2xl">
            <b>What I am aiming in the near future</b>
          </h1>
          <h2 className = "text-center">
            Spend more time on any of my hobbies before studying 24/7 again in September 2023. Because there is more study-life balance during internship and exchange. I'm also doing something new which is creating TikTok account called Coffeecodingcamera and planning to write articles on Medium
          </h2>
        </div>
      </div>
    </section>
    
  );
}