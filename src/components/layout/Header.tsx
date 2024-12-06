import React from 'react';
import BookingForm from '../booking/BookingForm';
import Navigation from './Navigation';

export default function Header() {
  return (
    <div className="relative min-h-[600px] md:min-h-[800px] lg:min-h-screen">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80"
        >
          <source
            src="https://player.vimeo.com/external/459389137.sd.mp4?s=956afd13daf64b59057c36e7c71c9b4a40c8a35d&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25" />
      </div>
      
      <Navigation />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-20 pb-12 md:pb-0">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Professional Cleaning Services for Your Home
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
              Experience the difference with our expert cleaning crew. Book your service today and enjoy a spotless space tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
                Book Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}