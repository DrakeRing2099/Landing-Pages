'use client';

import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="mb-8 text-center">
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <path d="M40 60L20 30L0 60H40Z" fill="#FFC107" />
                  <path d="M70 10L40 60H100L70 10Z" fill="#FF5722" />
                  <path d="M85 0L60 40H110L85 0Z" fill="#FF7043" />
                </svg>
                <h2 className="text-2xl font-bold text-blue-900 mt-4">Dhirubhai Ambani University</h2>
              </div>

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

                <div className="flex space-x-2">
                  <div className="w-1/3">
                    <select className="w-full p-3 border rounded-md text-gray-400 bg-white">
                      <option>IND(+91)</option>
                      <option>USA(+1)</option>
                      <option>UK(+44)</option>
                    </select>
                  </div>
                  <div className="w-2/3">
                    <Input
                      type="tel"
                      placeholder="12345 67890"
                      className="w-full p-3 border rounded-md"
                    />
                  </div>
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
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white p-3 rounded-md text-center">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
