import React from 'react';
import Image from 'next/image';
import { LogOut } from 'lucide-react';


const Logout = () => {
    return (
      <div className=" min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
  <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 sm:p-8">
    {/* Header */}
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Settings</h2>

    {/* Settings Sections */}
    <div className="space-y-6">
      {/* Profile Settings */}
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Profile Settings</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input 
              type="text" 
              placeholder="John" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input 
              type="text" 
              placeholder="Doe" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm text-gray-600">Email</label>
            <input 
              type="email" 
              placeholder="john.doe@example.com" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>
        </div>
      </div>

      {/* Account Management */}
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Management</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Deactivate your account</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Deactivate
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Notifications</h3>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 focus:ring-[#B88E2F]" />
            Email Notifications
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 focus:ring-[#B88E2F]" />
            Push Notifications
          </label>
        </div>
      </div>

      {/* Security */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Security</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Current Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">New Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Confirm New Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Save Changes Button */}
    <div className="text-right mt-6">
      <button 
        className="bg-[#B88E2F] text-white px-6 py-2 rounded-md hover:bg-[#B88E2F] focus:outline-none focus:ring-2 focus:ring-[#2fb8ad]"
      >
        Save Changes
      </button>
    </div>
  </div>
</div>

    );
};

export default Logout;
