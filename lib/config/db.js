import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/next-blog-app");
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
  }
};

export default connectDB;
