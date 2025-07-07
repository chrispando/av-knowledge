import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Articles from "../components/Articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faComment,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./ArticlesList.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import CreatePost from "./CreatePost";
import { useGetArticlesQuery } from "../slices/articlesApiSlice";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]); // Holds all articles
  const [filteredArticles, setFilteredArticles] = useState([]); // Holds filtered articles
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [articlesPerPage] = useState(4); // Number of articles to display per page
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [showCreatePost, setShowCreatePost] = useState(false); // Toggle CreatePost visibility
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null); // Manage the input reference internally
  // Access user information from Redux state
  const { userInfo } = useSelector((state) => state.auth);

  const {
    data: fetchedArticles = [],
    error,
    isLoading,
  } = useGetArticlesQuery();

  useEffect(() => {
    if (fetchedArticles) {
      setArticles([...fetchedArticles].sort(() => Math.random() - 0.5)); // Shuffle articles
      setFilteredArticles([...fetchedArticles].sort(() => Math.random() - 0.5)); // Also set filtered articles initially
    }
  }, [fetchedArticles]); // Runs when articles change

  // Handle search input and filter articles
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter articles based on the search query
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(query)
    );
    setFilteredArticles(filtered);

    // Reset current page when search query changes
    setCurrentPage(1);
  };

  // Get the articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle loading state
  if (loading) return <p>Loading articles...</p>;

  return (
    <div className="articles-page">
      <h1 className="articles-heading">Articles</h1>

      <Search
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        inputRef={inputRef} // Pass inputRef correctly here
      />

      {/* Display Create Post button if userInfo exists */}
      {userInfo && (
        <div className="">
          <Link to="/create">
            <button className="btn-primary">
              <FontAwesomeIcon icon={faComment} />
              {showCreatePost ? " Close Create Post" : " Create Post"}
            </button>
          </Link>
        </div>
      )}

      {/* Display current articles */}
      <Articles articles={currentArticles} />

      {/* Pagination controls */}
      <div className="pagination-container mt-4 text-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button p-2 border rounded mx-2"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="caret" />
        </button>
        <span className="page-number mx-2">{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastArticle >= filteredArticles.length}
          className="pagination-button p-2 border rounded mx-2"
        >
          <FontAwesomeIcon icon={faChevronRight} className="caret" />
        </button>
      </div>
    </div>
  );
};

export default ArticlesList;
