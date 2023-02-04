import express from "express";
import passport from "passport";
import { get } from "../controllers/user.controller";

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), get);

export default router;
