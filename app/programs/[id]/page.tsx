"use client";

import { useParams } from "next/navigation";
import Image from "next/image"; // ✅ Import next/image
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const programDetails = {
  1: {
    name: "Temple Concert",
    date: "March 15, 2024",
    description: "A grand Carnatic music concert performed at the renowned temple.",
    images: ["/images/temple1.jpg", "/images/temple2.jpg"],
  },
  2: {
    name: "Carnatic Festival",
    date: "April 20, 2024",
    description: "An annual festival showcasing the best Carnatic musicians.",
    images: ["/images/festival1.jpg", "/images/festival2.jpg"],
  },
  3: {
    name: "Classical Night",
    date: "May 10, 2024",
    description: "A mesmerizing night of classical music performances.",
    images: ["/images/classical1.jpg", "/images/classical2.jpg"],
  },
} as const; // Keeps keys strictly as `1 | 2 | 3`

export default function ProgramDetails() {
  const params = useParams();

  // Ensure params.id exists
  if (!params?.id) {
    return <p className="text-center text-red-500">Program not found</p>;
  }

  // Convert params.id to a number
  const programId = Number(params.id);

  // Validate if programId is a valid key in programDetails
  if (!(programId in programDetails)) {
    return <p className="text-center text-red-500">Program not found</p>;
  }

  // Now, TypeScript knows programId is strictly 1 | 2 | 3
  const program = programDetails[programId as 1 | 2 | 3];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-10">
      <Card className="max-w-3xl mx-auto shadow-lg bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-center text-2xl">{program.name}</CardTitle>
          <p className="text-center text-gray-600 dark:text-gray-300">{program.date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{program.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {program.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={program.name}
                width={300} // Adjust as needed
                height={200} // Adjust as needed
                className="w-full h-40 object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/">
              <Button variant="outline">Back to Programs</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
