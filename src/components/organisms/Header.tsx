import React from "react";
import { Button, Typography } from "@material-ui/core";
import styles from "./Header.module.scss";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  const writeArticle = () => {
    history.push("/writing");
  };

  return (
    <div className={styles.header}>
      <Typography variant="h3">Home</Typography>
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        onClick={writeArticle}
      >
        記事の追加
      </Button>
    </div>
  );
};

export default Header;
