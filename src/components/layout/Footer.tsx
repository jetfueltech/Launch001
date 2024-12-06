import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Cleaning Crew</h3>
            <p className="text-gray-400 mb-4">Professional cleaning services for homes and businesses in Dallas, Texas.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#locations" className="text-gray-400 hover:text-white transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Leave A Review
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <MapPin size={18} className="mr-2" />
                123 Main Street, Dallas, TX 75201
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2" />
                (214) 555-0123
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2" />
                info@cleaningcrew.com
              </li>
            </ul>
          </div>

          {/* Book Now */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ready to Book?</h3>
            <p className="text-gray-400 mb-4">Schedule your cleaning service today and experience the difference.</p>
            <button
              onClick={scrollToBooking}
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors w-full"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="mb-2">&copy; {new Date().getFullYear()} The Cleaning Crew. All rights reserved.</p>
          <p>
            Powered by{' '}
            <a 
              href="https://www.jetfuel.tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              JetFuel.Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}