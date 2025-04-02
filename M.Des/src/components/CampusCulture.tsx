import React from "react";
import Image from "next/image";

const CampusCulture = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Campus Culture
            </h2>
            <p className="text-gray-700 mb-4">
              Discover the transformative journey of our students through their
              testimonials. These stories speak to the impact our courses have
              had on their professional and personal lives.
            </p>
            <p className="text-gray-700 mb-4">
              Discover the transformative journey of our students through their
              testimonials. These stories speak to the impact our courses have
              had on their professional and personal lives.
            </p>
            <p className="text-gray-700">
              Discover the transformative journey of our students through their
              testimonials. These stories speak to the impact our courses have
              had on their professional and personal lives.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-96 w-full rounded-md overflow-hidden">
              <Image
                src="/CampusMap.jpg"
                alt="Campus Map"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusCulture;
