import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link-home" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive ? "active-link-articles" : ""
              }
            >
              Articles
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
