import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer, Space } from "antd";
import {
  MenuOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

function AppHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setVisible(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      key: "1",
      label: (
        <a
          href="#story"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("story")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          GIỚI THIỆU
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          GIẢI ĐẤU{" "}
          <DownOutlined style={{ fontSize: "12px", marginLeft: "4px" }} />
        </span>
      ),
      children: [
        {
          key: "2-1",
          label: (
            <a
              href="#tournament1"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("tournament1")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Giải đấu 1
            </a>
          ),
        },
        {
          key: "2-2",
          label: (
            <a
              href="#tournament2"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("tournament2")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Giải đấu 2
            </a>
          ),
        },
        {
          key: "2-3",
          label: (
            <a
              href="#tournament3"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("tournament3")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Giải đấu 3
            </a>
          ),
        },
      ],
    },
    {
      key: "3",
      label: (
        <a
          href="#ranking"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("ranking")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          ĐĂNG KÝ TỔ CHỨC
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          href="#odds"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("odds")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          TIN TỨC
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          LIÊN HỆ
        </a>
      ),
    },
  ];

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Container chính */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Logo */}
        <div className="logo" style={{ marginRight: "20px" }}>
          <img
            src="/images/Sportzone.jpg"
            alt="Logo"
            style={{
              height: "35px",
              width: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Menu và icon trên desktop */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{
                flex: 1,
                justifyContent: "center",
                border: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              className="desktop-menu"
            />
            <Space className="social-icons" style={{ marginLeft: "20px" }}>
              <Button
                type="link"
                icon={
                  <FacebookOutlined
                    style={{ fontSize: "20px", color: "#1890ff" }}
                  />
                }
              />
              <Button
                type="link"
                icon={
                  <MailOutlined
                    style={{ fontSize: "20px", color: "#1890ff" }}
                  />
                }
              />
              <Button
                type="link"
                icon={
                  <PhoneOutlined
                    style={{ fontSize: "20px", color: "#1890ff" }}
                  />
                }
              />
            </Space>
          </div>
        )}
      </div>

      {/* Nút hamburger cho mobile */}
      {isMobile && (
        <Button
          className="mobile-menu-button"
          type="primary"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          style={{ marginLeft: "20px" }}
        />
      )}

      {/* Drawer cho mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={visible}
        className="mobile-menu"
      >
        <Menu mode="inline" items={menuItems} />
        <Space direction="inline" style={{ marginTop: "20px" }}>
          <Button type="link" icon={<FacebookOutlined />} block>
            Facebook
          </Button>
          <Button type="link" icon={<MailOutlined />} block>
            Email
          </Button>
          <Button type="link" icon={<PhoneOutlined />} block>
            Phone
          </Button>
        </Space>
      </Drawer>
    </Header>
  );
}

export default AppHeader;
