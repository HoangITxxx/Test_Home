import React from "react";
import { Typography, Row, Col } from "antd";
import "../Css/ReversePage.css";

const { Title } = Typography;

const ReversePage = ({ title, content, image, reverse }) => {
  return (
    <div className="event-process-section">
      <Row gutter={[16, 16]} align="middle">
        {reverse ? (
          <>
            <Col xs={24} md={16} className="content-col">
              <Title
                level={3}
                className="TitleReverse"
                style={{
                  color: "#1E90FF",
                  fontWeight: "bold",
                  fontSize: "33px",
                }}
              >
                {title}
              </Title>
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Col>
            <Col xs={24} md={8} className="image-col">
              <img src={image} alt={title} className="section-image" />
            </Col>
          </>
        ) : (
          <>
            <Col xs={24} md={8} className="image-col">
              <img src={image} alt={title} className="section-image" />
            </Col>
            <Col xs={24} md={16} className="content-col">
              <Title
                level={3}
                className="TitleReverse"
                style={{
                  color: "#1E90FF",
                  fontWeight: "bold",
                  fontSize: "33px",
                }}
              >
                {title}
              </Title>
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default ReversePage;
