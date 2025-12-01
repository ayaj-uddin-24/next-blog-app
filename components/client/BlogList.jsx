"use client";

import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/blog");
      setData(res.data.blogData);
      setLoading(false);
    } catch (err) {
      setError("Failed to load blog posts.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-auto mt-6 px-6">
      {/* Category Navigation Section */}
      <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={`px-4 py-2 rounded-md transition-all duration-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black ${
              menu === category
                ? "bg-black text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Post Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
        {/* Loading State */}
        {loading && (
          <div className="col-span-full text-center">
            <p className="text-lg font-semibold">Loading...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="col-span-full text-center">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Filtered Blog Posts */}
        {!loading &&
          !error &&
          data
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item, index) => (
              <BlogItem
                key={index}
                id={item._id}
                image={`${item.image}`}
                title={item.title}
                category={item.category}
                description={item.description}
              />
            ))}

        {/* No Posts Found */}
        {!loading && !error && data.length === 0 && (
          <div className="col-span-full text-center">
            <p className="text-gray-600">No posts available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
