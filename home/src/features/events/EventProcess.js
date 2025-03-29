import React from "react";
import ReversePage from "../../components/Layout/Reverse";
import "./EventProcess.css";

import Event1 from "../../assets/EventProcess1.png";
import Event2 from "../../assets/EventProcess2.png";
import Event3 from "../../assets/EventProcess3.png";
import Event4 from "../../assets/EventProcess4.png";

const EventProcess = () => {
  const sections = [
    {
      title: "Lập kế hoạch tổ chức (PLAN)",
      content: [
        <span>
          <strong>Xác định rõ mục tiêu của sự kiện:</strong> Bạn muốn đạt được
          điều gì? (Tăng nhận diện thương hiệu, gây quỹ, giao lưu, kết nối...)
        </span>,
        <span>
          <strong>Xác định phạm vi của sự kiện:</strong> Đội tượng tham gia là
          ai? Quy mô sự kiện như thế nào?
        </span>,
        <span>
          <strong>Lập kế hoạch chi tiết:</strong> Bao gồm lịch trình, địa điểm,
          ngân sách, nguồn lực cần thiết.
        </span>,
      ],
      image: Event1,
      reverse: false,
    },
    {
      title: "Điều phối nhân sự và triển khai, vận hành (DO)",
      content: [
        <span>
          <strong>Triển khai các công việc theo kế hoạch:</strong> Dựa vào bản
          kế hoạch đã được thông qua để tiến hành thiết kế bộ nhận diện, lên
          kịch bản, tạo timeline chi tiết của sự kiện.
        </span>,
        <span>
          <strong>Phân bổ nguồn lực hợp lý:</strong> Đảm bảo có đủ nhân sự, tài
          chính, thiết bị để mọi hoạt động diễn ra đúng tiến độ và đạt tiêu
          chuẩn chất lượng.
        </span>,
      ],
      image: Event2,
      reverse: true,
    },
    {
      title: "Truyền thông sự kiện (PR)",
      content: [
        <span>
          <strong>
            Xây dựng và thực hiện chiến lược truyền thông sự kiện:
          </strong>{" "}
          Sử dụng các kênh truyền thông, mạng xã hội để quảng bá sự kiện và thu
          hút người tham gia, đồng thời quảng bá hình ảnh thương hiệu, giá trị
          mà sự kiện mang lại.
        </span>,
        <span>
          <strong>
            Tiền hành truyền thông Trước - Trong thông và sau sự kiện:
          </strong>{" "}
          Quảng bá nội dung, ý nghĩa của sự kiện qua các kênh. Cập nhập thông
          tin lúc sự kiện đang diễn ra và sau sự kiện bằng bài viết tổng kết,
          lan toả dư âm tích cực.
        </span>,
      ],
      image: Event3,
      reverse: false,
    },
    {
      title: "Hậu sự kiện & đánh giá (CHECK & ACT)",
      content: [
        <span>
          <strong>Hậu sự kiện:</strong> Sau khi kết thúc sự kiện, chung kết để
          tiếp tục hỗ trợ về các hạng mục bàn giao.
        </span>,
        <span>
          <strong>Đánh giá:</strong> Đánh giá tổng quan hiệu quả của sự kiện vừa
          qua. Tiếp thu ý kiến, feedback của khách hàng.
        </span>,
      ],
      image: Event4,
      reverse: true,
    },
  ];

  return (
    <div className="event-process">
      <h2 className="event-process-title">QUY TRÌNH TỔ CHỨC</h2>
      {sections.map((section, index) => (
        <ReversePage
          key={index}
          title={section.title}
          content={section.content}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
};

export default EventProcess;
