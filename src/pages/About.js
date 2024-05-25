import React from "react";
import AboutBlock from "../components/AboutBlock";


export default function About() {
  return (
    <section id="about">
      {AboutContent.map((content)=>{
        const {
          logo,header,description
        }= content
        return(
          <AboutBlock
            logo = {logo}
            header={header}
            description={description}
          />
        )
      })}
    </section>
    
  );
}

const AboutContent = [
  {
    logo: require('../images/stud.png'),
    header:"What I'm Doing Right now",
    description: " I'm a fresh graduate from SUTD and currently spending my time to travel before my full time job starts.",
  },
  {
    logo: require('../images/person.png'),
    header:"What is this website about",
    description: "  I want to express my ideas and projects that I have done. In general, I have a lot of activities apart from coding so what I am showcasing here includes school projects, personal projects, and other weird interests that can be found in the navbar",
  },
  {
    logo: require('../images/target.png'),
    header:"What is the purpose",
    description: "  I want to have engaging conversations with people who have the same interests with me and open up more opportunities and collaborations. I also feel that it's difficult to say everything about me to my friends, so in this website people may know 50-60% of myself. A bonus point is that I'll be happy if someone get inspired.",
  },
  {
    logo: require('../images/rocket.png'),
    header:"What I am aiming in the near future",
    description: "Beside spending most of my time studying and interning part-time, I am trying to do freelance photography for couples, friends group, or people on vacation(dm me for more details :)). I also spend less time playing basketball so I can start gymming frequently. Sometimes, I do parttime barista at Tanamera Coffee Singapore as well.",
  },
  {
    logo: require('../images/workinprogress.png'),
    header:"Work in Progress for Website",
    description: "I will have each dedicate page for promo code, sustainability, books I have read, basketball, library visit, writing, podcast, and maybe other stuff that I have been doing but I don't even remember.",
  },
  
]