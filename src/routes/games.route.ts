import express from "express";
import { get, list, listGenres } from "../controllers/games.controller";
import passport from "passport";

/**
 * @swagger
 * tags:
 *   name: Games
 */
const router = express.Router();

/**
 * @swagger
 * /games:
 *   get:
 *     tags: [Games]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: genres
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description:
 *
 */
router.get("/", passport.authenticate("jwt", { session: false }), list);

/**
 * @swagger
 * /games/genres:
 *   get:
 *     tags: [Games]
 *     responses:
 *       200:
 *         description:
 *
 */
router.get(
  "/genres",
  passport.authenticate("jwt", { session: false }),
  listGenres
);

/**
 * @swagger
 * /games/{id}:
 *   get:
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description:
 *
 */
router.get("/:id", passport.authenticate("jwt", { session: false }), get);

export default router;
