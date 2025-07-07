import express from "express";
const router = express.Router();
import {
  getArticles,
  getArticle,
  postArticle,
} from "../controllers/articleController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getArticles).post(protect, postArticle);
router.route("/:id").get(getArticle);

export default router;
