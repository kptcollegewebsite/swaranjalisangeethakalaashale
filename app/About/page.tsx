"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaMusic, FaGraduationCap, FaAward, FaTheaterMasks, FaMicrophone, FaHandsHelping } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="text-gray-600 dark:text-gray-300 body-font bg-gray-100 dark:bg-gray-800">
      <div className="container px-5 py-16 mx-auto">
        <div className="text-center w-full mb-10">
          <h2 className="text-xl text-indigo-500 tracking-widest font-medium">ABOUT OUR ACADEMY</h2>
          <p className="lg:w-2/3 mx-auto text-base mt-4">
            At Swaranjali Sangeetha Kalaa Shaale, we believe that music is a sacred art that connects hearts and preserves cultural heritage. Music is not just an art; it’s a way of life. At Swaranjali Sangeetha School, we are committed to nurturing talent and spreading the rich heritage of Indian classical music. Whether you're a beginner or an advanced learner, our structured courses and personalized training will help you master the nuances of melody, rhythm, and expression.
          </p>
          <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-4 dark:text-gray-100">🎶Music is the language of the soul – Let’s learn, create, and celebrate together!</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[{
            icon: <FaMusic className="text-red-500 text-4xl mx-auto" />, title: "Carnatic Vocal Training", text: "Learn classical music under expert guidance."
          }, {
            icon: <FaMicrophone className="text-green-500 text-4xl mx-auto" />, title: "Bhajans & Devotional Singing", text: "Express spirituality through soul-stirring bhajans."
          }, {
            icon: <FaTheaterMasks className="text-purple-500 text-4xl mx-auto" />, title: "Customized Learning for Age Groups", text: "Blend rhythm and expression in traditional forms."
          }, {
            icon: <FaHandsHelping className="text-blue-500 text-4xl mx-auto" />, title: "Workshops & Performances", text: "Showcase your talent in concerts and programs."
          }].map((item, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-gray-900">
              <CardHeader>{item.icon}</CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
                <p className="text-sm text-gray-500">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="flex flex-wrap mt-12">
          {[{ title: "Our Vision", text: "To preserve and promote Carnatic music and classical dance by inspiring passion and excellence in every learner." },
          { title: "Our Mission", text: "To provide structured training that nurtures creativity, discipline, and confidence, empowering students to embrace these timeless art forms." }]
            .map((section, index) => (
              <div key={index} className="w-full md:w-1/2 px-8 py-6 border-l-2 border-gray-200 dark:border-gray-700">
                <h2 className="text-lg sm:text-xl text-gray-900 dark:text-gray-100 font-medium mb-2">{section.title}</h2>
                <p className="leading-relaxed text-base text-justify">{section.text}</p>
              </div>
            ))}
        </div>

        {/* Meet the Teacher */}
        <div className="flex flex-wrap items-center mt-12">
          <div className="lg:w-1/2 w-full rounded-lg overflow-hidden">
            <Image src="/images/gurugalu.png" alt="Teacher" width={600} height={400} className="object-cover w-full h-full" />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
            <h2 className="text-lg sm:text-xl text-gray-900 dark:text-gray-100 font-medium title-font mb-2">About Our Founder & Tutor – Vidushi Shilpa Rao P</h2>
            <p className="leading-relaxed text-base text-justify">
              A dedicated musician and mentor, Vidushi Shilpa Rao P has devoted her life to music and dance. Born in Bantwal, she pursued her schooling at Dakshina Kannada Higher Primary School, Kukkaje, and completed her degree at SVS College, Bantwala, followed by a Post-Graduation from Mangalore University.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <MdSchool className="text-blue-500 text-4xl" />
              <p className=" text-justify"><strong>Born in Bantwal</strong>, studied at Dakshina Kannada Higher Primary School, Kukkaje. Degree from SVS College, Bantwala, PG from Mangalore University.</p>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <FaMusic className="text-red-500 text-1xl" />
              <p className=" text-justify"><strong>Rigorous Carnatic Vocal Training</strong> under esteemed gurus:</p>
            </div>
            <ul className="list-disc pl-10 text-gray-400">
              <li>Smt. Shankari</li>
              <li>Smt. Shamala Suresh (Pattumudi)</li>
              <li>Vidushi Satyavathi Mudambadi Taaya</li>
              <li>Sri Vidwaan Krishna Pavan</li>
              <li>Vidhwaan Sri Thirumalai Shrinivasan (Current Guru)</li>
            </ul>

            <div className="flex items-center space-x-4 mt-4">
              <FaAward className="text-yellow-500 text-2xl" />
              <p className=" text-justify"><strong>Honored with the title "Vidushi"</strong> in 2024 for contributions to classical music.</p>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <FaTheaterMasks className="text-purple-500 text-2xl" />
              <p><strong>Other Artistic Pursuits:</strong></p>
            </div>
            <ul className="list-disc pl-10 text-gray-400">
              <li className=" text-justify">Trained in Bharatanatyam (Guru Sumangla Ratnakar).</li>
              <li className=" text-justify">Passionate about Yakshagana, Bhajans, Taala Maddale, and Dance.</li>
              <li className=" text-justify">Performed in Bhajan programs, Upanayana ceremonies, and marriage events.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-16">
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Join Us Today
          </button>
        </div>
      </div ></div>
  );
}
