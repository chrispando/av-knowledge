import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import Search from "../components/Search";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [articles, setArticles] = useState([]); // Articles from the API
  const [filteredArticles, setFilteredArticles] = useState([]); // Filtered articles for dropdown
  const inputRef = useRef(null); // Manage the input reference internally

  useEffect(() => {
    axios
      .get("https://stark-ridge-88768-8900bd98165c.herokuapp.com/api/articles")
      .then((res) => {
        setArticles(res.data); // Set articles from the API
      })
      .catch((err) => {
        //log error
      });
  }, []);

  // Handle search input and filter articles
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter articles based on the search query
    const filtered = articles
      .filter((article) => article.title.toLowerCase().includes(query))
      .slice(0, 4);
    setFilteredArticles(filtered); // Update filtered articles
  };

  return (
    <div className="welcome-page">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900 welcome-heading">
        Hello, Welcome to AV Knowledge
      </h1>
      <h3 className="welcome-text">A resource for the audiovisual industry.</h3>

      <div className="home-search-padding">
        <Search
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          inputRef={inputRef}
        />
        {searchQuery && (
          <ul className="dropdown-menu">
            {filteredArticles.map((article) => (
              <li key={article.id} className="dropdown-item">
                <Link to={`/article/${article._id.$oid}`}>{article.title}</Link>
              </li>
            ))}
            {filteredArticles.length === 0 && (
              <li className="dropdown-item no-results">No results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
