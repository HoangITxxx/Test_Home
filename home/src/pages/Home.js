import React from "react";
import { Typography, Row, Col } from "antd";
import HeroSection from "../features/banners/HeroSection";
import EventCard from "../features/events/EventCard";
import EventPage from "../features/events/EventPage";
import EventDownTime from "../features/events/EventDownTime";
import EventList from "../features/events/EventList";
import EventSport from "../features/events/EventSport";
import EventProcess from "../features/events/EventProcess";
import EventNewsList from "../features/news/NewsList";
import EventContact from "../features/events/EventContact";

const { Title } = Typography;

function Home() {
  return (
    <div>
      <HeroSection />
      <div style={{ padding: "20px", background: "#fff" }}>
        <Title
          level={2}
          className="titleHome"
          style={{
            textAlign: "center",
            fontSize: "35px",
            fontWeight: "revert",
            margin: "0",
            color: "blue",
            paddingTop: "30px",
          }}
        >
          SỰ KIỆN SẮP DIỄN RA
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={20} md={16}>
            <EventCard />
            <EventPage />
            <EventDownTime />
            <EventList />
            <EventSport />
            <EventProcess />
            <EventNewsList />
            <EventContact />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
