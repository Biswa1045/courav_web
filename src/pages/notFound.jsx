import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        {/* Animated 404 Number */}
        <div className="animate-float text-9xl font-bold text-white opacity-20 mb-8">
          404
        </div>

        {/* Main Content */}
        <div className="relative">
          <h1 className="text-5xl font-bold text-white mb-6">
            Oops! Page Not Found
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for might have been removed, had its name changed, 
            or is temporarily unavailable. Let's get you back on track!
          </p>

          {/* Navigation Button */}
          <Link 
            to="/" 
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full 
                      font-semibold hover:bg-blue-100 transition-all duration-300
                      transform hover:scale-105 shadow-lg"
          >
            Return to Homepage
          </Link>

          {/* Optional Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-6">
            <div className="w-8 h-8 bg-white rounded-full animate-bounce"></div>
            <div className="w-8 h-8 bg-white rounded-full animate-bounce delay-100"></div>
            <div className="w-8 h-8 bg-white rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;