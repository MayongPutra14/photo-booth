import coupleLayout from "../assets/templates/couple-layout-2x3.jpg";
import singleLayout from "../assets/templates/single-layout-1x3.jpg";
import newsPapperLayout from "../assets/templates/newspaper-layout.png";
import { ButtonSlide } from "./Button";
import { useState, useEffect } from "react";
import {
  MdNavigateNext,
  MdNavigateBefore,
} from "react-icons/md";

const templates = [
  {
    id: 1,
    name: "Couple Layout 2x3",
    image: coupleLayout,
    slug: "couple-2x3",
  },
  {
    id: 2,
    name: "Single Layout 1x3",
    image: singleLayout,
    slug: "single-1x3",
  },
  {
    id: 3,
    name: "Newspaper Layout",
    image: newsPapperLayout,
    slug: "newspaper",
  },
];

const LayoutCarousel = ({ onSelectedLayout }) => {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  useEffect(() => {
    onSelectedLayout(templates[currentIndex]);
  }, [currentIndex, onSelectedLayout]);

  // next navigation function
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === templates.length - 1
        ? 0
        : prev + 1,
    );
  };

  // previous navigation function
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? templates.length - 1
        : prev - 1,
    );
  };

  return (
    <div className="flex w-full items-center justify-between px-4">
      {/* LEFT BUTTON */}
      <ButtonSlide
        icon={MdNavigateBefore}
        onClick={prevSlide}
      />

      {/* MAIN CONTAINER SLIDE */}
      <div className="relative h-87 w-full  overflow-hidden mx-4">
        {templates.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 flex flex-col transition-all duration-500 ease-in-out ${index === currentIndex ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-h-[90%] max-w-[80%] mx-auto"
            />
            <div className="absolute bottom-0 w-full py-2 text-center">
              <p className="font-bold text-zinc-800">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <ButtonSlide
        icon={MdNavigateNext}
        onClick={nextSlide}
      />
    </div>
  );
};

export default LayoutCarousel;
