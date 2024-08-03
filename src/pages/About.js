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
    description: " I graduated in 2024 and currently working as an AI Software Engineering Researcher at SUTD. After graduation, I spent my time traveling to New Zealand, Brunei, backpacking to China, and hiking mountain in Indonesia.",
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
    description: "Beside my fulltime job as a tech oriented person, I am trying to do freelance photography for couples, friends group, or people on vacation(dm me for more details :)).",
  },
  {
    logo: require('../images/workinprogress.png'),
    header:"Work in Progress for Website",
    description: "I will have each dedicate page for my other passions such as basketball, sustainability library visit, writing, and maybe other stuff that I have been doing but I don't even remember.",
  },
  
]