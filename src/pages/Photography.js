import React from 'react';
import PhotographyContent from '../components/PhotographyContent';
export default function Photography() {
    return (
        <section>
            <PhotographyContent
                image ={require("../images/igerickphotos.jpeg")}
                logo ={require("../images/photog.png")}
                />
    

        </section>


    );
};

