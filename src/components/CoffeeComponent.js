import React from 'react';
import peopletempleacehextended from "../images/peopletempleacehextende.jpg"


export default function CoffeeComponent() {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <p>Coffee Beans I am currently brewing</p>
      </div>
      <div class="grid grid-cols-6">
        <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
    <CoffeeGridBoxes
            beansName ="Aceh Extended by People Temple"
            varietal = "Mixed"
            process = "Extended Natural"
            tasting notes = "Peach, Blackberry,Chocolate"
            personalremarks = "Strong Lychee flavour, funky, the best Indo Beans Ive tried"
    />
      </div>
    </section>
  );


}

function CoffeeGridBoxes(props) {
  const {
    beansName, beanspicture, tastingnotes, personalremarks, process, varietal
  } = props
  return (
    <div className="flex-col">
      <div className="pt-10 max-w-xs px-5 content-center">
        <img
          className="object-cover object-center rounded max-h-128"
          alt="hero"
          src={peopletempleacehextended}
        />
      </div>      
      <div className = "mt=5">
        <h4>Beans : {beansName}</h4>
        <h4>Varietal : {varietal}</h4>
        <h4>Process: {process}</h4>
        <h4>Tasting Notes  : {tastingnotes}</h4>
        <h4>Personal Remarks : {personalremarks}</h4>
      </div>
    </div>

  );

}