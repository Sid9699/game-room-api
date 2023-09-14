import express from "express";
import { list, create } from "../controllers/cart.controller";
import passport from "passport";

/**
 * @swagger
 * tags:
 *   name: Cart
 */
const router = express.Router();

/**
 * @swagger
 * /cart-items:
 *   get:
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description:
 *
 */
router.get("/", passport.authenticate("jwt", { session: false }), list);

/**
 * @swagger
 * /cart-items/{id}:
 *   post:
 *     tags: [Cart]
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
router.post(
  "/:gameId",
  passport.authenticate("jwt", { session: false }),
  create
);

export default router;
