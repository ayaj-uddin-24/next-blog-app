"use client";
import { assets } from "@/assets/assets";
import Footer from "@/components/client/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Page = ({ params }) => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("/api/blog");
        const fetchedData = res.data.blogData.find(
          (blog) => blog._id === params.id
        );
        setBlogData(fetchedData || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold text-gray-700 animate-pulse">
        Loading...
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold text-gray-700">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="bg-white shadow-lg py-5 px-6 sm:px-16 md:px-24 flex items-center justify-between sticky top-0 z-50">
        <Link href="/">
          <Image
            src={assets.logo}
            width={170}
            height={50}
            alt="Navbar logo"
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        <button className="border-2 border-gray-900 px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-semibold">
          Get Started
        </button>
      </div>

      {/* Blog Page Section */}
      <div className="container mx-auto p-6 md:p-16 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 shadow-xl rounded-3xl transform hover:scale-[1.02] transition-transform duration-300">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-wide leading-tight">
            {blogData.title}
          </h1>

          <div className="flex flex-col items-center mt-6">
            <Image
              src={assets.profile_icon}
              width={70}
              height={70}
              alt="Profile Icon"
              className="rounded-full border-4 border-gray-300 shadow-md"
            />
            <p className="font-bold text-lg mt-2 text-gray-700">
              {blogData.author || "Unknown Author"}
            </p>
          </div>

          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={blogData.image}
              width={900}
              height={600}
              alt="Blog Image"
              className="w-full object-cover hover:opacity-90 transition-opacity duration-300"
            />
          </div>

          <p
            className="blog-description text-gray-700 text-lg leading-relaxed mt-6 border-l-4 border-gray-700 pl-4 italic"
            dangerouslySetInnerHTML={{ __html: blogData.description }}
          ></p>

          {/* Share Section */}
          <div className="flex items-center gap-5 pt-6 justify-center">
            <p className="text-gray-700 font-semibold">Share:</p>
            <FaFacebookF className="text-blue-600 text-3xl cursor-pointer hover:scale-125 transition-transform duration-200" />
            <FaTwitter className="text-blue-400 text-3xl cursor-pointer hover:scale-125 transition-transform duration-200" />
            <FaGooglePlusG className="text-red-500 text-3xl cursor-pointer hover:scale-125 transition-transform duration-200" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;
