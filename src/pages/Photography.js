import React from 'react';
import PhotographyContent from '../components/Photography/PhotographyContent';
import Category from '../components/Photography/Category';
export default function Photography() {
    return (
        <section>
            
           
                <Category />
           
            <PhotographyContent
                image ={require("../images/Photography/igFeeds-8Nov23.jpg")}
                logo ={require("../images/Photography/photog.png")}
                />


        </section>
    );
};

