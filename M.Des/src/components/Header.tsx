"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track scrolling to add shadow
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow after scrolling down a bit
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close sidebar if open
      if (isSidebarOpen) {
        setSidebarOpen(false);
      }
      
      // Smooth scroll to the section
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`bg-white p-4 sticky top-0 z-40 transition-shadow duration-300 ${
        hasScrolled ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto flex justify-between items-center text-center">
          {/* Left side with logo and accreditation - modified for mobile */}
          <div className="flex items-center justify-between flex-1 md:flex-none">
            <Link href="/" className="flex flex-col">
              <Image
                src="/DAU_Header1.png"
                alt="Dhirubhai Ambani University"
                width={100}
                height={100}
                className="mr-2"
              />
            </Link>

            {/* Mobile accreditation - visible on all screens but styled differently */}
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero-section")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("top-recruiters")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection("top-faculty")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              Faculty
            </button>
            <button
              onClick={() => scrollToSection("campus-culture")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              Campus Life
            </button>
            <button
              onClick={() => scrollToSection("contact-form")}
              className="text-black hover:text-blue-700 font-medium cursor-pointer"
            >
              Contact Us
            </button>
          </nav>
            <div className="flex items-center ml-4">
              <div className="flex flex-col items-center pr-3 border-r-2 border-blue-700">
                <h2 className="text-red-600 text-xl md:text-3xl italic">25</h2>
                <h3 className="text-xs md:text-sm">years</h3>
              </div>
              <div className="pl-3 text-left">
                <div className="text-blue-900 text-xs md:text-sm">Accredited with</div>
                <div className="text-amber-500 font-bold text-base md:text-xl">NAAC A+</div>
                <div className="text-blue-900 text-xs md:text-sm">grade</div>
              </div>
            </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} aria-label="Toggle Menu">
              {isSidebarOpen ? (
                <X className="h-8 w-8 text-black" />
              ) : (
                <Menu className="h-8 w-8 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar positioned on the right */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={toggleSidebar} aria-label="Close Menu">
            <X className="h-8 w-8 text-black" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-4">
          <button
            onClick={() => scrollToSection("hero-section")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("top-recruiters")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            Career
          </button>
          <button
            onClick={() => scrollToSection("top-faculty")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            Faculty
          </button>
          <button
            onClick={() => scrollToSection("campus-culture")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            Campus Life
          </button>
          <button
            onClick={() => scrollToSection("contact-form")}
            className="text-black hover:text-blue-700 font-medium text-left"
          >
            Contact Us
          </button>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;  