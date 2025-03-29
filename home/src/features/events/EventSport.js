import React from "react";
import styles from "./EventSport.module.css";

const events = [
  {
    title: "SỰ KIỆN KHU VỰC & CẤP ĐỘ CƠ SỞ",
    image: "/images/SportEvent1.jpg",
    details: [
      "Tổ chức các sự kiện quy mô phù hợp với từng tổ chức, khu vực.",
      "Tạo cơ hội cho vận động viên trẻ và tài năng thể hiện khả năng.",
    ],
  },
  {
    title: "SỰ KIỆN THỂ THAO CỘNG ĐỒNG",
    image: "/images/SportEvent2.jpg",
    details: [
      "Khuyến khích sự tham gia của người dân và nâng cao sức khỏe cộng đồng.",
      "Các sự kiện như ngày hội thể thao, giải chạy bộ từ thiện, giải đấu giao lưu.",
    ],
  },
  {
    title: "SỰ KIỆN THỂ THAO, VĂN HÓA KHÁC",
    image: "/images/SportEvent3.jpg",
    details: [
      "Tổ chức các sự kiện thể thao, văn hóa, lễ hội có tính đặc thù riêng.",
      "Tổ chức các giải đấu theo môn thể thao mới hoặc cách thức thi đấu đặc biệt theo yêu cầu.",
    ],
  },
];

const SportsEvents = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} style={{ fontStyle: "oblique" }}>
        TỔ CHỨC SỰ KIỆN THỂ THAO CHUYÊN NGHIỆP
      </h2>

      {events.map((event, index) => (
        <div className={styles.eventRow} key={index}>
          <div className={styles.imageContainer}>
            <img src={event.image} alt={event.title} className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.eventTitle} style={{ margin: "0px" }}>
              {event.title}
            </h3>
            <ul className={styles.list}>
              {event.details.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportsEvents;
