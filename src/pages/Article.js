import React from "react";
import { useParams } from "react-router-dom";
import knowledge from "./knowledge";

const Article = () => {
  const { id } = useParams();
  const article = knowledge.find((article) => article._id.$oid === id);
  if (!article) return <h1>Article not found</h1>;
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {Object.entries(article.steps_to_resolve).map(([key, value]) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={key}>
          {value}
        </p>
      ))}
    </div>
  );
};

export default Article;
