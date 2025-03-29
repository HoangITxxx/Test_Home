import React from "react";
import { Button, Typography, Row, Col } from "antd";
import styles from "./HeroSection.module.css";

const { Paragraph } = Typography;

function HeroSection({ image }) {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <div>
          <img
            src="/images/background.jpg"
            alt="Background"
            className={styles.image}
          />
        </div>
        <Col xs={22} sm={20} md={16}>
          <Paragraph className={styles.paragraph}>
            Website cung cấp nhiều thông tin về giới thể thao quy mô lớn khắp cả
            nước
          </Paragraph>
          <Button type="primary" size="large" className={styles.button}>
            Tìm hiểu thêm
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
