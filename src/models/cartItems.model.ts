import mongoose from "mongoose";

const CartItems = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    gameId: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    collection: "cartItems",
    timestamps: true,
  }
);

const model = mongoose.model("cartItems", CartItems);

export default model;
