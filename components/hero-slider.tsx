"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    imageSrc: "/img/hero/wheelhero.png",
    title: "Slide 1 Title",
    description: "Description for slide 1",
  },
  {
    imageSrc: "/img/hero/hero1.jpg",
    title: "Slide 2 Title",
    description: "Description for slide 2",
  },
  {
    imageSrc: "/img/hero/hero2.jpg",
    title: "Slide 3 Title",
    description: "Description for slide 3",
  },
  {
    imageSrc: "/img/hero/hero3.jpg",
    title: "Slide 4 Title",
    description: "Description for slide 4",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="aspect-square flex w-full h-full relative">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative flex w-full h-full z-0 bg-black"
        >
          <Image
            src={slides[currentIndex].imageSrc}
            alt={slides[currentIndex].title}
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 z-10"
          />
          <div className="absolute bottom-3 left-3 w-full p-4 bg-white bg-opacity-50 text-black z-30">
            <h3>{slides[currentIndex].title}</h3>
            <p>{slides[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 z-40">
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
