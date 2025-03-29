import React from "react";
import styles from "./EventList.module.css";
import NewsList from "../../components/Layout/News";

const EventList = () => {
  const dataList = [
    {
      id: 1,
      image: "/images/contentXeTank.jpg",
      title:
        "HOÀ MÌNH VÀO KHÔNG KHÍ HÀO HÙNG, QUẬN 7 - NHÀ BÈ TỔ CHỨC GIẢI VIỆT DÃ VỀ NGUỒN.",
      description:
        "Nhằm chào mừng các ngày lễ lớn và hướng tới việc giáo dục truyền thống, nâng cao tinh thần thể thao trong cộng đồng, Quận 7 phối hợp với huyện Nhà Bè long trọng tổ chức giải Việt Dã Về Nguồn... ",
      date: "01/01/2025",
      author: "By Nhật Kiên Văn",
      readNext: "Đọc tiếp >",
    },
    {
      id: 2,
      image: "/images/contentXeTank.jpg",
      title:
        "HOÀ MÌNH VÀO KHÔNG KHÍ HÀO HÙNG, QUẬN 7 - NHÀ BÈ TỔ CHỨC GIẢI VIỆT DÃ VỀ NGUỒN.",
      description:
        "Nhằm chào mừng các ngày lễ lớn và hướng tới việc giáo dục truyền thống, nâng cao tinh thần thể thao trong cộng đồng, Quận 7 phối hợp với huyện Nhà Bè long trọng tổ chức giải Việt Dã Về Nguồn... ",
      date: "01/01/2025",
      author: "By Nhật Kiên Văn",
      readNext: "Đọc tiếp >",
    },
  ];

  return (
    <div className={styles.newsContainer}>
      {dataList.map((news) => (
        <NewsList
          key={news.id}
          news={news}
          className={styles.EventListNewsItem}
        />
      ))}
    </div>
  );
};

export default EventList;
