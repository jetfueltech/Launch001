import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Locations', href: '#locations' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-purple-600' : 'text-white'
            }`}
          >
            The Cleaning Crew
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-gray-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button className="w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}