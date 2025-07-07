import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    title: { type: String, required: true },
    issue: { type: String, required: true },
    steps_to_resolve: { type: Object, required: false },
    imgPath: { type: String, required: false },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema, "Articles");

export default Article;
