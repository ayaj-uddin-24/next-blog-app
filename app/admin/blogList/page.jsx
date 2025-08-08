"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  // Fetch blog data
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/blog");
      setData(res.data.blogData);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching blogs");
      setLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Handle delete function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setDeleting(id);
      try {
        const res = await axios.delete(`/api/blog`, {
          params: {
            id: id,
          },
        });
        if (res.data.success) {
          toast.success(res.data.message);
          fetchData();
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error("Error deleting the blog");
      } finally {
        setDeleting(null);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold py-4 text-center">Blog List</h1>

      {loading ? (
        <div className="text-center text-xl py-10">Loading blogs...</div>
      ) : (
        <table className="w-full border-collapse border border-gray-300 shadow-lg bg-white">
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="p-3 border border-gray-300">Author</th>
              <th className="p-3 border border-gray-300">Title</th>
              <th className="p-3 border border-gray-300">Image</th>
              <th className="p-3 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border border-gray-300">{item.author}</td>
                  <td className="p-3 border border-gray-300">{item.title}</td>
                  <td className="p-3 border border-gray-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </td>
                  <td className="p-3 border border-gray-300">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className={`${
                        deleting === item._id ? "bg-gray-400" : "bg-red-500"
                      } text-white px-4 py-2 rounded-md hover:bg-red-600 transition ${
                        deleting === item._id ? "cursor-not-allowed" : ""
                      }`}
                      disabled={deleting === item._id}
                    >
                      {deleting === item._id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No blogs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Page;
