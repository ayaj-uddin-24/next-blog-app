"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <header className="px-4 sm:px-8 md:px-16">
      {/* Navbar Section */}
      <nav className="flex items-center justify-between py-4 md:py-6">
        <Image
          src={assets.logo}
          className="w-[130px] sm:w-[160px] hover:scale-105 transition-transform duration-300"
          alt="Brand logo"
          priority
        />
        <button className="border-2 border-gray-900 px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black">
          Get Started
        </button>
      </nav>

      {/* Blog Header Section */}
      <section className="text-center mt-8 sm:mt-12 md:mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-4">
          Latest Blogs
        </h1>
        <p className="max-w-[700px] mx-auto py-2 text-gray-600 sm:text-lg md:text-xl leading-relaxed">
          Stay updated with the latest articles and insights. Subscribe now to
          never miss a post!
        </p>
      </section>

      {/* Subscribe Form */}
      <form
        className="mt-8 md:mt-10 max-w-[400px] mx-auto text-center flex items-center border border-gray-800 rounded-lg overflow-hidden"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
          className="p-3 w-full outline-none text-gray-800 focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-black text-white font-semibold px-4 py-3 hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Subscribe
        </button>
      </form>
    </header>
  );
};

export default Header;
