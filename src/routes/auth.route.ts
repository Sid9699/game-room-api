import express from "express";
import { login, register } from "../controllers/auth.controller";

/**
 * @swagger
 * tags:
 *   name: Auth
 */

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description:
 *
 */
router.post("/register", register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description:
 *
 */
router.post("/login", login);

export default router;
