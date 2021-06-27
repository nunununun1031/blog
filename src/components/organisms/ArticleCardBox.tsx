import React from "react";
import styles from "./ArticleCardBox.module.scss";
import { Article } from "../../types/article";
import { useSelector } from "react-redux";
import { selectItems } from "../../features/article/articleSlice";

import ArticleCard from "../molecules/ArticleCard";

const ArticleCardBox = () => {
  const items = useSelector(selectItems);
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
