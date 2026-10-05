# Khai báo minh bạch việc sử dụng công cụ AI (AI Support Log)

Trong quá trình thực hiện bài Lab này (Track1_Day19), tôi đã sử dụng AI làm trợ lý (Co-pilot) để tối ưu hiệu suất công việc. Dưới đây là nhật ký chi tiết:

## 1. Công cụ sử dụng

- **Claude / Gemini (Antigravity IDE)**: Tích hợp trực tiếp trên IDE.
- **Mục đích chính**: Hỗ trợ lập trình (Coding), Refactoring giao diện, và sinh nội dung mockup.

## 2. Chi tiết các tác vụ có sự hỗ trợ của AI

### A. Lập trình Micro-prototype (Option A)

- **Prompt/Yêu cầu**: Cung cấp file thiết kế `specs.md` và yêu cầu AI tự động khởi tạo dự án bằng `Vite + React + TypeScript` kèm `Tailwind CSS`.
- **Đóng góp của AI**:
  - Tự động sinh ra toàn bộ file code (components, layout, CSS).
  - Triển khai Logic State Machine (`state.ts`) để mô phỏng sự chuyển đổi giữa các Màn 1 -> Màn 2 -> Màn 3.
  - Viết hệ thống Tracking lưu trữ sự kiện (event logs) ra console để phục vụ facilitator.
- **Đóng góp của con người (Tôi)**:
  - Lên ý tưởng giao diện và hành vi ở file `specs.md`.
  - Kiểm thử, review code, xác nhận luồng chạy (flow) đúng với kỳ vọng UX.

### B. Sinh dữ liệu (Mock Data)

- **Prompt/Yêu cầu**: "Viết nội dung 5 chủ đề ôn tập siêu tốc 1 phút cho chủ đề Data Observability, Data Pipeline, GIGO, Data Cascades, Vector Store."
- **Đóng góp của AI**: Sinh text giải thích dễ hiểu, cấu trúc 3 dòng có đánh số, và cầu nối (bridge) quay lại bài.
- **Đóng góp của con người**: Căn chỉnh lại tone/voice sao cho thân thiện, không phán xét, đúng tinh thần Socratic.

## 3. Tuyên bố trách nhiệm

Tôi là người nắm quyền quyết định cuối cùng (Driver) đối với thiết kế, logic, và nội dung bài nộp. AI chỉ đóng vai trò tăng tốc độ hiện thực hóa (Execution) thay vì suy nghĩ thay (Thinking).
