import express from "express";
import dotenv from "dotenv";
dotenv.config();
import gamesRouter from "./routes/games";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/api/games", gamesRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
