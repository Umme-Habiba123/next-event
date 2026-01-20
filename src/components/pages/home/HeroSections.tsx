import React from "react"
import { Button } from "../../ui/button"

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-32 text-center flex flex-col items-center gap-6">
        
        {/* Small badge/label */}
        <span className="text-sm font-medium text-gray-500 uppercase bg-gray-100 px-3 py-1 rounded-full">
          Event Management
        </span>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          Modern Event Management Platform
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
          Learn how to build a real-world event management application using Next.js, TypeScript, and MongoDB from project setup to CRUD operations and scalable architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button className="bg-black hover:bg-gray-800 text-white ">
            Browse Events
          </Button>
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-900">
            Create Event
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
