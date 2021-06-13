import React from "react";
import { Button, Typography } from "@material-ui/core";
import styles from "./Browsing.module.scss";
import Header from "../organisms/Header";
// import { article } from "../../data/article";
// import { Article } from "../../types/article";

const Browsing = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.article}>
        <Typography variant="h2">タイトル</Typography>
        <div className={styles.text}>
          <Typography variant="subtitle1">記事本文</Typography>
        </div>
        <div className={styles.action}>
          <Button variant="contained" color="primary">
            編集
          </Button>
          <Button variant="contained" color="primary">
            削除
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Browsing;
