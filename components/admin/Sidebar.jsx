import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="px-5 bg-slate-100 w-20 sm:w-52 h-[100vh] sticky top-0">
      {/* Sidebar Logo */}
      <Image
        src={assets.logo}
        alt="Admin Sidebar Logo"
        className="w-full max-w-[150px] py-5 mx-auto"
      />

      <div className="mt-8">
        {/* Add Blog Link */}
        <Link
          href="/admin/addBlog"
          className="flex items-center gap-2 p-3 border-b-2 border-gray-700 transition-all duration-300 hover:bg-gray-200"
        >
          <Image src={assets.add_icon} alt="Add Icon" className="w-[25px]" />{" "}
          <p className="hidden sm:block">Add Blog</p>
        </Link>

        {/* Blog List Link */}
        <Link
          href="/admin/blogList"
          className="flex items-center gap-2 my-10 p-3 border-b-2 border-gray-700 transition-all duration-300 hover:bg-gray-200"
        >
          <Image src={assets.blog_icon} alt="Blog Icon" className="w-[25px]" />{" "}
          <p className="hidden sm:block">Blog List</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
