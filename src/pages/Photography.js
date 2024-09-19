import React from 'react';
import PhotographyContent from '../components/PhotographyContent';
export default function Photography() {
    return (
        <section>
            <PhotographyContent
                image ={require("../images/Photography/igFeeds-8Nov23.jpg")}
                logo ={require("../images/Photography/photog.png")}
                />
        </section>
    );
};

