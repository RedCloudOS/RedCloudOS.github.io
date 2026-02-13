"use client";

import React from "react";
import { Users, ArrowRight } from "lucide-react";
import NoiseCard from "./NoiseCard";

const ClassicBlackCard = ({
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
      bgColor="bg-[#0b0b0b]"
      className={`
        border border-gray-800  p-10
        transition-all duration-500
        hover:border-red-600/50
        hover:shadow-xl hover:shadow-red-600/15
        hover:-translate-y-3 rounded-xl
        ${className}
      `}
    >
      <Users
        size={40}
        className="text-red-600 mb-4
                   group-hover:scale-125
                   transition-transform duration-300"
      />

      <h2 className="text-2xl font-bold mb-3 text-white transition-colors">
        {title}
      </h2>

      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
        {description}
      </p>

      <button
        onClick={onClick}
        className="mt-auto text-white hover:text-gray-200
                   font-semibold flex items-center gap-2
                   transition-all duration-300"
      >
        {buttonText}
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
    </NoiseCard>
  );
};

export default ClassicBlackCard;
