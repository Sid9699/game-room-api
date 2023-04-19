import express from "express";
import passport from "passport";
import { get } from "../controllers/user.controller";

const router = express.Router();

/**
 * @swagger
 * /user:
 *   get:
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description:
 *
 */
router.get("/", passport.authenticate("jwt", { session: false }), get);

export default router;
