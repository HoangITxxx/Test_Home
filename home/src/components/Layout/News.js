import React from "react";
import styles from "../../features/events/EventList.module.css";
import VerifiedUserIcon from "../UI/VerifiedUserIcon";

const NewsList = ({ news, className, imgNews }) => {
  return (
    <div className={`${styles.newsItem} ${className || ""}`}>
      <img
        src={news.image}
        alt={news.title}
        className={`${styles.newsImage} ${imgNews || ""}`}
      />
      <p className={styles.newsDate}>
        📅 {news.date} <span style={{ marginLeft: "100px" }}></span>
        <VerifiedUserIcon size={15} /> {news.author}
      </p>
      <h3 className={styles.newsTitle}>{news.title}</h3>
      <p className={styles.newsDescription}>{news.description}</p>
      <p className={styles.newsText}>{news.readNext}</p>
    </div>
  );
};

export default NewsList;
