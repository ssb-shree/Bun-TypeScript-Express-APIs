import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const uri = config.get<string>("MONGO_URI");

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri);
    return connection;
  } catch (error: any) {
    logger.error(`DB connection failed due to ${error.message}`);
    return null;
  }
};
