import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";

// Components
import Navbar from "./components/NavBar";
import LowerNavBar from "./components/LowerNavBar";

// Styles
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Router>
      <div className="container">
        <Navbar toggleNav={toggleNav} />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles-list" element={<ArticlesList />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <LowerNavBar isOpen={isOpen} />
      <ToastContainer />
    </Router>
  );
}

export default App;
