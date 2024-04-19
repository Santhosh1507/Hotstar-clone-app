import React, { useState, useEffect } from 'react'
import image1 from '../../../../assets/slider image/image1.png'
import image2 from '../../../../assets/slider image/image2.png'
import image3 from '../../../../assets/slider image/image3.png'

const Tvsliderpage = () => {
    const images = [image1, image2, image3]; // Add more images to this array as needed
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // const goToPrevious = () => {
    //     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
        const intervalId = setInterval(goToNext, 5000); 
        return () => clearInterval(intervalId); 
    }, [currentImageIndex]);
    return (
        <div>
            <div className="relative w-full mb-10 " >
                <div className="relative h-56 overflow-hidden rounded-lg md:h-svh">

                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                } duration-700 ease-in-out absolute top-0 left-0 w-full h-full transition-opacity`}
                        >
                            <img
                                src={image}
                                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrevious}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"  onClick={goToNext}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button> */}
            </div>
        </div>
    )
}

export default Tvsliderpage