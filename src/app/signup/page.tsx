import React from 'react';
import Image from 'next/image';


const SignUp = () => {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
        {/* Left Side: Image */}
        <div className="hidden md:flex md:flex-1 bg-cover bg-center">
          <img 
            src="/images/img3.png" 
            alt="icon" 
            className="object-cover w-full h-full rounded-l-lg" 
          />
        </div>
    
        {/* Right Side: Form */}
        <div className="flex-1 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Register</h2>
          <p className="text-sm text-gray-600 mb-6">
            Create your account. It’s free and only takes a minute.
          </p>
    
          <form className="space-y-4">
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 sm:mb-0"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
    
            {/* Email */}
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
    
            {/* Password & Confirm Password */}
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
    
            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms" 
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept the <a href="#" className="text-purple-500 underline">Terms of Use</a> & <a href="#" className="text-purple-500 underline">Privacy Policy</a>
              </label>
            </div>
    
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
    
    );
};

export default SignUp;
