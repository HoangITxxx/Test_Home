import React from "react";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function TopBar() {
  return (
    <div className="top-bar">
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "8px 20px",
          fontSize: "14px",
        }}
      >
        <Row align="middle">
          <Col
            xs={12}
            md={9}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <span>XXXS XXX XXX - Giải pháp cho doanh nghiệp</span>
          </Col>

          <Col
            xs={10}
            md={13}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0 20px",
            }}
          >
            <Input
              placeholder="Tìm kiếm..."
              suffix={<SearchOutlined style={{ color: "#fff" }} />}
              style={{
                width: "700px",
                //   borderRadius: "4px",
                background: "#000",
                color: "#fff",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TopBar;
