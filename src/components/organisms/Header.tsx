import React from "react";
import { Button, Typography } from "@material-ui/core";
import styles from "./Header.module.scss";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/login/loginSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const loginValue = useSelector(selectLogin);

  const goLogin = () => {
    history.push("/login");
  };
  const writeArticle = () => {
    history.push("/writing");
  };

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.title}>
        <Typography variant="h3">Home</Typography>
        </Link>
      <div>
      <Button
        className={styles.login}
        variant="contained"
        color="primary"
        onClick={goLogin}
      >
        管理者ログイン
      </Button>
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        onClick={writeArticle}
        disabled={loginValue.isAdmin === false}
      >
        記事の追加
      </Button>
      </div>
    </div>
  );
};

export default Header;
