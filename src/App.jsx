import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/articles"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
