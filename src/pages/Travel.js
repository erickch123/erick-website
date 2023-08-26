import React from 'react';
import ArticleBlock from '../components/Travel/ArticleBlock';
export default function Travel() {
  return (
      <section>

<div class="container my-24 mx-auto md:px-6">
 
  <section class="mb-32 text-center">
    <h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2>

    <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
     

      <ArticleBlock
        image="../images/Travel/Lithuania Selfie.jpeg"
        altname="Latvia"
        title="How I saved money on accommodations and transport during my Eastern Europe Solo Trip"
        link= "broken"
        description= "My first ever blog yo"
        date = "01.09.2023"
      />
       <ArticleBlock
        image="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
        altname="Latvia"
        title="How I saved money on accommodations and transport during my Eastern Europe Solo Trip"
        link= "broken"
        description= "My first ever blog yo"
        date = "01.09.2023"
      />
       <ArticleBlock
        image="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
        altname="Latvia"
        title="How I saved money on accommodations and transport during my Eastern Europe Solo Trip"
        link= "broken"
        description= "My first ever blog yo"
        date = "01.09.2023"
      />

      
    </div>
  </section>

</div>

     </section>

      );  
};
