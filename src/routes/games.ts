import express from "express";
import { list } from "../controllers/games";
import passport from "passport";

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), list);

export default router;
