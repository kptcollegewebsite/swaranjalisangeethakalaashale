"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  { id: 1, name: "Temple Concert", date: "March 15, 2024", image: "/images/gallery1.jpg" },
  { id: 2, name: "Carnatic Festival", date: "April 20, 2024", image: "/images/gallery1.jpg" },
  { id: 3, name: "Classical Night", date: "May 10, 2024", image: "/images/gallery1.jpg" },
  { id: 4, name: "Musical Evening", date: "June 5, 2024", image: "/images/gallery1.jpg" },
  { id: 5, name: "Raga Symphony", date: "July 20, 2024", image: "/images/gallery1.jpg" },
];

export default function ProgramsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
        Our Programs
      </h1>

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {programs.map((program, index) => (
            <CarouselItem key={index} className="
            p-4 sm:basis-full md:basis-1/2 lg:basis-1/3
            ">
              <Link href={`/programs/${program.id}`}>

                <Card className="shadow-md bg-white dark:bg-gray-800 cursor-pointer hover:scale-105 transition-transform">
                  <CardHeader>
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <CardTitle className="mt-2 text-center">{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-center">
                      <strong>Date:</strong> {program.date}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute  top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-md" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-md" />

      </Carousel>
    </section>
  );
}
