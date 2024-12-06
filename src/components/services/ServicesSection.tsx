import React, { useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'House Cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    description: 'Regular, deep, one-time or routine cleaning plans for your home.',
    rating: 5,
    features: [
      'Deep cleaning of all rooms',
      'Bathroom and kitchen sanitization',
      'Dusting and vacuuming',
      'Window sill and baseboard cleaning',
      'Mopping all floors'
    ]
  },
  {
    title: 'Apartment Cleaning',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80',
    description: 'Professional cleaning services tailored for apartments and condos.',
    rating: 5,
    features: [
      'Complete apartment cleaning',
      'Kitchen appliance cleaning',
      'Bathroom deep clean',
      'Floor cleaning and vacuuming',
      'Dust removal from all surfaces'
    ]
  },
  {
    title: 'AirBNB Cleaning',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    description: 'Specialized cleaning services for AirBNB properties and vacation rentals.',
    rating: 5,
    features: [
      'Quick turnover cleaning',
      'Linen change and laundry',
      'Restocking essentials',
      'Deep cleaning between guests',
      'Inspection and reporting'
    ]
  },
  {
    title: 'Move In/Move Out Cleaning',
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80',
    description: 'Thorough cleaning services for moving in or out of properties.',
    rating: 5,
    features: [
      'Deep cleaning all rooms',
      'Cabinet and drawer cleaning',
      'Appliance cleaning',
      'Window and track cleaning',
      'Carpet deep cleaning'
    ]
  },
  {
    title: 'Office Cleaning',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    description: 'Professional cleaning services for offices and commercial spaces.',
    rating: 5,
    features: [
      'Workstation sanitization',
      'Common area cleaning',
      'Restroom maintenance',
      'Kitchen and break room cleaning',
      'Trash removal and recycling'
    ]
  }
];

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 400 : window.innerWidth - 64;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Professional cleaning services tailored to your needs
        </p>
        
        <div className="relative">
          {/* Scroll Buttons - Hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="text-purple-600" size={24} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="text-purple-600" size={24} />
          </button>

          {/* Services Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar -mx-4 px-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex space-x-4 md:space-x-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex-none w-[280px] md:w-[350px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <ServiceCard
                    {...service}
                    onSchedule={() => setSelectedService(service)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}