import { TracingChannel } from "diagnostics_channel";
import mongoose from "mongoose";

export const Connection = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    if (con) {
      console.log("connected with database");
    } else {
      console.log("failed to connect with database");
    }
  } catch (error) {
    console.log(error);
  }
};
