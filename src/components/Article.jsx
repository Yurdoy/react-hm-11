import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Article.module.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const articles = {
  1: { title: "First Article", content: "First Article content." },
  2: { title: "First Article", content: "Second Article content." },
  3: { title: "First Article", content: "Third Article content." },
};

const Article = () => {
  const { id } = useParams();
  const article = articles[id];
  const navigate = useNavigate();
  const location = useLocation();

  if (!article) {
    return <h2>Article not found</h2>;
  }

  const handleBtn = () => {
    navigate("/articles");
  };

  return (
    <div className={styles.article}>
      <h1>{article.id}</h1>
      <p>{article.title}</p>
      <Link to="/">Home Page</Link>
      <p>Current URL: {location.pathname}</p>
      <button onClick={handleBtn}>Back</button>
    </div>
  );
};

export default Article;
