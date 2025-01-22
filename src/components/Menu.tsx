import React from 'react';
import { Link } from 'react-router-dom';
import { Connect } from './Connect';

const Menu = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            VeChain Kit Example
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Connect />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu; 