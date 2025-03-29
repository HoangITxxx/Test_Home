import React from "react";
import { Card } from "antd";

const CustomCard = ({ children, cover, actions, extra, style }) => {
  return (
    <Card
      cover={cover && <img alt="example" src={cover} />}
      actions={actions}
      extra={extra}
      style={{
        border: "none",
        boxShadow: "none",
        textAlign: "center",
        ...style,
      }}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
