import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

const Search = ({ searchQuery, handleSearch, inputRef }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive((prev) => !prev); // Toggle the active state
    if (!isActive && inputRef.current) {
      inputRef.current.focus(); // Focus the input when toggling active state
    }
  };

  return (
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <button className="search-button" onClick={toggleSearch}>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        ref={inputRef} // Attach the ref to the input field
        className="search-input"
        placeholder="Search articles..."
      />
    </div>
  );
};

export default Search;
