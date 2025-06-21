import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Article.module.css";

const articles = {
  1: { title: "First Article", content: "First Article content." },
  2: { title: "First Article", content: "Second Article content." },
  3: { title: "First Article", content: "Third Article content." },
};

const Article = () => {
  const { id } = useParams;
  const article = articles[id];

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className={styles.article}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
