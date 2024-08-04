import React, {useState} from 'react'
import Image from "next/image";
import testImage from "../../assets/images/test.svg";

export const Carousel = (images: any) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testImages = [
        testImage,
        testImage,
        testImage
    ]
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            activeIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            activeIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };


    return (
        <div id="default-carousel" className="relative w-full h-56" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {testImages.map((image, index) => (
                    <div key={index} className="duration-700 ease-in-out" data-carousel-item>
                        <Image src={image}
                               className={(activeIndex !== index ? 'hidden ' : '') + 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'}
                               alt="..."/>
                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">

                {testImages.map((image, index) => (
                    <button type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="true"
                            aria-label="Slide 1"
                            data-carousel-slide-to="0"
                            onClick={() => setActiveIndex(index)}
                            key={index}
                    >
                    </button>
                ))}
            </div>
            <button type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevSlide}>
                <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextSlide}>
                <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}