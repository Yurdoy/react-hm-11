import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ArticleList.module.css";

const articles = [
  { id: 1, title: "First Article" },
  { id: 2, title: "Second Article" },
  { id: 3, title: "Third Article" },
];

const ArticleList = () => {
  return (
    <div className={styles.ArticleList}>
      <h1>Article List</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
