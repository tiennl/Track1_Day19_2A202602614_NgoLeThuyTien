# Chặng 2 — Chọn ba Solution Options

## 1. Những thứ phải giữ nguyên (Quyết định chung cho A/B/C)

- **Target user:** Học viên Product Management / Data Science tự học trực tuyến các khóa về AI/Data.
- **Situation:** Đang tự học bài mới qua slide, gặp các thuật ngữ chuyên ngành lạ/nền tảng và bị khựng lại vì hổng kiến thức nền.
- **Task:** Nhanh chóng xác định phần kiến thức nền tảng đang thiếu hụt và gỡ kẹt để tiếp tục học.
- **Desired outcome:** Hiểu được mắt xích kiến thức bị thiếu trong dưới 1 phút mà không bị quá tải hay đứt mạch học.
- **Content/data fixture:** Bài giảng: _"Day 10 - Data Pipeline & Observability"_. Điểm kẹt: Các thuật ngữ chuyên môn như "agent RAG", "vector store", "data cascades", "observability" trên slide.

## 2. Những thứ được phép khác

| Thành phần             | Option A<br>**Socratic Diagnostic Chat**                                                       | Option B<br>**Prerequisite Concept Radar**                                                                       | Option C<br>**Inline Scaffolding Co-pilot**                                                                                    |
| :--------------------- | :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **Solution mechanism** | **Turn-based Socratic Interview**: AI chủ động hỏi 2 câu ngắn để chẩn đoán và tóm tắt cấp tốc. | **Visual Map Exploration**: Hệ thống trực quan hóa cây phả hệ kiến thức; User tự nhìn bản đồ để định vị chỗ kẹt. | **Inline Deconstruction**: Bóc tách tức thì tại chỗ thuật ngữ/câu phức tạp thành các tầng kiến thức ngầm định qua thanh trượt. |
| **User làm gì?**       | Bấm _"Tôi chưa hiểu"_ $\rightarrow$ Chọn đáp án cho 2 câu hỏi $\rightarrow$ Đọc kết luận.      | Duyệt cây kiến thức $\rightarrow$ Bấm vào node nghi ngờ $\rightarrow$ Đọc đối chiếu lý thuyết cũ/mới.            | Bấm vào thuật ngữ/câu gây bế tắc $\rightarrow$ Kéo thanh trượt độ sâu (1, 2, 3) $\rightarrow$ Làm thử câu test mini.           |
| **AI làm gì?**         | Phân tích câu trả lời, suy luận xác suất lỗ hổng (88%) và sinh thẻ ôn tập cấp tốc.             | Phân loại độ rủi ro của các node (_Nền tảng_ vs _Vùng dễ nhầm lẫn ⚠️_) và hiển thị giải thích liên hệ.           | Phân giải cấu trúc thuật ngữ theo thời gian thực tương ứng với mức độ sâu người dùng chọn.                                     |
| **Trigger**            | Nút _"Tôi chưa hiểu đoạn này"_ bên cạnh slide.                                                 | Tab/Menu _"Bản đồ kiến thức tiên quyết"_ ở cạnh bài.                                                             | Thao tác bấm/chọn trực tiếp vào các thuật ngữ lạ (RAG, vector store).                                                          |
| **Trade-off chính**    | Được dẫn dắt chính xác, nhưng phải nhường quyền điều khiển cho AI và tạm tách khỏi bài đọc.    | Có bức tranh tổng quan, nhưng đòi hỏi nỗ lực nhận thức cao (dễ ngợp nếu không biết bấm node nào).                | Giữ mạch đọc hoàn hảo, nhưng giả định user đã khoanh vùng được thuật ngữ nào gây bối rối.                                      |

## 3. Distance check

- **A khác B vì:** Option A đặt quyền dẫn dắt vào tay **AI** (AI chủ động đặt câu hỏi chẩn đoán để tìm lỗ hổng cho user), trong khi Option B đặt quyền chủ động hoàn toàn vào tay **User** (User tự nhìn bản đồ phả hệ kiến thức và tự quyết định xem nhánh nào).
- **B khác C vì:** Option B tách kiến thức ra thành một **sơ đồ phả hệ vĩ nội độc lập** (Macro Graph), trong khi Option C **can thiệp vi mô ngay tại dòng chữ/thuật ngữ** (Micro Inline) với thanh trượt độ sâu tùy biến.
- **A khác C vì:** Option A là quá trình **hội thoại tương tác hai chiều từng bước** (Turn-based Socratic) tập trung vào việc "bắt bệnh", trong khi Option C là công cụ **co-pilot đồng sáng tạo tại chỗ** (On-demand Deconstruction) tập trung vào việc "mổ xẻ cấu trúc" mà không làm gián đoạn dòng đọc.

## 4. GATE 2 — Meaningful options

- [x] Cả 3 options cùng chung target user, situation, task, desired outcome và content fixture.
- [x] Khác nhau rõ rệt ở cơ chế tương tác và mức độ phân chia quyền tự quyết giữa User và AI.
- [x] Không có option nào là "vật tế thần" (cả 3 đều chạy test-ready trên micro-prototype).
