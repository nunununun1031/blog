import React from "react";
import { Button, Typography } from "@material-ui/core";
import styles from "./Browsing.module.scss";
import Header from "../organisms/Header";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, handleEdit, selectSelectedItems } from "../../features/article/articleSlice";
import { useHistory } from "react-router-dom";
import { selectLogin } from "../../features/login/loginSlice";


const Browsing = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const selectedArticle = useSelector(selectSelectedItems);
  const loginValue = useSelector(selectLogin);

  // 編集画面に移動
  const goWriting = () => {
    dispatch(handleEdit(true))
    history.push("/writing")
  }

  // 記事の削除と選択中記事のリセット
  const deleteItem = () => {
    dispatch(deletePost(selectedArticle.id))
    history.push("/");
  }
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.article}>
        <Typography variant="h2">{selectedArticle.title}</Typography>
        <div className={styles.text}>
          <Typography variant="subtitle1">{selectedArticle.text}</Typography>
        </div>
        <div className={styles.action}>
          <Button variant="contained" color="primary" onClick={goWriting} disabled={loginValue.isAdmin === false}>
            編集
          </Button>
          <Button variant="contained" color="primary" onClick={deleteItem} disabled={loginValue.isAdmin === false}>
            削除
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Browsing;
