import { Request, Response } from "express";
import axios from "axios";

export const list = async (req: Request, res: Response) => {
  const { page = 1, search = "", pageSize = 10, genres = "" } = req.query;
  try {
    const gamesRes = await axios.get(
      `https://api.rawg.io/api/games?key=${
        process.env.RAWG_API_KEY
      }&page=${page}&page_size=${pageSize}&search=${search}${
        genres ? `&genres=${genres}` : ""
      }`,
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

export const listGenres = async (req: Request, res: Response) => {
  try {
    const genresRes = await axios.get(
      `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`,
      {
        headers: {
          "Accept-Encoding": "*",
        },
      }
    );
    res.json({
      count: genresRes.data.count,
      genres: genresRes.data.results,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "An error occoured please try again later",
    });
  }
};
