import React from 'react';
export default function PhotographyContent(props) {
    const description = "Apart from the website, I also posted pictures on Instagram. Lately, my IG feeds are mostly travel pictures around Kazahkstan, Kyrgyzstan & Uzbekistan.";
    const {
        image, logo
    } = props
    return (
        <div className="border border-blue-900 p-16 rounded-3xl my-8 md:w-1/2 mx-auto">
            <div className="content-center">
                <a href="https://instagram.com/erickkkk_photos" target="_blank" rel="noopener noreferrer">
                   

                    <h1 className="text-center pb-10 text-2xl underline">
                        <b>My Instagram Feeds</b>
                    </h1>

                    <img
                        className="object-cover mx-auto center rounded mb-10 "
                        alt="hero"
                        src={image}
                    />
                    <img
                        className="max-h-16 max-w-16 mx-auto mb-6"
                        alt="hero"
                        src={logo}
                    />
                    <h1 className="text-center pb-10 text-2xl underline">
                        <b>More Info</b>
                    </h1>
                    </a>
            </div>
            <p className="pb-10 text-justify font-bold">
                {description}
            </p>
            
        </div>


    );

}