"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const schedules = [
  {
    day: "Monday",
    time: "5:00 PM - 6:30 PM",
    batch: "Beginner",
  },
  {
    day: "Wednesday",
    time: "6:00 PM - 7:30 PM",
    batch: "Intermediate",
  },
  {
    day: "Friday",
    time: "5:30 PM - 7:00 PM",
    batch: "Advanced",
  },
  {
    day: "Saturday",
    time: "10:00 AM - 12:00 PM",
    batch: "Senior",
  },
];

const fees = [
  {
    batch: "Beginner",
    fee: "₹600 / month",
  },
  {
    batch: "Intermediate",
    fee: "₹600 / month",
  },
  {
    batch: "Advanced",
    fee: "₹600 / month",
  },
  {
    batch: "Senior",
    fee: "₹600 / month",
  },
];
const weekDays = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
export default function Schedule() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-10">


      {/* Class Schedule Section */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
          Class Timings
        </h2>
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                <th className="border border-gray-300 dark:border-gray-700 px-6 py-3 text-left">Day</th>
                <th className="border border-gray-300 dark:border-gray-700 px-6 py-3 text-left">Time</th>
                <th className="border border-gray-300 dark:border-gray-700 px-6 py-3 text-left">Batch</th>
              </tr>
            </thead>
            <tbody>
              {weekDays.map((day, index) => {
                const schedule = schedules.find(s => s.day === day);
                return (
                  <tr key={index} className="text-gray-800 dark:text-gray-200 even:bg-gray-100 dark:even:bg-gray-700">
                    <td className="border border-gray-300 dark:border-gray-700 px-6 py-3">{day}</td>
                    {schedule ? (
                      <>
                        <td className="border border-gray-300 dark:border-gray-700 px-6 py-3">{schedule.time}</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-6 py-3">{schedule.batch}</td>
                      </>
                    ) : (
                      <>
                        <td className="border border-gray-300 dark:border-gray-700 px-6 py-3 text-gray-500">—</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-6 py-3 text-gray-500">—</td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fee Structure Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
          Fee Structure
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {fees.map((fee, index) => (
            <Card key={index} className="shadow-md bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle>{fee.batch}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{fee.fee}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
