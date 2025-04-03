"use client"; // Ensure it runs only on the client (fixes hydration issue if needed)

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useEffect, useState } from "react";

function FAQ() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeMediaQuery.matches);

      darkModeMediaQuery.addEventListener('change', (e) => {
        setIsDarkMode(e.matches);
      });

      return () => {
        darkModeMediaQuery.removeEventListener('change', () => { });
      };
    }
  }, []);

  const faqs = [
    {
      question: "What age group can join the Carnatic music classes?",
      answer: "We welcome students of all ages! Children as young as 5 years old can start learning, and there is no upper age limit."
    },
    {
      question: "Do I need any prior experience in music?",
      answer: "No prior experience is required. We start from the basics (Sarali Varisai) and progress step by step."
    },
    {
      question: "Are online classes available?",
      answer: "Yes! We offer both in-person classes in Mangalore and online classes for students who prefer remote learning."
    },
    {
      question: "Can I learn both Carnatic vocals and an instrument together?",
      answer: "Yes, students can learn both vocals and an instrument simultaneously. We recommend managing practice time efficiently."
    },
    {
      question: "Do you provide home tutoring in Mangalore?",
      answer: "Yes, we offer home-based classes in selected areas of Mangalore for students who prefer one-on-one training."
    },
    {
      question: "How long does it take to complete a course?",
      answer: "The duration varies: Beginner Level (3-6 months), Intermediate Level (6-12 months), and Advanced Level (1-2 years)."
    },
    {
      question: "Do you prepare students for performances and competitions?",
      answer: "Yes! We encourage participation in competitions, temple concerts, and cultural events in Mangalore."
    },
    {
      question: "Will I receive a certificate after completing a course?",
      answer: "No, students will not receive a course completion certificate, but students are guided for Carnatic music grade exams."
    },
    {
      question: "Do you teach devotional music (Bhajans, Devaranamas)?",
      answer: "Yes! Along with traditional Carnatic music, we teach Bhajans, Devaranamas, and Slokas."
    },
    {
      question: "Do you help with voice training and improvement?",
      answer: "Yes, we provide specialized voice training exercises to improve range, pitch, and clarity."
    },
    {
      question: "Can I pursue Carnatic music as a profession?",
      answer: "Yes, we guide students in advanced training, concert performances, and teaching careers in Carnatic music."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-white bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center text-indigo-600">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-0">
            <Accordion type="single" collapsible defaultValue={`faq-${index}`}>
              <AccordionItem value={`faq-${index}`} className="mb-0">
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
