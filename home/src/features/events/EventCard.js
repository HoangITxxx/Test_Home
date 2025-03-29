import React from "react";
import CustomCard from "../../components/Layout/Card";

function EventCard() {
  return (
    <CustomCard
      style={{
        maxWidth: "700px",
        margin: "auto",
        textAlign: "center",
        background: "white",
      }}
    >
      <h1
        style={{
          color: "#00e676",
          fontWeight: "bold",
          borderBottom: "2px solid #00e676",
        }}
      >
        GIẢI VIỆT DÃ VỀ NGUỒN
      </h1>
      <p style={{ fontWeight: "bold", fontSize: "14px", maxWidth: "100%" }}>
        Kỷ niệm 50 năm Ngày giải phóng miền Nam, thống nhất đất nước (30/4/1975
        - 30/4/2025) và chào mừng Đại hội Đảng cao cấp. Hướng tới Đại hội đại
        biểu toàn quốc lần thứ XIV của Đảng và hưởng ứng ngày chạy Olympic vì
        sức khỏe toàn dân năm 2025.
      </p>
    </CustomCard>
  );
}

export default EventCard;
