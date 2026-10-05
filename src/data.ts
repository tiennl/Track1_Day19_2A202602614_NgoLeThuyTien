export const Q1 = {
  prompt: "Khi đọc slide này, phần nào khiến bạn khựng lại?",
  chips: [
    "Data cascades là gì?",
    "Vector store là gì?",
    "Observability khác monitoring ở đâu?",
    "Mình không chắc",
  ],
};
export const Q2 = {
  prompt:
    "Pipeline chạy xanh, không báo lỗi, nhưng dữ liệu nạp vào vector store đã 3 tuần không được cập nhật. Cách nào phát hiện sớm nhất?",
  chips: [
    "Đọc error log",
    "Kiểm tra độ tươi dữ liệu (freshness)",
    "Tăng kích thước model",
    "Chưa học cái này",
  ],
};

export const TOPICS = [
  {
    id: "pipeline",
    name: "Data pipeline là gì",
    lines: [
      "Pipeline đưa dữ liệu từ nguồn → ingestion → transform → nơi lưu (vector store, kho dữ liệu).",
      "Mỗi bước đều có thể làm sai dữ liệu mà không báo lỗi.",
      "Ví dụ: PDF → tách chữ → chia chunk → embed → vector store.",
    ],
    bridge: "Observability theo dõi từng bước này, không chỉ bước cuối.",
  },
  {
    id: "gigo",
    name: "Garbage in, garbage out",
    lines: [
      "Chất lượng output bị chặn trên bởi chất lượng input.",
      "Model giỏi đến mấy cũng không sửa được dữ liệu sai.",
      "Ví dụ: RAG đọc tài liệu giá cũ → trả lời trôi chảy nhưng sai nội dung.",
    ],
    bridge: "Muốn tin output, phải kiểm soát input trước khi user nhìn thấy.",
  },
  {
    id: "cascades",
    name: "Data cascades",
    lines: [
      "Lỗi data ở thượng nguồn lan xuống và nhân lên ở hạ nguồn.",
      "Thường chỉ bị phát hiện muộn, khi user đã gặp hậu quả.",
      "Nguồn: Sambasivan et al., Google Research, CHI 2021.",
    ],
    bridge: "Observability sinh ra để chặn dây chuyền này sớm.",
  },
  {
    id: "vectorstore",
    name: "Vector store & agent RAG",
    lines: [
      "Vector store lưu embedding của tài liệu để tìm đoạn gần nghĩa nhất.",
      "Agent RAG chỉ trả lời dựa trên những gì đã được nạp vào đó.",
      "Nạp data bẩn hoặc cũ → agent trả lời sai dù model tốt.",
    ],
    bridge: 'Đây là chỗ slide nói "agent RAG vẫn trả lời sai".',
  },
  {
    id: "obs",
    name: "Data observability",
    lines: [
      'Monitoring hỏi "pipeline có chạy không?"; data observability hỏi "dữ liệu ra có đúng không?".',
      "Tín hiệu chính: freshness (độ tươi), volume (số lượng), schema, chất lượng giá trị.",
      "Ví dụ: pipeline xanh nhưng bảng 3 tuần không cập nhật → freshness check báo trước khi agent trả lời sai.",
    ],
    bridge: "Vậy observability = phát hiện data sai trước khi user phản nàn.",
  },
];
