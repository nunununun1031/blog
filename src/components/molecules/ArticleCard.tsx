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
import styles from "./ArticleCard.module.scss";
import { Article } from "../../types/article";
import { useDispatch } from "react-redux";
import { goodCountUp, handleEdit, selectArticle } from "../../features/article/articleSlice";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import { useHistory } from "react-router-dom";

type Props = Article;

const ArticleCard: React.FC<Props> = (props) => {
  const { id, img, title, text, createdAt, updateTime, good } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const goBrowsing = () => {
    dispatch(selectArticle({
      id: id,
      img: img,
      title: title,
      text: text,
      createdAt: createdAt,
      updateTime: updateTime,
      good: good,
    }))
    dispatch(handleEdit(false))
    history.push(`/browsing/${id}`)
  }

  const goodCount = () => {
    dispatch(goodCountUp({
      id: id,
      img: img,
      title: title,
      text: text,
      createdAt: createdAt,
      updateTime: updateTime,
      good: good,
    }));
  };
  return (
    <Card className={styles.card}>
      <div className={styles.main} onClick={goBrowsing}>
        <CardHeader title={title} />
        <CardMedia image={img} />
        <CardContent>
          <Typography variant="subtitle1">{text}</Typography>
        </CardContent>
      </div>
      <div className={styles.footer}>
        <CardActions>
          <IconButton onClick={goodCount}>
            <FavoriteBorderIcon />
            <span>{good}</span>
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default ArticleCard;
