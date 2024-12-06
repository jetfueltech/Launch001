import { Sparkles, Clock1, Repeat } from 'lucide-react';

export const cleaningTypes = [
  {
    id: 'regular',
    name: 'Regular Cleaning',
    icon: Sparkles,
    description: 'Standard cleaning service for maintenance'
  },
  {
    id: 'deep',
    name: 'Deep Cleaning',
    icon: Sparkles,
    description: 'Thorough cleaning of all areas including hard-to-reach spots'
  },
  {
    id: 'onetime',
    name: 'One-Time Cleaning',
    icon: Clock1,
    description: 'Single deep clean for special occasions'
  },
  {
    id: 'routine',
    name: 'Routine Cleaning',
    icon: Repeat,
    description: 'Regular scheduled cleaning (weekly/bi-weekly)'
  }
];

export const services = [
  { 
    id: 'house', 
    name: 'House Cleaning',
    questions: [
      { id: 'bedrooms', label: 'Number of Bedrooms', type: 'number' },
      { id: 'bathrooms', label: 'Number of Bathrooms', type: 'number' },
      { id: 'pets', label: 'Do you have pets?', type: 'boolean' }
    ]
  },
  { 
    id: 'apartment', 
    name: 'Apartment Cleaning',
    questions: [
      { id: 'size', label: 'Apartment Size (sqft)', type: 'number' },
      { id: 'floor', label: 'Which floor is your apartment?', type: 'number' }
    ]
  },
  { 
    id: 'airbnb', 
    name: 'AirBNB Cleaning',
    questions: [
      { id: 'guests', label: 'Number of guests stayed', type: 'number' },
      { id: 'turnover', label: 'Need same-day turnover?', type: 'boolean' }
    ]
  },
  { 
    id: 'moveinout', 
    name: 'Move In/Move Out Cleaning',
    questions: [
      { id: 'propertyType', label: 'Property Type', type: 'select', options: ['Apartment', 'House', 'Condo'] },
      { id: 'size', label: 'Property Size (sqft)', type: 'number' }
    ]
  },
  { 
    id: 'office', 
    name: 'Office Cleaning',
    questions: [
      { id: 'desks', label: 'Number of Desks', type: 'number' },
      { id: 'kitchen', label: 'Include Kitchen Cleaning?', type: 'boolean' }
    ]
  }
];

export const timeSlots = [
  '8:00 AM - 10:00 AM',
  '10:00 AM - 12:00 PM',
  '12:00 PM - 2:00 PM',
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM'
];