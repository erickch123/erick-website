import React from "react";
// import Dropdown from 'react-bootstrap-dropdown';
export default function Navbar() {

    const NavigationLists =[
      {
        name:"Home",
        linkref:"/",
      },
      {
        name:"More Info",
        linkref:"/about",
      },
      {
        name:"Coding",
        linkref:"/coding",
      },
      {
        name:"Photography",
        linkref:"/photography",
      },
      {
        name:"Venture Capital",
        linkref:"/ventureCapital",
      },
      {
        name:"Leadership",
        linkref:"/leadership",
      },
      {
        name:"Coffee",
        linkref:"/coffee",
      },
      {
        name:"Travel",
        linkref:"/travel",
      },
      {
        name:"Books",
        linkref:"/Books",
      },
      
      // {
      //   name:"Referral Code",
      //   linkref:"/ReferralCode",
      // },
      // {
      //   name:"Contact",
      //   linkref:"/Contact",
      // },
      // {
      //   name:"Bunch Of Others",
      //   linkref:"/Hobbies",
      // }
    ];

    function NavComponents(props){
      const{
        name,
        linkref
      }= props

      return(
        <a href={linkref} className="mr-5 hover:text-black">
        {name}
        </a>
      );
    };

    return (
      <header className="bg-sky-900 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          
          {NavigationLists.map((component)=>{
            const {name,linkref}= component
            return(
              <NavComponents
                name = {name}
                linkref = {linkref}
              />
            );
          })}
          </nav>
        </div>
      </header>
    );
  }