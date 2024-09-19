import React, { useState } from 'react';
import img1 from '../../images/Coffee/AsylumSidra.jpg';
import img2 from '../../images/Coffee/AlchemistVeracruz.jpg'; // Add more images as needed
import img3 from '../../images/Coffee/CommonGrounds-BaliKintamani.jpeg';

export default function SustainabilityBlock() {
    // State to track current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of images
    const images = [img1, img2, img3];

    // Function to go to the next image
    // const nextImage = () => {
    //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    // // Function to go to the previous image
    // const prevImage = () => {
    //     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // };
    const setImageByIndex = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative p-4 bg-white dark:bg-gray-800">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="lg:col-start-2 md:pl-20">
                    <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
                        Some of my efforts
                    </h4>
                    <ul className="mt-10">
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                        <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792">
                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">Upcycling Stuff</h5>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                        Repurpose into grocery bag
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                        <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792">
                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">Intern at a carbon credit company</h5>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                        Trying to understand the industry more
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                        <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792">
                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">Playing Card</h5>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                       Recycled from used soy box
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                        <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792">
                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">YED Conference</h5>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                        Gathering of SOuth East Asian people passioante in sustainability
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/* Other list items remain unchanged */}
                    </ul>
                </div>
                {/* Image Section with Pagination */}
                <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
                    <img src={images[currentImageIndex]} alt="illustration" className="relative w-auto mx-auto rounded shadow-lg" />
                    {/* Thumbnail Images */}
                    <div className="flex justify-center mt-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-16 h-16 mx-2 cursor-pointer rounded ${
                                    currentImageIndex === index ? 'border-4 border-indigo-500' : 'border border-gray-300'
                                }`}
                                onClick={() => setImageByIndex(index)}
                            />
                        ))}
                    </div>
                    {/* Pagination Controls */}
                    {/* <div className="flex justify-between mt-4">
                        <button onClick={prevImage} className="px-4 py-2 text-white bg-indigo-500 rounded">Previous</button>
                        <button onClick={nextImage} className="px-4 py-2 text-white bg-indigo-500 rounded">Next</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}


   




// }
