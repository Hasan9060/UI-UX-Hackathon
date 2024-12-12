import React from 'react';
import Image from 'next/image';


const AsgaardPage = () => {
    return (
              <div className="flex items-center justify-center min-h-screen bg-[#B88E2F] bg-opacity-15">
                <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
                  {/* Left Side: Image or Text */}
                  <div className="hidden md:flex flex-1 bg-cover bg-center rounded-l-lg"> 
                       <Image src='/images/img3.png' alt='icon' width={500} height={100} ></Image>
                      
                    
                  </div>
          
                  {/* Right Side: Form */}
                  <div className="flex-1 p-8">
                    <h2 className="text-2xl font-bold mb-4">Register</h2>
                    <p className="text-sm text-gray-600 mb-6">
                      Create your account. It’s free and only takes a minute.
                    </p>
          
                    <form className="space-y-4">
                      <div className="flex space-x-4">
                        <input 
                          type="text" 
                          placeholder="First Name" 
                          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input 
                          type="text" 
                          placeholder="Last Name" 
                          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
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

export default AsgaardPage;
