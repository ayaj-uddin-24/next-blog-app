import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ id, image, category, title, description }) => {
  return (
    <Link
      href={`/blog/${id}`}
      className="border-2 border-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 focus:outline-none focus:ring-2 focus:ring-black"
    >
      {/* Blog Image */}
      <Image
        src={image}
        alt={`Blog post about ${title}`}
        width={500}
        height={500}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-3">
        {/* Blog Category */}
        <p className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-md inline-block">
          {category}
        </p>

        {/* Blog Title */}
        <h3 className="mt-2 text-lg font-bold text-gray-900">{title}</h3>

        {/* Blog Description */}
        <p
          className="mt-2 text-gray-700 text-sm"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
        ></p>

        {/* Read More Button */}
        <button className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300">
          Read More
          <Image
            src={assets.arrow}
            alt="Arrow pointing right"
            className="w-4"
            loading="lazy"
          />
        </button>
      </div>
    </Link>
  );
};

export default BlogItem;
