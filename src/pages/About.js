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
    description: "Just came back to Singapore from an exchange program in Sweden, spending the rest of my summer break as a part-timer at Tanamera Coffee and interning at Climate Action Data Trust as a Technical Product Manager.",
  },
  {
    logo: require('../images/person.png'),
    header:"What is this website about",
    description: "  I want to express my ideas and projects that I have done. In general, I have a lot of activities apart from coding so what I am showcasing here includes school projects, personal projects, and other weird interests that can be found in the navbar such like promo code since I am a frugal & cheapskate student.",
  },
  {
    logo: require('../images/target.png'),
    header:"What is the purpose",
    description: "  I want to have engaging conversations with people who have the same interests with me and open up more opportunities and collaborations. I also feel that it's difficult to say everything about me to my friends, so in this website people may know 50-60% of myself. A bonus point is that I'll be happy if someone get inspired.",
  },
  {
    logo: require('../images/rocket.png'),
    header:"What I am aiming in the near future",
    description: "Spend more time on any of my hobbies before studying 24/7 again in September 2023. Because there is more study-life balance during internship and exchange. I'm also doing something new which is creating TikTok account called Coffeecodingcamera and planning to write articles on Medium.",
  },
  {
    logo: require('../images/workinprogress.png'),
    header:"Work in Progress for Website",
    description: "I will have each dedicate page for promo code, sustainability, books I have read, basketball, library visit, writing, podcast, and maybe other stuff that I have been doing but I don't even remember.",
  },
  
]