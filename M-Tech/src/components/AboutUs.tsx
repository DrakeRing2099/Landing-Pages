import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">ABOUT US</h2>
            <p className="text-gray-700 mb-4">
              Writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. Keep your thoughts flowing logically, and aim for brevity unless you're writing in-depth form.
            </p>
            <p className="text-gray-700 mb-4">
              Your ideas have a purpose so choose words that accurately express them. Ensure your grammar is flawless as it impacts your credibility. Use the active voice whenever possible as it makes any narrative easier to read.
            </p>
            <p className="text-gray-700">
              Writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. Keep your thoughts flowing logically, and aim for brevity unless you're writing in-depth form.
            </p>
          </div>
          <div className="md:w-1/3 relative min-h-[300px]">
            <div className="relative w-full h-full">
              <img src="./DAU_Logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
