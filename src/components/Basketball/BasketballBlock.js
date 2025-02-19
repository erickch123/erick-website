import { useEffect, useState } from 'react';
import basketballImage1 from '../../images/Basketball/basketsmp8.jpeg';  // Use your image paths
import basketballImage2 from '../../images/Basketball/basketcc.jpg';
import basketballImage3 from '../../images/Basketball/basketsutd.jpg';


const topParagraph = "Definitely not a pro player, haha, but basketball has been my hobby for a long time. I've played for my school teams since secondary school, and I've learned a lot about teamwork, discipline, perseverance, and, of course, having fun.";

const descriptions = [
    "My secondary school team at Tarakanita 2 Jakarta. I don't think I saved any high-resolution pictures, haha.",
    "My senior high school team at Canisius College Jakarta.",
    "My university team at SUTD."
];
export default function BasketballBlock() {
    const images = [basketballImage1, basketballImage2, basketballImage3];
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prevPosition) => (prevPosition + 0.2) % 100);  // Slower speed with 0.2 per tick
        }, 50);  // Slower update every 50ms instead of 30ms
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="overflow-hidden w-full h-screen">
            {/* Static Top Paragraph (30% height) */}
            <div className="h-[30%] flex items-center justify-center bg-white px-6 pt-11">
            <p className="text-center text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
                    {topParagraph}
                </p>
            </div>

            {/* Moving Images and Descriptions (70% height) */}
            <div className="h-[70%]">
                <div
                    className="flex transition-transform ease-linear h-full"
                    style={{ transform: `translateX(-${position}%)`, width: '200%' }} // 200% width for smooth wrapping
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-1/3 flex-shrink-0 flex flex-col justify-between">
                            {/* Image taking 50% of height */}
                            <div className="h-2/3">
                                <img src={image} alt={`Basketball ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                            {/* Description taking 20% of height */}
                            <div className="h-1/3 flex items-center justify-center p-4 bg-gray-100">
                                <p className="text-center text-gray-700 font-poppins">{descriptions[index]}</p>
                            </div>
                        </div>
                    ))}
                    {images.map((image, index) => (
                        <div key={index + images.length} className="w-1/3 flex-shrink-0 flex flex-col justify-between">
                            <div className="h-2/3">
                                <img src={image} alt={`Basketball repeat ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                            <div className="h-1/3 flex items-center justify-center p-4 bg-gray-100">
                            <p className="text-center text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                    {descriptions[index]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}