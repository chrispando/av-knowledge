import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Article.css";

const Article = () => {
  const { id } = useParams(); // Get the article id from the URL
  const [articleInfo, setArticleInfo] = useState(null); // State to hold the article info

  useEffect(() => {
    axios
      .get(
        `https://stark-ridge-88768-8900bd98165c.herokuapp.com/api/articles/${id}`
      )
      .then((res) => {
        setArticleInfo(res.data); // Set the article info
      })
      .catch((err) => {
        //log error
      });
  }, []);

  // Display a loading message if the article hasn't been loaded yet
  if (!articleInfo) return <p>Loading article...</p>;

  return (
    <div className="mx-auto px-4 article-container">
      <div className="flex flex-col sm:flex-row">
        <img
          className="w-full sm:w-1/2 article-image"
          src={`/assets/images/${articleInfo.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace("/", "")}.jpg`}
          alt={articleInfo.title}
        />
      </div>
      {/* Article title */}
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900 article-heading">
        {articleInfo.title}
      </h1>

      {/* Optional steps_to_resolve rendering */}
      {articleInfo.steps_to_resolve &&
        typeof articleInfo.steps_to_resolve === "object" &&
        Object.entries(articleInfo.steps_to_resolve).map(([key, value]) => (
          <p
            className="mx-auto leading-relaxed text-base mb-4 article-step"
            key={key}
          >
            {value}
          </p>
        ))}
    </div>
  );
};

export default Article;
