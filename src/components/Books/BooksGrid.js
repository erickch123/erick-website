// import React from "react";
export default function BooksGrid(props) {
    const {
      title, writer,pages,pict,quotes,shortSummary,howDiscovered,oneLinerDescription
    } = props
    return (
      <div className="flex md:flex-row flex-col m-6 border p-5 rounded-lg">
        <div className="flex md:w-1/5 justify-center">
        <img
            className= "w-40 h-60"
            alt="hero"
            src={pict}
          /> 
        </div>
          
        <div className= "px-4 md:w-2/5 flex-col overflow-hidden">
          <div className = "px-2 pb-2 rounded-lg  text-left text-lg  ">
          <p className="mb-2  text-3xl">📚<b className=""> {title} ({writer})</b> </p>
            
           
            <p className="my-2  "><b> 🔍 How I Discovered It</b> </p>
            <p>{howDiscovered}</p>
          
            
            <p className="my-2 "><b> 🧠 One Liner Description</b>
            <p>{oneLinerDescription}</p>



          </p>
            
          </div>


         
        </div>
             <div className= "md:w-2/5 flex-col overflow-hidden">
          <div className = "px-2 pb-2 rounded-lg  text-left  ">
          
            <p className="text-lg"><b>✍️ Key Quotes</b> </p>
            <p >{shortSummary}</p>
            {/* <p>{quotes}</p> */}
            {quotes.map((quote) => (
          <p className="italic pt-2">{quote}</p>
        ))}
            
          </div>
         
        </div>
       

      </div>
  
    );
  
  };