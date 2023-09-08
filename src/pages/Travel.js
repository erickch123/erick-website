import React from 'react';
import ArticleBlock from '../components/Travel/ArticleBlock';
export default function Travel() {
  return (
      <section>

<div class="container my-24 mx-auto md:px-6">
 
  <section class="mb-32 text-center">
    <h2 class="mb-12 text-center text-3xl font-bold">Latest Articles</h2>

    <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
     

      <ArticleBlock
        image={require("../images/Travel/Lithuania Selfie.jpeg")}
        altname="Latvia"
        title="Budget Solo Travel Hacks: How I saved money on Accommodations and Transports in Eastern Europe(9 days 6 countries)."
        link= "https://medium.com/@erickchandra2002/budget-solo-travel-hacks-how-i-saved-money-on-accommodations-and-transports-in-eastern-europe-9-592eebf61fe3"
        description= "In my first travel blog, I'm excited to share this experience as a budget traveler. These tips are suitable for someone who has low level of comfort while traveling."
        date = "09.09.2023"
      />
   
       {/* <ArticleBlock
        image="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
        altname="Latvia"
        title="How I saved money on accommodations and transport during my Eastern Europe Solo Trip"
        link= "broken"
        description= "My first ever blog yo"
        date = "01.09.2023"
      /> */}

      
    </div>
  </section>

</div>

     </section>

      );  
};
