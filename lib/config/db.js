import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ayajuddin2024:og6MeoxJzFJeCCnc@next-blog-app.claak.mongodb.net/next-blog-app?"
    );
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
  }
};

export default connectDB;
