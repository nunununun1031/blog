import React from "react";
import styles from "./Home.module.scss";
import Header from "../organisms/Header";
import ArticleCardBox from "../organisms/ArticleCardBox";

const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <div className={styles.right}>
        <ArticleCardBox />
        </div>
        <div className={styles.left}>
          <h1>sub</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
