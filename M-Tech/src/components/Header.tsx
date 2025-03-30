"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/DAU_header.png"
              alt="Dhirubhai Ambani University"
              width={120}
              height={120}
              className="mr-2 mt-2"
            />
            <div>
              <p className="text-xs text-gray-600">formerly known as DA-IICT</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-black hover:text-blue-700 font-medium"
            >
              Home
            </Link>
            <Link
              href="/admissions"
              className="text-black hover:text-blue-700 font-medium"
            >
              Admissions
            </Link>
            <Link
              href="/academics"
              className="text-black hover:text-blue-700 font-medium"
            >
              Academics
            </Link>
            <Link
              href="/campus-life"
              className="text-black hover:text-blue-700 font-medium"
            >
              Campus Life
            </Link>
            <Link
              href="/contact-us"
              className="text-black hover:text-blue-700 font-medium"
            >
              Contact Us
            </Link>
          </nav>

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

          <div className="flex justify-between items-center gap-6">
            <div className="flex flex-col px-4 py-4 border-r-2 border-blue-700">
              <h2 className="text-red-600 text-3xl italic">25</h2>
              <h3>years</h3>
            </div>
            <div className="text-left">
              <div className="text-blue-900">Accredited with</div>
              <div className="text-amber-500 font-bold text-xl">NAAC A+</div>
              <div className="text-blue-900">grade</div>
            </div>
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
          <Link
            href="/"
            onClick={toggleSidebar}
            className="text-black hover:text-blue-700 font-medium"
          >
            Home
          </Link>
          <Link
            href="/admissions"
            onClick={toggleSidebar}
            className="text-black hover:text-blue-700 font-medium"
          >
            Admissions
          </Link>
          <Link
            href="/academics"
            onClick={toggleSidebar}
            className="text-black hover:text-blue-700 font-medium"
          >
            Academics
          </Link>
          <Link
            href="/campus-life"
            onClick={toggleSidebar}
            className="text-black hover:text-blue-700 font-medium"
          >
            Campus Life
          </Link>
          <Link
            href="/contact-us"
            onClick={toggleSidebar}
            className="text-black hover:text-blue-700 font-medium"
          >
            Contact Us
          </Link>
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
