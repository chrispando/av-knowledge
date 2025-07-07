import asyncHandler from "../middleware/asyncHandler.js";
import { db } from "../server.js";

// @desc    Get all articles
// @route   GET /api/articles/
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const snapshot = await db.collection("articles").get();
  const articles = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.json(articles);
});

// @desc    Get single article by ID
// @route   GET /api/articles/:id
// @access  Public
const getArticle = asyncHandler(async (req, res) => {
  const docRef = db.collection("articles").doc(req.params.id);
  const doc = await docRef.get();

  if (!doc.exists) {
    res.status(404);
    throw new Error("Article not found");
  }

  res.json({ id: doc.id, ...doc.data() });
});

// @desc    Post new article
// @route   POST /api/articles/
// @access  Private
const postArticle = asyncHandler(async (req, res) => {
  const { date, title, issue, steps_to_resolve, imgPath, author } = req.body;

  const data = {
    date,
    title,
    issue,
    steps_to_resolve,
    imgPath,
    author,
    createdAt: new Date().toISOString(),
  };

  const docRef = await db.collection("articles").add(data);

  res.status(201).json({ id: docRef.id, ...data });
});

export { getArticles, getArticle, postArticle };
