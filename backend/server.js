const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 8000;

require("dotenv").config();
const cors = require("cors");
app.use(cors());

// Middleware
app.use(express.json({ extended: false }));

const withDb = async (operations, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db("Knowledge-Base");
    await operations(db);
    client.close();
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .json({ message: "Error connecting to db", error: err.message });
  }
};

// Route to get all entries
app.get("/api/articles", (req, res) => {
  withDb(async (db) => {
    const articles = await db.collection("Articles").find({}).toArray(); // Adjust the collection name as needed
    res.status(200).json(articles);
  }, res);
});

app.get("/api/articles/:id", async (req, res) => {
  const articleId = req.params.id;
  withDb(async (db) => {
    const article = await db
      .collection("Articles")
      .findOne({ _id: new ObjectId(articleId) });
    res.status(200).json(article);
  }, res);
});

app.post("/api/articles/:id/add-upvote", (req, res) => {
  const articleId = req.params.id;
  withDb(async (db) => {
    const articleInfo = await db
      .collection("Articles")
      .findOne({ _id: new ObjectId(articleId) });
    await db.collection("Articles").updateOne(
      { _id: new ObjectId(articleId) },
      {
        $set: {
          upVotes: articleInfo.upVotes + 1,
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("Articles")
      .findOne({ _id: new ObjectId(articleId) });
    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
