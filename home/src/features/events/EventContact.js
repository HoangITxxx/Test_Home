import React from "react";
import styles from "./EventContact.module.css";
import { FaPaperPlane } from "react-icons/fa";

const EventContact = () => {
  return (
    <div className={styles.ContainerContact}>
      <h2 className={styles.eventTitle}>LIÊN HỆ VỚI CHÚNG TÔI</h2>
      <div className={styles.eventContact}>
        <p className={styles.eventDescription}>
          Tổ chức các giải đấu thể thao uy tín, chuyên nghiệp và sáng tạo để phù
          hợp với đơn vị của bạn
        </p>
        <p className={styles.eventHotline}>
          <strong>Hotline:</strong> 0123 456 789
        </p>
        <a className={styles.eventLink}>Đăng ký nhận thông tin mới nhất</a>
        <div className={styles.InputContainer}>
          <input
            type="text"
            placeholder="Nội dung gửi"
            className={styles.inputField}
          />
          <FaPaperPlane className={styles.iconInsideInput} />
        </div>
      </div>
    </div>
  );
};

export default EventContact;
