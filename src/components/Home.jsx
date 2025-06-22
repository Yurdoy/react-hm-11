import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Home Page</h1>
      <p>Welcome to the home page</p>
      <Link to="/article">To Articles</Link>
      <Link to="/about">To About</Link>
    </div>
  );
};

export default Home;
