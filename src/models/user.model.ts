import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const model = mongoose.model("users", User);

export default model;
