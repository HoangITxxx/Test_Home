import React from "react";

const EventDownTime = () => {
  const countdownTime = [
    { time: "01", label: "Ngày" },
    { time: "24", label: "Giờ" },
    { time: "350", label: "Phút" },
    { time: "96", label: "Giây" },
  ];

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
          marginTop: "30px",
          color: "blue",
        }}
      >
        CÒN LẠI
      </h1>

      <div
        className="countdown-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {countdownTime.map((item, index) => (
          <div
            key={index}
            style={{
              width: "80px",
              height: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #00aaff, #66ccff)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "10px",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ fontSize: "24px" }}>{item.time}</div>
            <div style={{ fontSize: "14px" }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDownTime;
