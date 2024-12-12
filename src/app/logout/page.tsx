import React from 'react';
import Image from 'next/image';
import { LogOut } from 'lucide-react';


const Logout = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-10 px-4 sm:px-6 lg:px-8">
      {/* Logout Confirmation Section */}
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-3xl w-full overflow-hidden">
        {/* Left Side: Image */}
        <div className="hidden md:flex md:flex-1 bg-cover bg-center">
          <img 
            src="/images/logout.jpg" 
            alt="Logout Icon" 
            className="object-cover w-full h-full rounded-l-lg" 
          />
        </div>
    
        {/* Right Side: Confirmation Content */}
        <div className="flex-1 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Are You Sure?</h2>
          <p className="text-sm text-gray-600 mb-6">
            You’re about to log out. Any unsaved changes will be lost.
          </p>
    
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <button 
              className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mb-4 sm:mb-0"
            >
              Logout
            </button>
            <button 
              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    
      {/* Feedback Section */}
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 sm:p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          We Value Your Feedback
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Let us know how we can improve. Your opinion matters to us!
        </p>
    
        {/* Feedback Options */}
        <div className="flex justify-center mb-6 space-x-4">
          {/* Star Rating */}
          {[...Array(5)].map((_, index) => (
            <button 
              key={index} 
              className={`text-2xl transform transition duration-200 ${
                index < 4 ? "text-yellow-500 hover:scale-110" : "text-gray-300 hover:scale-110"
              }`}
            >
              ⭐
            </button>
          ))}
        </div>
    
        {/* Textarea for Detailed Feedback */}
        <textarea 
          placeholder="Write your feedback here..." 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F] mb-6"
        ></textarea>
    
        {/* Submit Button */}
        <div className="text-center">
          <button 
            type="button" 
            className="bg-[#B88E2F] text-white py-2 px-6 rounded-md hover:bg-[#c0a056] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
    

    
    );
};

export default Logout;
