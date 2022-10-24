import React from 'react';
export default function Photography() {
    return (
        <section>
             <div className="container mx-auto px-10 py-5 lg:flex-row flex-col items-center ">
            <div className="flex justify-center content-center flex-col lg:flex-row ">
                <div className='text-justify'>
                    <h1>I Love Photography and I post my pictures on my Instagram Account  @erickkkk_photos. Sadly, I don't have any other platform where I post my portfolio. I often shots scenery either city or nature, and a bit of portrait and product photography. I am also open to explore about wedding/graduation photography if I have the chance to work part-time from the more experienced person.
                        For Instagram, I intentionally decide what pictures to post so they match the IG-feed style so sometimes it is hard for me to choose and I even don't post several good shots. Nowadays, I only use my phone since I prioritise bringing my laptop for study instead of taking pictures. But I will definitely bring camera during my exchange program in Sweden soon!</h1>

                <div>
                <img className="border rounded-sm"
                        src={require("../images/screenshotasal.jpeg")}
                    />
                </div>
                  
                </div>


            </div>
</div>
        </section>

    );
};
