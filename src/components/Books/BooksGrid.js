// import React from "react";
export default function BooksGrid(props) {
    const {
      title, writer,pages,pict,quotes,shortSummary,howDiscovered,whoShouldRead
    } = props
    return (
      <div className="flex md:flex-row flex-col m-6 border p-5 rounded-lg">
        <div className="md:w-1/5 w-40">
        <img
            className="w-full "
            alt="hero"
            src={pict}
          /> 
        </div>
          
        <div className= "px-4 md:w-2/5 flex-col overflow-hidden">
          <div className = "px-2 pb-2 rounded-lg  text-left   ">
          <p className="mb-2  text-3xl">📚<b className=""> {title} ({writer})</b> </p>
            
           
            <p className="my-2 text-xl "><b> 🔍 How I Discovered It</b> </p>
            <p>{howDiscovered}</p>
          
            
            <p className="my-2 text-xl "><b> 🧠 One Liner Description</b>
            <p>{whoShouldRead}</p>



          </p>
            
          </div>


         
        </div>
             <div className= "md:w-2/5 flex-col overflow-hidden">
          <div className = "px-2 pb-2 rounded-lg  text-left text-lg ">
          
            <p><b>✍️ Key Quotes</b> </p>
            <p>{shortSummary}</p>
            <p>{quotes}</p>
            <blockquote className="flowbite-blockquote-class text-xl italic text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
          </div>
         
        </div>
       

      </div>
  
    );
  
  };