import express from "express";
import { list, create, remove, count } from "../controllers/cart.controller";
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
 * /cart-items/count:
 *   get:
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description:
 *
 */
router.get("/count", passport.authenticate("jwt", { session: false }), count);

/**
 * @swagger
 * /cart-items/{gameId}:
 *   post:
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: gameId
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

/**
 * @swagger
 * /cart-items/{id}:
 *   delete:
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description:
 *
 */
router.delete("/:id", passport.authenticate("jwt", { session: false }), remove);

export default router;
