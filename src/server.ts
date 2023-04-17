import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import passport from "passport";
import swaggerUi from "swagger-ui-express";

// all configs
import "./config/db.config";
import "./config/passport.config";
import swaggerSpec from "./config/swagger.config";

import { logInfo } from "./middlewares/logger.middleware";

import gamesRouter from "./routes/games.route";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use(logInfo);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth", authRouter);
app.use("/games", gamesRouter);
app.use("/user", userRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
