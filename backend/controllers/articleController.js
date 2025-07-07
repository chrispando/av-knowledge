import asyncHandler from "../middleware/asyncHandler.js";
import Article from "../models/articleModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Get articles
// @route   GET /api/articles/
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({});

  res.json(articles);
});

// @desc    Get article by ID
// @route   GET /api/articles/:id
// @access  Public
const getArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

// @desc    Post article
// @route   POST /api/articles/
// @access  Private

const postArticle = asyncHandler(async (req, res) => {
  const { date, title, issue, steps_to_resolve, imgPath, author } = req.body;
  const article = new Article({
    date,
    title,
    issue,
    steps_to_resolve,
    imgPath,
    author,
  });

  const createdArticle = await article.save();
  res.status(201).json(createdArticle);
});

export { getArticles, getArticle, postArticle };
