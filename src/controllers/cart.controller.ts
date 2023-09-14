import { Request, Response } from "express";
import CartItems from "../models/cartItems.model";
import axios from "axios";

export const list = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;
    const items = await CartItems.aggregate([
      {
        $match: {
          userId: user?._id,
        },
      },
    ]);
    res.json({
      count: items.length,
      items,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "An error occoured please try again later",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { gameId } = req.params;
    const user: any = req.user;

    const gamesRes = await axios.get(
      `${process.env.RAWG_API_URL}/games/${gameId}?key=${process.env.RAWG_API_KEY}`,
      {
        headers: {
          "Accept-Encoding": "*",
        },
      }
    );
    await CartItems.create({
      userId: user?._id,
      gameId: gameId,
      name: gamesRes.data.name,
      image: gamesRes.data.background_image,
      rating: gamesRes.data.rating,
    });
    return res.status(201).json({
      message: "Item added successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "An error occoured please try again later",
    });
  }
};
