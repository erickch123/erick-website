import React from 'react';

export default function SustainabilityItem({ iconPath, title, description }) {
    return (
        <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792">
                        <path d={iconPath}></path>
                    </svg>
                </div>
            </div>
            <div className="ml-4">
                <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">{title}</h5>
                <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </div>
    );
}