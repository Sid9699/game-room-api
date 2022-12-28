import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import passport from "passport";

// all configs
import "./config/db";
import "./config/passport";

import gamesRouter from "./routes/games";
import authRouter from "./routes/auth";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

app.use("/api/auth", authRouter);
app.use("/api/games", gamesRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
