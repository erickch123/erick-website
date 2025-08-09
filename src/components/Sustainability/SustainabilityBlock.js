import React, { useState } from 'react';
import img1 from '../../images/Sustainability/BottleCapsAndMarigold.jpeg';
import img2 from '../../images/Sustainability/GroceriesPaperWraps.jpeg'; // Add more images as needed
import img3 from '../../images/Sustainability/nutrisoyCarbox.jpg';
import img4 from '../../images/Sustainability/Savour.jpeg';
import img5 from '../../images/Sustainability/YEDPictures.jpeg';
import img6 from '../../images/Sustainability/CADTrustSFF.jpg';
// import img7 from 'https://storage.googleapis.com/erc-photos/coffee/FarmVisit/tuangVisitMay2025.jpg';
import SustainabilityItem from './SustainabilityItem';

const items = [
    {
        title: "Collecting Plastic Caps and Soymilk Boxes",
        description: "Been Collecting this for 4 years One Day I will turn it into coaster, trays and wall display-- stay tuned",
        image: img1
    },
    {
        title: "Upcycling Grocery Booklet",
        description: "Repurposed grocery booklets into paper bags and gift wrap to minimize waste.",
        image: img2
    },
    {
        title: "Playing Card Box",
        description: "Created a card box from a used NutriSoy carton to replace the old one",
        image: img3
    },
    {
        title: "Helped Savour Group Buy",
        description: "As a student, I distributed discounted, soon-to-expire dry goods to encourage sustainable consumption that are initiated by Savour!, a startup founded by one of my university senior. On a random day they asked me to speak in their webinar to share the story",
        image: img4
    },
    {
        title: "Youth Ecosperity Dialogue by Temasek Foundation 2022",
        description: "Represented Indonesia in a week-long conference with Southeast Asian students focused on sustainability initiatives and solutions.",
        image: img5
    },
    {
        title: "Working at Climate Action Data Trust",
        description: "This role allowed me to combine my technical skills in development and blockchain with the carbon market, giving me the opportunity to contribute on a larger scale of environmental and sustainability beyond personal actions.",
        image: img6
    },
    {
        title: "Helping Indonesia Coffee Farmers Create Carbon Credit Project",
        description: "Currently working on a pilot project (still under proof of concept stage!) to help coffee farmers in Indonesia create a carbon credit initiative. This is a cause I’m deeply passionate about. More updates to come and you can find the detail here http://indocoffee-carbon-credit.vercel.app/!",
        image: "https://storage.googleapis.com/erc-photos/coffee/FarmVisit/tuangVisitMay2025.jpg"
    }
];

export default function SustainabilityBlock() {
    // State to track current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of images
    const images = [img1, img2, img3];

  
    const setImageByIndex = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative p-4 bg-white dark:bg-gray-800 ">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="lg:col-start-2 md:pl-20 mt-10 pt-11">
                    <h4 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
                    While I may not be the most sustainable person, I’m trying to make a difference
                    </h4>
                    <h1 className="mt-4 text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
                    Here are some of my sustainability projects:
                    </h1>
                  
                    <ul className="mt-10">
            {items.map((item, index) => (
                <li key={index} className="mb-6">
                    <SustainabilityItem
                        iconPath={item.iconPath}
                        title={item.title}
                        description={item.description}
                    />
                </li>
            ))}
        </ul>
                </div>
                {/* Image Section with Pagination */}
                <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
                    <div className="relative w-100 h-100 mx-auto overflow-hidden rounded shadow-lg">
                        <img src={items[currentImageIndex].image} alt="illustration" className="absolute inset-0 object-cover w-full h-full" />
                    </div>
                  
                    {/* Thumbnail Images */}
                    <div className="flex justify-center mt-10">
                        

                    {items.map((item, index) => (
                            <div key={index} className="w-24 h-24 mx-2 overflow-hidden rounded cursor-pointer">
                                <img
                                    src={item.image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`object-cover w-full h-full ${
                                        currentImageIndex === index ? 'border-4 border-indigo-500' : 'border border-gray-300'
                                    }`}
                                    onClick={() => setImageByIndex(index)}
                                />
                            </div>
                        ))}
                    </div>
               
    
                </div>
            </div>
        </div>
    );
}


   




// }
