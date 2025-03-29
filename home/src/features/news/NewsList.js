import React from "react";
import NewsList from "../../components/Layout/News";
import styles from "./NewsList.module.css";

import NewsSoccer from "../../assets/News.jpg";

const EventNewsList = () => {
  const dataList = [
    {
      id: 1,
      image: NewsSoccer,
      title: "GIẢI BÓNG ĐÁ CBSC MÙA 2",
      description:
        "Sáng ngày 4/3, 14 đội bóng có mặt tại sân bóng đá Trường Cao đẳng Lý Tự Trọng Thành phố Hồ Chí Minh để thi đấu vòng chung kết giải bóng đá CBSC lần 2- năm 2024...",
      date: "4/03/2025",
      author: "B. Nhật Kiên Văn",
      readNext: "Đọc tiếp >",
    },
    {
      id: 2,
      image: NewsSoccer,
      title: "GIẢI BÓNG ĐÁ CBSC MÙA 2",
      description:
        "Sáng ngày 4/3, 14 đội bóng có mặt tại sân bóng đá Trường Cao đẳng Lý Tự Trọng Thành phố Hồ Chí Minh để thi đấu vòng chung kết giải bóng đá CBSC lần 2- năm 2024...",
      date: "4/03/2025",
      author: "B. Nhật Kiên Văn",
      readNext: "Đọc tiếp >",
    },
    {
      id: 3,
      image: NewsSoccer,
      title: "GIẢI BÓNG ĐÁ CBSC MÙA 2",
      description:
        "Sáng ngày 4/3, 14 đội bóng có mặt tại sân bóng đá Trường Cao đẳng Lý Tự Trọng Thành phố Hồ Chí Minh để thi đấu vòng chung kết giải bóng đá CBSC lần 2- năm 2024...",
      date: "4/03/2025",
      author: "B. Nhật Kiên Văn",
      readNext: "Đọc tiếp >",
    },
  ];

  return (
    <div className={styles.containerNews}>
      <h2
        className={styles.HeaderNews}
        style={{
          fontWeight: "revert",
          color: "blue",
          fontSize: "34px",
        }}
      >
        Tin Tức
      </h2>
      <div className={styles.newsGrid}>
        {dataList.map((news) => (
          <NewsList
            key={news.id}
            news={news}
            className={`${styles.NewsListNewItems} ${styles.imgNews}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventNewsList;
