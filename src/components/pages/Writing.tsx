import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import styles from "./Writing.module.scss";
import Header from "../organisms/Header";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import marked from "marked";

const Writing = () => {
  const [markdown, setMarkdown] = useState("");
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <TextField label="タイトル" variant="outlined" />
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
    </div>
  );
};

export default Writing;
