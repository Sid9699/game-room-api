import express from "express";
import { list } from "../controllers/games";

const router = express.Router();

router.get("/", list);

export default router;
