import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Article.module.css";
import { useNavigate, useLocation } from "react-router-dom";

// const articles = {
//   1: { title: "First Article", content: "First Article content." },
//   2: { title: "First Article", content: "Second Article content." },
//   3: { title: "First Article", content: "Third Article content." },
// };

const Article = () => {
  //   const { id } = useParams;
  //   const article = articles[id];

  //   if (!article) {
  //     return <h2>Article not found</h2>;
  //   }

  const navigate = useNavigate();
  const location = useLocation();

  const handleBtn = () => {
    navigate("/");
  };

  return (
    <div className={styles.article}>
      <h1>Article</h1>
      <p>Here should be some article</p>
      <Link to="/">Home Page</Link>
      <p>Current URL: {location.pathname}</p>
      <button onClick={handleBtn}>Back</button>
    </div>
  );
};

export default Article;
