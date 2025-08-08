import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import blogModel from "@/lib/models/blogModel.js";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Database connection
async function loadDB() {
  await connectDB();
}

// GET Method
export async function GET() {
  try {
    await loadDB();
    const blogData = await blogModel.find({});
    return NextResponse.json({ success: true, blogData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// POST Method
export async function POST(request) {
  try {
    await loadDB();
    const formData = await request.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        { success: false, message: "Image is required" },
        { status: 400 }
      );
    }

    const timeStamp = Date.now();
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const imagePath = path.join(
      process.cwd(),
      "public",
      `${timeStamp}_${image.name}`
    );

    await writeFile(imagePath, buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImage: formData.get("authorImage"),
    };

    await blogModel.create(blogData);

    return NextResponse.json(
      { success: true, message: "Blog Added" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// DELETE Method
export async function DELETE(request) {
  try {
    await loadDB();
    const id = await request.nextUrl.searchParams.get("id");
    const blog = await blogModel.findById(id);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    const imagePath = path.join(process.cwd(), "public", blog.image);

    try {
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    } catch (error) {
      console.error("Error deleting the image:", error);
    }

    await blogModel.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, message: "Blog Deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
