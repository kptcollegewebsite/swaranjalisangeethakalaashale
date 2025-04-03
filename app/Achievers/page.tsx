"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample Achievers Data
const achievers = [
  {
    name: "Ananya Rao",
    level: "Senior",
    achievement: "Distinction in Carnatic Music Senior Exam",
    photo: "/images/achiever1.png",
  },
  {
    name: "Rohan M.",
    level: "Junior",
    achievement: "First place in State-level Carnatic Competition",
    photo: "/images/achiever1.png",
  },
  {
    name: "Priya K.",
    level: "Senior",
    achievement: "Performed at National Carnatic Festival",
    photo: "/images/achiever1.png",
  },
  {
    name: "Vikram S.",
    level: "Junior",
    achievement: "Best Performer Award at Temple Concert",
    photo: "/images/achiever1.png",
  },
];

export default function Achievers() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filter Achievers by Search & Level
  const filteredAchievers = achievers.filter(
    (achiever) =>
      (achiever.name.toLowerCase().includes(search.toLowerCase()) ||
        achiever.achievement.toLowerCase().includes(search.toLowerCase())) &&
      (filter === "All" || achiever.level === filter)
  );

  return (
    <div className="min-h-screen  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
        Our Achievers
      </h1>

      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search by name or achievement..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2"
        />

        <div className="flex gap-2">
          {["All", "Junior", "Senior"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Achievers Grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {filteredAchievers.length > 0 ? (
          filteredAchievers.map((achiever, index) => (
            <Card key={index} className="shadow-md bg-white dark:bg-gray-800">
              <CardHeader className="relative h-40 w-full">
                <Image
                  src={achiever.photo}
                  alt={achiever.name}
                  fill
                  className="object-cover rounded-t-lg"
                  priority
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mt-2">{achiever.name}</CardTitle>
                <p className="text-lg"><strong>Level:</strong> {achiever.level}</p>
                <p className="text-gray-700 dark:text-gray-300">{achiever.achievement}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">No achievers found.</p>
        )}
      </div>
    </div>
  );
}
