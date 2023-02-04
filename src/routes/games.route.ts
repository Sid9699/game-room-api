import express from "express";
import { list, listGenres } from "../controllers/games.controller";
import passport from "passport";

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), list);
router.get(
  "/genres",
  passport.authenticate("jwt", { session: false }),
  listGenres
);

export default router;
