import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import styles from "./Writing.module.scss";
import Header from "../organisms/Header";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import marked from "marked";
import { useDispatch, useSelector } from "react-redux";
import { postArticle, selectEdit, selectSelectedItems, updatePost } from "../../features/article/articleSlice";
import { useHistory } from "react-router-dom";

const Writing = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedArticle = useSelector(selectSelectedItems);
  const edit = useSelector(selectEdit);

  const [markdown, setMarkdown] = useState(edit ? selectedArticle.text : "");
  const [title, setTitle] = useState(edit ? selectedArticle.title : "");
  const [img, setImg] = useState(edit ? selectedArticle.img : "");

  const plusArticle = async() => {

    // editがTrue(編集状態)の時は編集したデータを更新
    if(edit) {
      const sendData = {...selectedArticle, title: title, text: markdown, img: img}
      await dispatch(updatePost(sendData));
    // editがfalse(新規投稿)の場合は記事を追加する
    } else {
      await dispatch(postArticle({
        img: img,
        title: title,
        markdown: markdown,
      }))
    }
    setMarkdown("")
    setTitle("")
    setImg("")
    history.push("/");
  };

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <TextField
          label="タイトル"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.main}>
          <div className={styles.writing}>
            <Typography variant="h6">本文</Typography>
            <SimpleMDE onChange={(e) => setMarkdown(e)} />
          </div>
          <div className={styles.preview}>
            <Typography variant="h6">プレビュー</Typography>
            <div className={styles.box}>
              <span dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Button 
        variant="contained" 
        color="primary" 
        disabled={title.trim().length === 0 || markdown.trim().length === 0} 
        onClick={plusArticle}>
          {edit ? "記事を更新する" : "記事を投稿する"}
        </Button>
      </div>
    </div>
  );
};

export default Writing;
