import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  comment: string;
  rating: number;
  date?: string;
}

export default function TestimonialCard({ name, comment, rating, date }: TestimonialProps) {
  return (
    <div className="w-[300px] bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative mx-2">
      <Quote className="absolute top-4 right-4 text-purple-100" size={40} />
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-full mr-3 flex items-center justify-center">
          <span className="text-purple-600 font-semibold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="flex text-yellow-400">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          {date && <p className="text-sm text-gray-500 mt-1">{date}</p>}
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed italic relative z-10">
        "{comment}"
      </p>
    </div>
  );
}