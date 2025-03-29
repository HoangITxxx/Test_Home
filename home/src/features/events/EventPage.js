import React from "react";
import { Button, Typography } from "antd";
import "./EventPage.css";

const { Title, Paragraph } = Typography;

function EventPage() {
  return (
    <div className="eventPage">
      <div className="banner">
        <img
          src="/images/bannerRun.jpg"
          alt="Sự kiện thể thao"
          className="banner-image"
        />
        <div className="banner-content">
          <Title level={1} className="banner-title" style={{ color: "#fff" }}>
            GIẢI VIỆT DÃ VỀ NGUỒN
          </Title>
          <Paragraph className="banner-description">
            Kỷ niệm 50 năm Ngày giải phóng miền Nam, thống nhất đất nước
            (30/4/1975 - 30/4/2025) và chào mừng Đại hội Đảng cao cấp. Hướng tới
            Đại hội đại biểu toàn quốc lần thứ XIV của Đảng và hưởng ứng ngày
            chạy Olympic vì sức khỏe toàn dân năm 2025.
          </Paragraph>
          <Button type="primary" size="large" className="join-button">
            Tham gia ngay
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
