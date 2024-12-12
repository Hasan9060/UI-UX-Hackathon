"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md z-50">
      <div className="flex items-center">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={160}
          height={40}
          className="w-auto h-auto ml-4"
        />
      </div>

      <div className="hidden md:flex space-x-6 text-gray-800">
        <Link href={"/"} className="hover:text-gray-500 transition">
          Home
        </Link>
        <Link href={"/shop"} className="hover:text-gray-500 transition">
          Shop
        </Link>
        <Link href={"/blog"} className="hover:text-gray-500 transition">
          Blog
        </Link>
        <Link href={"/contact"} className="hover:text-gray-500 transition">
          Contact
        </Link>
      </div>

      <div className="hidden sm:flex items-center space-x-4">

           <div className="relative group">
      {/* Image as the dropdown trigger */}
      <Image
        src="/images/contact-icon.svg"
        alt="contact"
        width={24}
        height={24}
        className="w-6 h-6 cursor-pointer hover:opacity-80"
      />

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden">
        <ul>
        <Link href={"/signup"}><li className="px-4 py-2 hover:bg-gray-100">SignUp</li></Link>
          <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
          <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
        </ul>
      </div>
    </div>
          
        <form action='' className="relative w-max mx-auto">
          <input type="search" name="search" id="search" className="relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none pl-12
          focus:w-full focus:border-[#B88E2F] focus:cursor-text focus:pl-16 focus:pr-4" placeholder="Search..."/>
        <Image
          src={"/images/search-icon.svg"}
          alt="search"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer absolute inset-y-0 my-auto px-3.4 ml-3 hover:opacity-80"
        />
        </form>
        <Link href={"/asgaard-sofa"}>
        <Image
          src={"/images/heart-icon.svg"}
          alt="favorites"
          width={6}
          height={6}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        </Link>
        <Link href={"/cart"}>
        <Image
          src={"/images/cart-icon.svg"}
          alt="cart"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        </Link>
      </div>

      <div className="md:hidden flex items-center justify-around gap-3">
        <Image
          src={"/images/contact-icon.svg"}
          alt="contact"
          width={6}
          height={6}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <Image
          src={"/images/search-icon.svg"}
          alt="search"
          width={6}
          height={6}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <Link href={"/asgaard-sofa"}>
        <Image
          src={"/images/heart-icon.svg"}
          alt="favorites"
          width={6}
          height={6}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        </Link>
        <Link href={"/cart"}>
        <Image
          src={"/images/cart-icon.svg"}
          alt="cart"
          width={6}
          height={6}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        </Link>
        <button
          aria-label="Toggle menu"
          className="text-gray-800 focus:outline-none hover:text-gray-500"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4">
          <Link href={"/"} className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link href={"/shop"} className="hover:text-gray-500 transition">
            Shop
          </Link>
          <Link href={"/blog"} className="hover:text-gray-500 transition">
            Blog
          </Link>
          <Link href={"/contact"} className="hover:text-gray-500 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
