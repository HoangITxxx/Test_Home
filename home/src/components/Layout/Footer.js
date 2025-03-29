import React from "react";
import styles from "../Css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img
          className={styles.brand}
          src="/images/Sportzone.jpg"
          alt="Brand Logo"
        />
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                fill="currentColor"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                fill="currentColor"
                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
              />
            </svg>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                fill="currentColor"
                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
              />
            </svg>
          </a>
        </div>
        <p className={styles.address}>
          552/9 Huỳnh Văn Bánh, Phường 14, Quận Phú Nhuận, TP. Hồ Chí Minh
        </p>
      </div>

      <div className={styles.links}>
        <div className={styles.column}>
          <h3>SPORTSZONE</h3>
          <ul>
            <li>
              <a href="">Nghề Nghiệp</a>
            </li>
            <li>
              <a href="">Giới Thiệu</a>
            </li>
            <li>
              <a href="">Thỏa Thuận</a>
            </li>
            <li>
              <a href="">Liên Hệ</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>DỊCH VỤ</h3>
          <ul>
            <li>
              <a href="">Tư vấn giải pháp và cung cấp sự kiện thể thao</a>
            </li>
            <li>
              <a href="">Thiết kế bộ nhận diện sự kiện thể thao</a>
            </li>
            <li>
              <a href="">Sự kiện thể thao cộng đồng</a>
            </li>
            <li>
              <a href="">Sự kiện thể thao chuyên nghiệp</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
