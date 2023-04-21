import { Request, Response } from "express";
import axios from "axios";

export const list = async (req: Request, res: Response) => {
  const { page = 1, search = "", pageSize = 10, genres = "" } = req.query;
  try {
    const gamesRes = await axios.get(
      `${process.env.RAWG_API_URL}/games?key=${
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

export const get = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const gamesRes = await axios.get(
      `${process.env.RAWG_API_URL}/games/${id}?key=${process.env.RAWG_API_KEY}`,
      {
        headers: {
          "Accept-Encoding": "*",
        },
      }
    );
    res.json({
      data: gamesRes.data,
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
      `${process.env.RAWG_API_URL}/genres?key=${process.env.RAWG_API_KEY}`,
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
