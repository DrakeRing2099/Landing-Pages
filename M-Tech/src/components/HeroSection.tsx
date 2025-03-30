'use client';

import { Button } from "@/components/ui/button";
import NetworkBackground from "./NetworkBackground";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      <div className="absolute inset-0" style={{ height: "600px" }}>
        <NetworkBackground />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="py-16 text-center">
          <div className="bg-red-600 text-white py-2 px-4 mb-8 mx-auto max-w-md rounded-md">
            ADMISSION OPEN FROM 29TH MAY
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            M.Tech (ICT) with specialization
            <br />
            in Machine Learning
          </h1>

          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Gain insights from expert faculty, enjoy internships, and benefit
            from great placements. Access top labs, supercomputing, and library
            resources.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/apply">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-md">
                Apply Now
              </Button>
            </Link>
            <Link href="/learn-more">
              <Button
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg rounded-md"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img src="./Path.png" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-white p-6 shadow-md rounded-md transition transform duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900">25 Years</h3>
              <p className="text-gray-600">in Academics</p>
            </div>

            <div className="bg-red-600 text-white p-6 shadow-md rounded-md transition transform duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-3xl font-bold">80 LPA</h3>
              <p>Highest Placement</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md transition transform duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900">50 Acres</h3>
              <p className="text-gray-600">of campus</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md transition transform duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900">No. 1</h3>
              <p className="text-gray-600">College for ICT</p>
            </div>
          </div>
          <div className="border-gray-100 border-1 hidden md:block">
            <img src="/DAU_Logo.png" alt="DAU_logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
