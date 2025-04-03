import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Herosection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const slides = [
    {
      text: "Discover the Melody Within You",
      description:
        "Join Swaranjali Sangeetha School, where tradition meets passion. Learn from expert musicians and embark on a soulful journey in Indian classical music.",
      description2:
        "🎵 Classes for All Ages | 🎶 Carnatic & Hindustani Music | 📍 Expert Guidance",
      btn1: "Enroll Now",
      imageSrc: "/images/gallery1.jpg",
    },
    {
      text: "Fresh and Organic Produce",
      description:
        "Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
      btn1: "Certificate",
      imageSrc: "/images/gallery1.jpg",
    },
    {
      text: "Innovative, Handcrafted Goods",
      description:
        "Swag listicle vegan tacos woke trust fund banh mi kitsch shaman pour-over jean shorts.",
      btn1: "Certificate",
      imageSrc: "/images/gallery1.jpg",
    },
    {
      text: "The Art of Music",
      description:
        "Classic feel and contemporary sound, where tradition meets innovation in the world of Carnatic music.",
      btn1: "Certificate",
      imageSrc: "/images/gallery1.jpg",
    },
  ];

  // Function to display message when "Enroll Now" is clicked
  const handleEnrollClick = () => {
    alert(
      "For registration and enrollment, please contact: +91 99023 39387."
    );
  };

  return (
    <div className="w-full relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="relative w-full flex flex-col md:flex-row items-center justify-center h-[85vh]"
            >
              {/* Left Side: Text and Description */}
              <div className="flex flex-col justify-center p-8 text-center md:text-left w-full md:w-1/2">
                <h1 className="text-3xl font-medium text-gray-900 dark:text-white mb-4">
                  {slide.text}
                </h1>
                <p className="leading-relaxed text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {slide.description}
                </p>
                <p className="leading-relaxed text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {slide.description2}
                </p>
                <div className="flex justify-center md:justify-start">
                  <button
                    onClick={handleEnrollClick} // Added click event
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    {slide.btn1}
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={slide.imageSrc}
                  alt={`Slide image ${index + 1}`}
                  layout="responsive"
                  width={720}
                  height={600}
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-md hover:bg-white/90 dark:hover:bg-black/70" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-md hover:bg-white/90 dark:hover:bg-black/70" />
      </Carousel>
    </div>
  );
}

export default Herosection;
