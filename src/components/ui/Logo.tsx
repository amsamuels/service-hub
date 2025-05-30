import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Calendar className="h-8 w-8 text-secondary" />
      <span className="text-xl font-bold text-text">SalonHub</span>
    </Link>
  );
};

export default Logo;