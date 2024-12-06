import React from 'react';
import { Star } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  rating: number;
  onSchedule: () => void;
}

export default function ServiceCard({ title, image, description, rating, onSchedule }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 md:h-72 object-cover"
      />
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{title}</h3>
        <div className="flex text-yellow-400 mb-3 md:mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} className="md:w-5 md:h-5" fill="currentColor" />
          ))}
        </div>
        <p className="text-gray-600 text-sm md:text-lg mb-4 md:mb-6">{description}</p>
        <button
          onClick={onSchedule}
          className="text-purple-600 font-semibold text-base md:text-lg hover:text-purple-700"
        >
          Schedule {title}
        </button>
      </div>
    </div>
  );
}