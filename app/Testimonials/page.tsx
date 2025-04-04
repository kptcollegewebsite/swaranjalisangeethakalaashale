"use client"; // Ensure this is at the top

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ananya R.",
    text: "The classes have been a transformative experience. The teaching is structured and very effective!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan M.",
    text: "I improved my vocal skills significantly. The guidance provided was invaluable.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Neha S.",
    text: "A wonderful experience learning Carnatic music. The classes are engaging and inspiring!",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Vikram K.",
    text: "Best Carnatic music training I've received. Very professional and enriching!",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Sonia D.",
    text: "Fantastic teachers who make learning enjoyable and enriching!",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
  },
];

function TestimonialCarousel() {
  const plugin = React.useMemo(() => Autoplay({ delay: 3000, stopOnInteraction: true }), []);

  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">
        What Our Students Say
      </h2>
      <Carousel
        plugins={[plugin]}
        className="w-full max-w-5xl mx-auto mt-6"
        onMouseEnter={plugin.stop}
        onMouseLeave={plugin.reset}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="p-4 sm:basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 flex flex-col items-center text-center">
                <Avatar className="w-16 h-16 mb-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    {testimonial.text}
                  </p>
                  <p className="text-right font-bold mt-2">- {testimonial.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-md" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-md" />
      </Carousel>
    </section>
  );
}

export default TestimonialCarousel;
