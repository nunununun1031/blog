import React, { useEffect } from "react";
import styles from "./ArticleCardBox.module.scss";
import { Article } from "../../types/article";
import { useDispatch, useSelector } from "react-redux";
import { getArticle, selectItems } from "../../features/article/articleSlice";

import ArticleCard from "../molecules/ArticleCard";

const ArticleCardBox = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  useEffect(() => {
    dispatch(getArticle())
  },[dispatch])

  return (
    <div className={styles.root}>
      {items.map((item: Article) => (
        <ArticleCard
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          text={item.text}
          createdAt={item.createdAt}
          updateTime={item.updateTime}
          good={item.good}
        />
      ))}
    </div>
  );
};

export default ArticleCardBox;
