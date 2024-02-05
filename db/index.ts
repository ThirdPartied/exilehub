import "dotenv/config";
import mongoose, { Mongoose } from "mongoose";

const { MONGODB_URI = "", PORT = "", NODE_ENV } = process.env;

console.log({ MONGODB_URI, PORT, NODE_ENV });

let cachedClient: Mongoose | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = await mongoose
    .connect(`${MONGODB_URI}:${PORT}/${NODE_ENV}`)
    .then((res) => {
      console.log("Connected to MongoDB");
      return res;
    })
    .catch((error) => {
      throw error;
    });

  return cachedClient;
}
