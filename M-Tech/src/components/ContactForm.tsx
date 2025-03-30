'use client';

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const ContactForm = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Show popup when user visits the site (after a small delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000); // Shows popup after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Popup Contact Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full relative animate-fade-in-up">
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close popup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Apply Now</h2>
              
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full p-3 border rounded-md"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="RameshSharma@Gmail.com"
                    className="w-full p-3 border rounded-md"
                  />
                </div>

                <div className="flex items-center border rounded-md overflow-hidden">
                  <select className="appearance-none bg-white p-3 text-gray-400 outline-none">
                    <option>INR(+91)</option>
                    <option>USA(+1)</option>
                    <option>UK(+44)</option>
                  </select>
                  <span className="px-2 text-gray-500">|</span>
                  <input
                    type="tel"
                    placeholder="12345 67890"
                    className="w-full p-3 outline-none"
                  />
                </div>

                <div>
                  <select className="w-full p-3 border rounded-md text-gray-400 bg-white">
                    <option>State</option>
                    <option>Gujarat</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-md text-center">
                    Apply Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Original Section with Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Logo and Heading */}
          <div className="text-center md:text-left md:w-1/2">
            <Image src='/logo_with_form.png' height={400} width={400} alt='logo' />
          </div>

          {/* Form - Keeping the original form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4 bg-gray-50 p-8 rounded-lg shadow-md">
              <div>
                <Input
                  type="text"
                  placeholder="e.g. Ramesh Sharma"
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="RameshSharma@Gmail.com"
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div className="flex items-center border rounded-md overflow-hidden">
                <select className="appearance-none bg-white p-3 text-gray-400 outline-none">
                  <option>INR(+91)</option>
                  <option>USA(+1)</option>
                  <option>UK(+44)</option>
                </select>
                <span className="px-2 text-gray-500">|</span>
                <input
                  type="tel"
                  placeholder="12345 67890"
                  className="w-full p-3 outline-none"
                />
              </div>

              <div>
                <select className="w-full p-3 border rounded-md text-gray-400 bg-white">
                  <option>State</option>
                  <option>Gujarat</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                </select>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-md text-center">
                  Apply Now
                </Button>
              </div>
            </form>
            
            {/* Button to reopen popup if closed */}
            <div className="mt-4 text-center">
              <Button 
                onClick={() => setIsPopupOpen(true)}
                variant="outline"
                className="text-amber-500 border-amber-500 hover:bg-amber-50"
              >
                Open Quick Apply Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;



