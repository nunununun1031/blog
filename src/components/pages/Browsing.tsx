import React from "react";
import { Button, Typography } from "@material-ui/core";
import styles from "./Browsing.module.scss";
import Header from "../organisms/Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, handleEdit, selectSelectedItems } from "../../features/article/articleSlice";
import { useHistory } from "react-router-dom";
// import { article } from "../../data/article";
// import { Article } from "../../types/article";

const Browsing = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const selectedArticle = useSelector(selectSelectedItems);

  // 編集画面に移動
  const goWriting = () => {
    dispatch(handleEdit(true))
    history.push("/writing")
  }

  // 記事の削除と選択中記事のリセット
  const deleteItem = () => {
    dispatch(deleteArticle(selectedArticle.id))
    // dispatch(selectArticle({
    //   id: "",
    //   img: "",
    //   title: "",
    //   text: "",
    //   createdAt: "",
    //   updateTime: "",
    //   good: 0,
    // }))
    history.push("/");
  }
  const goHome = () => {
    history.push("/");
  };
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.article}>
        <Typography variant="h2">{selectedArticle.title}</Typography>
        <div className={styles.text}>
          <Typography variant="subtitle1">{selectedArticle.text}</Typography>
        </div>
        <div className={styles.action}>
          <Button variant="contained" color="primary" onClick={goWriting}>
            編集
          </Button>
          <Button variant="contained" color="primary" onClick={deleteItem}>
            削除
          </Button>
        </div>
        <button onClick={goHome}>ホームへ</button>
      </div>
    </div>
  );
};

export default Browsing;
