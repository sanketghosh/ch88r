import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`SUCCESS: MongoDB connected ${conn.connection.host}`);
    console.log(`SUCCESS: MongoDB connected`, process.env.MONGO_URI);
  } catch (error: any) {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  }
};
