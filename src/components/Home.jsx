import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to My Blog</h1>
      <Link to="/article">To Articles</Link>
    </div>
  );
};

export default Home;
