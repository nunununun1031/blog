import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import styles from "./Home.module.scss";
import { article } from "../../data/article";
import { Article } from "../../types/article";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import Header from "../organisms/Header";

const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        {article.map((art: Article) => (
          <Card className={styles.card}>
            <CardHeader title={art.title} />
            <CardMedia image={art.img} />
            <CardContent>
              <Typography variant="subtitle1">{art.text}</Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
