import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Clock, MapPin, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { cleaningTypes, services, timeSlots } from './constants';

interface BookingFormProps {
  initialService?: string;
  onClose?: () => void;
}

export default function BookingForm({ initialService, onClose }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedCleaningType, setSelectedCleaningType] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    timeSlot: '',
    serviceDetails: {},
    contact: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    preferences: {
      smsUpdates: false
    }
  });

  useEffect(() => {
    if (initialService) {
      const serviceId = initialService.toLowerCase().replace(/\s+/g, '');
      setSelectedService(serviceId);
      setStep(2);
    }
  }, [initialService]);

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const bookingData = {
        service: services.find(s => s.id === selectedService)?.name || '',
        cleaningType: cleaningTypes.find(t => t.id === selectedCleaningType)?.name || '',
        date: new Date(formData.date).toLocaleDateString(),
        timeSlot: formData.timeSlot,
        customerName: formData.contact.name,
        customerEmail: formData.contact.email,
        customerPhone: formData.contact.phone,
        customerAddress: formData.contact.address,
        smsUpdates: formData.preferences.smsUpdates
      };

      const response = await fetch('https://hooks.zapier.com/hooks/catch/12401881/2ijfaeb/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(bookingData)
      });

      setSubmitted(true);
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error submitting your booking. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getCurrentService = () => {
    return services.find(s => s.id === selectedService);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return selectedService !== '';
      case 2:
        return selectedCleaningType !== '';
      case 3:
        return formData.date !== '';
      case 4:
        return formData.timeSlot !== '';
      case 5:
        const { name, email, phone, address } = formData.contact;
        return name && email && phone && address;
      default:
        return true;
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your booking has been submitted successfully. You will receive an email and text from our team shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" id="booking-form">
      {/* Progress Bar */}
      <div className="relative pt-1">
        <div className="flex mb-2 justify-between">
          <span className="text-xs font-semibold inline-block text-purple-600">
            Step {step} of 6
          </span>
          <span className="text-xs font-semibold inline-block text-purple-600">
            {Math.round((step / 6) * 100)}%
          </span>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
          <div
            className="transition-all duration-300 ease-out shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Select Your Service</h3>
          <div className="grid grid-cols-1 gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedService === service.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{service.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Cleaning Type Selection */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Select Cleaning Type</h3>
          <div className="grid grid-cols-1 gap-3">
            {cleaningTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedCleaningType(type.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedCleaningType === type.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <type.icon className={`w-6 h-6 ${
                      selectedCleaningType === type.id ? 'text-purple-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <span className="font-medium block">{type.name}</span>
                    <span className="text-sm text-gray-600">{type.description}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Date Selection */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Choose Your First Clean Date</h3>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => updateFormData('date', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      )}

      {/* Step 4: Time Slot Selection */}
      {step === 4 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Select Preferred Time Slot</h3>
          <div className="grid grid-cols-1 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => updateFormData('timeSlot', slot)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  formData.timeSlot === slot
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center">
                  <Clock className="mr-3 text-gray-400" size={20} />
                  <span>{slot}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Contact Information */}
      {step === 5 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Your Contact Information</h3>
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.contact.name}
                onChange={(e) => updateFormData('contact', { ...formData.contact, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.contact.email}
                onChange={(e) => updateFormData('contact', { ...formData.contact, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.contact.phone}
                onChange={(e) => updateFormData('contact', { ...formData.contact, phone: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <textarea
                placeholder="Full Address"
                value={formData.contact.address}
                onChange={(e) => updateFormData('contact', { ...formData.contact, address: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                rows={3}
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 6: Confirmation */}
      {step === 6 && (
        <div className="space-y-6">
          <h3 className="font-semibold text-lg">Confirm Your Booking</h3>
          
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Selected Service</h4>
              <p>{getCurrentService()?.name}</p>
              <p className="text-sm text-gray-600 mt-1">
                {cleaningTypes.find(t => t.id === selectedCleaningType)?.name}
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Date & Time</h4>
              <p>{new Date(formData.date).toLocaleDateString()}</p>
              <p>{formData.timeSlot}</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Contact Details</h4>
              <p>{formData.contact.name}</p>
              <p>{formData.contact.email}</p>
              <p>{formData.contact.phone}</p>
              <p>{formData.contact.address}</p>
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.preferences.smsUpdates}
                  onChange={(e) => updateFormData('preferences', { 
                    ...formData.preferences, 
                    smsUpdates: e.target.checked 
                  })}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-600">
                  I agree to receive SMS updates about my cleaning service
                </span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="mx-auto mb-2 text-purple-600" size={24} />
                <p className="font-medium">100% Satisfaction</p>
                <p className="text-sm text-gray-600">Guaranteed</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="mx-auto mb-2 text-purple-600" size={24} />
                <p className="font-medium">Professional</p>
                <p className="text-sm text-gray-600">Cleaning Crew</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
          >
            Back
          </button>
        )}
        <button
          onClick={step === 6 ? handleSubmit : handleNext}
          disabled={!isStepValid() || submitting}
          className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed"
        >
          {submitting ? 'Submitting...' : step === 6 ? 'Confirm Booking' : 'Next'}
        </button>
      </div>
    </div>
  );
}