"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(assets.upload_area);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Lifestyle",
    author: "",
    image: null,
    authorImage: assets.profile_icon,
  });

  // Handle input changes
  const changeHandler = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  // Handle image upload
  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setData((prevData) => ({ ...prevData, image: file }));
    }
  };

  // Update image preview
  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setImagePreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("image", image);
      formData.append("authorImage", data.authorImage);

      const res = await axios.post("/api/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success(res.data.message);

        setData({
          title: "",
          description: "",
          category: "Lifestyle",
          author: "",
          image: null,
          authorImage: assets.profile_icon,
        });
        setImagePreview(assets.upload_area);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred during the submission");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-[600px] mx-auto">
      <form onSubmit={submitHandler}>
        {/* Blog Image */}
        <p className="font-semibold">Blog Thumbnail:</p>
        <label htmlFor="thumbnail" className="cursor-pointer block mt-2">
          <input
            type="file"
            id="thumbnail"
            className="hidden"
            onChange={imageChangeHandler}
            required
          />
          <Image
            src={imagePreview}
            alt="Blog Thumbnail"
            width={500}
            height={500}
            className="w-[200px] h-[150px] object-cover mt-2 mb-5 rounded-md shadow-md"
          />
        </label>

        {/* Blog Title */}
        <label htmlFor="title" className="font-semibold">
          Blog Title:
        </label>
        <input
          type="text"
          name="title"
          className="border border-gray-300 w-full p-2 rounded-md mt-1"
          value={data.title}
          onChange={changeHandler}
          required
        />

        {/* Blog Description */}
        <label htmlFor="description" className="font-semibold mt-3 block">
          Blog Description:
        </label>
        <textarea
          name="description"
          className="border border-gray-300 w-full p-2 rounded-md mt-1"
          value={data.description}
          onChange={changeHandler}
          rows="4"
          required
        ></textarea>

        {/* Blog Category */}
        <label htmlFor="category" className="font-semibold mt-3 block">
          Blog Category:
        </label>
        <select
          name="category"
          className="border border-gray-300 w-full p-2 rounded-md mt-1"
          value={data.category}
          onChange={changeHandler}
          required
        >
          <option value="Lifestyle">Lifestyle</option>
          <option value="Technology">Technology</option>
          <option value="Startup">Startup</option>
        </select>

        {/* Blog Author */}
        <label htmlFor="author" className="font-semibold mt-3 block">
          Blog Author:
        </label>
        <input
          type="text"
          name="author"
          className="border border-gray-300 w-full p-2 rounded-md mt-1"
          value={data.author}
          onChange={changeHandler}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold px-4 py-2 rounded-md mt-5 w-full hover:bg-blue-600 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
