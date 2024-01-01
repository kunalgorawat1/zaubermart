import mongoose from "mongoose";

export const connectToDB = async () => {
  const connections = {};
  try {
    if (connections.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connections.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
