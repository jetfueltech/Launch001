import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Marquee } from '../ui/Marquee';

const testimonials = [
  {
    name: "Sarah Johnson",
    comment: "The best cleaning service I've ever used! They are thorough, professional, and always on time.",
    rating: 5,
    date: "March 2024"
  },
  {
    name: "Michael Chen",
    comment: "Excellent attention to detail. My apartment has never looked better. Highly recommended!",
    rating: 5,
    date: "February 2024"
  },
  {
    name: "Emily Rodriguez",
    comment: "Reliable and trustworthy. They do an amazing job every single time.",
    rating: 5,
    date: "March 2024"
  },
  {
    name: "David Wilson",
    comment: "Outstanding service! They transformed my home and exceeded all expectations.",
    rating: 5,
    date: "January 2024"
  },
  {
    name: "Lisa Thompson",
    comment: "Incredible attention to detail. My house sparkles after every visit!",
    rating: 5,
    date: "March 2024"
  },
  {
    name: "James Anderson",
    comment: "Professional, efficient, and friendly. Couldn't ask for better service.",
    rating: 5,
    date: "February 2024"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Read testimonials from our satisfied customers
        </p>
        
        <div className="relative">
          <Marquee
            className="py-4"
            pauseOnHover
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>

          <Marquee
            className="py-4"
            reverse
            pauseOnHover
          >
            {testimonials.reverse().map((testimonial, index) => (
              <TestimonialCard key={`reverse-${index}`} {...testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}