'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  state: string;
}

interface SubmitMessage {
  text: string;
  isError: boolean;
}

const ContactForm = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    countryCode: 'INR(+91)',
    state: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<SubmitMessage>({ text: '', isError: false });
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  // Show popup when user visits the site (after a small delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000); // Shows popup after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Clear success message after timeout
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    if (submitMessage.text && !submitMessage.isError) {
      timer = setTimeout(() => {
        setSubmitMessage({ text: '', isError: false });
      }, 3000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [submitMessage]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, isPopup = false) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ text: '', isError: false });
    setShowConfirmation(false);

    try {
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${responseData.error || response.statusText}`);
      }

      // Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: 'INR(+91)',
        state: ''
      });

      setSubmitMessage({ 
        text: `Form submitted successfully!`, 
        isError: false 
      });
      
      // Show confirmation panel or modal for non-popup form
      if (!isPopup) {
        setShowConfirmation(true);
        
        // Auto-hide confirmation after 5 seconds
        setTimeout(() => {
          setShowConfirmation(false);
        }, 100);
      }
      
      if (isPopup) {
        // Close popup after successful submission with a delay
        setTimeout(() => {
          setIsPopupOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage({ 
        text: `Error submitting form: ${error instanceof Error ? error.message : 'Unknown error'}`, 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              
              {submitMessage.text && (
                <div className={`mb-4 p-3 rounded ${submitMessage.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form className="space-y-4" onSubmit={(e) => handleSubmit(e, true)}>
                <div>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="RameshSharma@Gmail.com"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="flex items-center border rounded-md overflow-hidden">
                  <select 
                    className="appearance-none bg-white p-3 text-gray-400 outline-none"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                  >
                    <option>INR(+91)</option>
                    <option>USA(+1)</option>
                    <option>UK(+44)</option>
                  </select>
                  <span className="px-2 text-gray-500">|</span>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="12345 67890"
                    className="w-full p-3 outline-none"
                    required
                  />
                </div>

                <div>
                  <select 
                    className="w-full p-3 border rounded-md text-gray-400 bg-white"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">State</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-md text-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply Now'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Main Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Logo and Heading */}
          <div className="text-center md:text-left md:w-1/2">
            <Image src='/logo_with_form.png' height={400} width={400} alt='logo' />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 relative">
            {/* Submit confirmation overlay - appears after successful submission */}
            {showConfirmation && (
              <div className="absolute inset-0 bg-white bg-opacity-95 z-10 flex flex-col items-center justify-center rounded-lg shadow-md animate-fade-in-down">
                <div className="text-green-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Thank You!</h3>
                <p className="text-gray-700 text-center mb-6 px-8">
                  Your form has been submitted successfully. We will get back to you soon.
                </p>
                <Button 
                  onClick={() => setShowConfirmation(false)}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
                >
                  Close
                </Button>
              </div>
            )}

            {submitMessage.text && !showConfirmation && (
              <div className={`mb-4 p-3 rounded ${submitMessage.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {submitMessage.text}
              </div>
            )}
            
            <form className="space-y-4 bg-gray-50 p-8 rounded-lg shadow-md" onSubmit={(e) => handleSubmit(e, false)}>
              <div>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ramesh Sharma"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="RameshSharma@Gmail.com"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>

              <div className="flex items-center border rounded-md overflow-hidden">
                <select 
                  className="appearance-none bg-white p-3 text-gray-400 outline-none"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                >
                  <option>INR(+91)</option>
                  <option>USA(+1)</option>
                  <option>UK(+44)</option>
                </select>
                <span className="px-2 text-gray-500">|</span>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="12345 67890"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>

              <div>
                <select 
                  className="w-full p-3 border rounded-md text-gray-400 bg-white"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">State</option>
                  <option>Gujarat</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                </select>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-md text-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Apply Now'}
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