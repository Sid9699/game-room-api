import { Request, Response } from "express";
import axios from "axios";

export const list = async (req: Request, res: Response) => {
  const { page = 1, search = "", pageSize = 10 } = req.query;
  try {
    const gamesRes = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page=${page}&page_size=${pageSize}&search=${search}`,
      {
        headers: {
          "Accept-Encoding": "*",
        },
      }
    );
    res.json({
      count: gamesRes.data.count,
      games: gamesRes.data.results,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "An error occoured please try again later",
    });
  }
};
