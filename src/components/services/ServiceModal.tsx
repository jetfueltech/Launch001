import React from 'react';
import { X } from 'lucide-react';
import BookingForm from '../booking/BookingForm';

interface ServiceModalProps {
  service: {
    title: string;
    image: string;
    description: string;
    features: string[];
  };
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Details */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <h3 className="font-semibold text-xl mb-4">What's Included:</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold mb-6">Book {service.title}</h3>
              <BookingForm initialService={service.title} onClose={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}