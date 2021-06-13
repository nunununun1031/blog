import React from "react";
import { Button, Typography } from "@material-ui/core";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Typography variant="h2">Home</Typography>
      <Button className={styles.button} variant="contained" color="primary">
        記事の追加
      </Button>
    </div>
  );
};

export default Header;
