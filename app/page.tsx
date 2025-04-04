"use client";

import Programs from "./programs/page";
import Gallery from "./gallery/page";
import Schedule from "./schedule/page";
import Contact from "./contact/page";
import Navbar from "./Navbar/page";
import AboutUs from "./About/page";
import Course from "./Course/page";
import Achievers from "./Achievers/page";
import FAQ from "./FAQ/page";
import TestimonialCarousel from "./Testimonials/page";
import Footer from "./footer/page";
import Herosection from "./Herosection/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <div id="home" className="pt-16">
        <Herosection />
      </div>
      <div id="about" className="pt-1">
        <AboutUs />
      </div>
      <div id="courses" className="pt-1">
        <Course />
      </div>
      <div id="schedule" className="pt-1">
        <Schedule />
      </div>
      <div id="achievers" className="pt-1">
        <Achievers />
      </div>
      <div id="programs" className="pt-1">
        <Programs />
      </div>
      <div id="faq" className="pt-1">
        <FAQ />
      </div>
      <div id="testimonials" className="pt-1">
        <TestimonialCarousel />
      </div>
      <div id="gallery" className="pt-1">
        <Gallery />
      </div>
      <div id="contact" className="pt-1">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
