"use client";

import React from "react";
import { Github, ArrowRight } from "lucide-react";
import NoiseCard from "./NoiseCard"; 

const CrimsonRedCard = ({
  title,
  description,
  buttonText = "Learn More",
  onClick,
  className = "",
}) => {
  return (
    <NoiseCard
      width="w-full"
      height="h-full"
      animated={false}
      noiseOpacity={0.08}
      grainSize={1}
      bgColor="bg-[#8B0000]"
      className={`
        border border-red-900/50  p-10
        transition-all duration-500
        hover:border-red-600/70
        hover:shadow-xl hover:shadow-red-600/20
        hover:-translate-y-3
        rounded-xl
        ${className}
      `}
    >
      <Github
        size={40}
        className="text-white mb-4
                   transition-transform duration-300
                   group-hover:scale-125"
      />

      <h2 className="text-2xl font-bold mb-3 text-white">
        {title}
      </h2>

      <p className="text-gray-200 mb-6 text-sm leading-relaxed">
        {description}
      </p>

      <button
        onClick={onClick}
        className="mt-auto text-white font-semibold
                   flex items-center gap-2
                   transition-all duration-300
                   hover:text-gray-100"
      >
        {buttonText}
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </NoiseCard>
  );
};

export default CrimsonRedCard;
