import React from 'react';
import { Users, CheckCircle, Clock } from 'lucide-react';

const stats = [
  {
    title: 'Happy Customers',
    icon: Users,
    value: '2,000+'
  },
  {
    title: 'Cleanings Completed',
    icon: CheckCircle,
    value: '10,000+'
  },
  {
    title: 'Years Of Service',
    icon: Clock,
    value: '5+'
  }
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          #1 Professional House Cleaning Services in Dallas, Texas
        </h2>
        <div className="grid grid-cols-3 gap-4 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-purple-600 text-white rounded-full mb-4 md:mb-6">
                <stat.icon size={24} className="md:w-9 md:h-9" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-sm md:text-lg">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}