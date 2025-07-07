import React from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

const Articles = ({ articles }) => {
  return (
    <div className="flex flex-wrap">
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article">
            {/* Render thumbnail if available */}
            {article.imgPath && (
              <Link to={`/article/${article._id}`}>
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={article.imgPath}
                  alt={article.title}
                />
              </Link>
            )}
            <div className="p-6 article-card">
              {/* Render article title */}
              <Link to={`/article/${article._id}`}>
                <h3 className="text-lg font-medium text-gray-900 mb-3 article-title">
                  {article.title}
                </h3>
              </Link>

              {/* Render a short excerpt or content preview */}
              {article.issue && (
                <p className="leading-relaxed mb-3 article-text">
                  {article.issue.substring(0, 110)}...
                </p>
              )}

              {/* Learn more link */}
              <div className="flex items-center flex-wrap">
                <Link
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 article-link"
                  to={`/article/${article._id}`}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
