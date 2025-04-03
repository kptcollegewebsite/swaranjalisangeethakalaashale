import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function Course() {
  return (
    // <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-10">
    <div>
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">Courses Offered</h2>
      <section className="p-10 grid md:grid-cols-3 gap-6">
        <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">

          <CardHeader>
            <CardTitle>Beginner Level</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Basics of Carnatic music, Sarali Varisai, Alankaras.</p>
            <Button className="mt-4">Enroll Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">

          <CardHeader>
            <CardTitle>Intermediate Level</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Keerthanams, Varnams, Understanding Ragas.</p>
            <Button className="mt-4">Enroll Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">

          <CardHeader>
            <CardTitle>Advanced Level</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manodharma, Swarakalpana, Ragam Tanam Pallavi.</p>
            <Button className="mt-4">Enroll Now</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Course
