import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import gamesRouter from "./routes/games";
import authRouter from "./routes/auth";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI as string, () => {
  console.log("Connected to Mongo DB");
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/api/auth", authRouter);
app.use("/api/games", gamesRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
