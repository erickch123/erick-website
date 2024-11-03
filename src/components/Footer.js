import React from "react";
// import Dropdown from 'react-bootstrap-dropdown';
export default function Footer() {

    
    return (
        <footer>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className=" h-10 text-white bg-sky-900 content-around pt-2 flex">
            <p className = " sm:mx-10 sm:w-4/5 text-xs mt-1 mx-2">&copy; Erick Chandra 2024</p>
                <div className="mx-1 ">
                    <a href="https://github.com/erickch123 " target="_blank" rel="noopener noreferrer" >    
                    <i class="fa fa-github"></i>
                </a>
                </div>
               <div className = "mx-1">
               <a href="https://www.linkedin.com/in/erickchandra13/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square"></i>
                </a>
               </div>
               <div className = "mx-1">
               <a href="mailto:erickchandra2002@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope"></i>
                </a>
               </div>
                
        
        </div>
        </footer>
       

    );
  }