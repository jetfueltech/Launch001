import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    city: 'Dallas',
    address: '123 Main Street, Dallas, TX 75201',
    phone: '(214) 555-0123',
    hours: 'Mon-Sat: 8am-6pm'
  },
  {
    city: 'Fort Worth',
    address: '456 Oak Avenue, Fort Worth, TX 76102',
    phone: '(817) 555-0456',
    hours: 'Mon-Sat: 8am-6pm'
  },
  {
    city: 'Plano',
    address: '789 Elm Street, Plano, TX 75024',
    phone: '(972) 555-0789',
    hours: 'Mon-Sat: 8am-6pm'
  }
];

export default function LocationsSection() {
  return (
    <section className="py-20 bg-gray-50" id="locations">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Locations</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Serving the greater Dallas-Fort Worth metroplex
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.city} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{location.city}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-purple-600 mt-1 mr-3" />
                  <p>{location.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="text-purple-600 mr-3" />
                  <p>{location.phone}</p>
                </div>
                <div className="flex items-center">
                  <Clock className="text-purple-600 mr-3" />
                  <p>{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}