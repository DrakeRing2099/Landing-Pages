"use client";

import React, { useState, useEffect, useRef } from "react";

// Helper component that fades in its image when src changes
const FadeImage = ({ src, alt }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Start with transparent and trigger fade-in after a tick
    setOpacity(0);
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 10);
    return () => clearTimeout(timer);
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      style={{ opacity, transition: "opacity 0.5s ease-in-out" }}
      className="w-full h-full object-cover"
    />
  );
};

const LifeAtDAU = () => {
  const campusImages = [
    { src: "/Campimg1.png", alt: "Campus garden path" },
    { src: "/Campimg2.png", alt: "Campus walkway" },
    { src: "/Campimg3.png", alt: "Campus buildings" },
    // Add more images as needed
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const mobileScrollRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % campusImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + campusImages.length) % campusImages.length
    );
  };

  // Calculate visible indices for desktop view
  const visibleIndices = [0, 1, 2].map(
    (i) => (currentImage + i) % campusImages.length
  );

  // Scroll mobile container to the current image when it changes
  useEffect(() => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollTo({
        left: mobileScrollRef.current.clientWidth * currentImage,
        behavior: "smooth",
      });
    }
  }, [currentImage]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Life at DAU
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Experience vibrant campus life at DAU—lush 50-acre greenery, dynamic clubs, fests, and innovation.
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view: show three images */}
          <div className="hidden md:flex space-x-4">
            {visibleIndices.map((index) => (
              <div
                key={index}
                className="flex-1 h-80 bg-gray-200 rounded-lg overflow-hidden"
              >
                <FadeImage
                  src={campusImages[index].src}
                  alt={campusImages[index].alt}
                />
              </div>
            ))}
          </div>

          {/* Mobile view: horizontal scroll of images with snapping */}
          <div className="md:hidden">
            <div
              ref={mobileScrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-80 bg-gray-200 rounded-lg"
            >
              {campusImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 snap-center">
                  <FadeImage src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifeAtDAU;
