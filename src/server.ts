import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import passport from "passport";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";

// all configs
import "./config/db.config";
import "./config/passport.config";
import swaggerSpec from "./config/swagger.config";

import gamesRouter from "./routes/games.route";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import cartRouter from "./routes/cart.route";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use(morgan("tiny"));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.redirect("/docs");
});

app.use("/auth", authRouter);
app.use("/games", gamesRouter);
app.use("/user", userRouter);
app.use("/cart-items", cartRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
