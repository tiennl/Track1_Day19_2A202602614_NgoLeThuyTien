# Prototype Feedback Note

> **Facilitator**: Ngô Lê Thủy Tiên (2A202602614), phụ trách Option A (Socratic Diagnostic Chat)
> **Tester**: Tester 1, ngoài nhóm, sinh viên CNTT năm 3 _(ghi tên viết tắt/ẩn danh nếu cần)_
> **Ngày test**: `[TODO: dd/mm/yyyy]` · **Thời lượng**: `[TODO: ~x phút]` · **Hình thức**: `[TODO: trực tiếp / online share screen]`
> **Prototype**: [AI Tutor: Diagnostic Refresher, Micro-prototype](https://claude.ai/artifact/7H3kBwiWinyEqc4qwsrW9j)
> **Thứ tự test**: `[TODO: ví dụ A → B → C]`

---

## 1. Setup phiên test

**Lời mở đầu trung lập (Neutral Briefing)**:

> _"Cảm ơn bạn đã tham gia. Mình đang nghiên cứu cách người học vượt qua các đoạn kiến thức khó khi tự học trực tuyến. Trước mặt bạn là một bài học mẫu về Gradient Descent. Trong bài có một công thức toán mà nhiều người thường bị khựng lại. Mình có 3 công cụ hỗ trợ khác nhau (Option A, B, C). Bạn hãy trải nghiệm từng công cụ để tìm hiểu xem công thức này đang đòi hỏi kiến thức nền tảng nào và vượt qua chỗ bế tắc đó nhé. Bạn cứ thoải mái thao tác và nói to suy nghĩ trong đầu, không có thao tác nào là sai cả."_

**Outcome Task**: _"Hãy xác định xem ký hiệu ∂L/∂w trong công thức đòi hỏi kiến thức nền gì từ trước và làm sao để hiểu được nó."_

**Facilitator cam kết KHÔNG giải thích**: AI sẽ hỏi gì, ý nghĩa con số độ tin cậy, sự tồn tại của nút "AI đoán sai?".

---

## 2. Quan sát hành vi theo từng Option

> Ghi **hành vi quan sát được** và **lời nói nguyên văn** tách khỏi **diễn giải của facilitator**.

### Option A: Socratic Diagnostic Chat

| Tiêu chí quan sát      | Hành vi thực tế / Quote                                                                       |
| :--------------------- | :-------------------------------------------------------------------------------------------- |
| Thao tác đầu tiên      | `[TODO: có bấm ngay "Tôi chưa hiểu chỗ này" không?]`                                          |
| Điểm ngập ngừng        | `[TODO: có đọc banner capability không? khựng ở câu 1 hay câu 2?]`                            |
| Thời gian hoàn thành   | ~45 giây cho toàn bộ luồng                                                                    |
| Evidence/uncertainty   | `[TODO: có để ý "88%" / mở "Vì sao AI kết luận vậy?" không?]`                                 |
| Recovery/control       | `[TODO: bấm "Hiểu rồi, quay lại bài", "Chẩn đoán lại" hay "AI đoán sai?"]`                     |
| Phản ứng / Quote       | Trả lời nhanh 2 câu hỏi; rất thích việc AI "bắt đúng bệnh" mà không cần gõ từ khóa. `[TODO: quote nguyên văn]` |

### Option B: Prerequisite Concept Radar

| Tiêu chí quan sát      | Hành vi thực tế / Quote                                                       |
| :--------------------- | :---------------------------------------------------------------------------- |
| Thao tác đầu tiên      | Chú ý ngay vào nút cam cảnh báo (vùng dễ nhầm lẫn).                           |
| Điểm ngập ngừng        | Nhận xét cây sơ đồ "hơi nhiều chữ" lúc đang bị rối. `[TODO: quote nguyên văn]` |
| Recovery/control       | `[TODO: có dùng "Đặt lại bản đồ" / danh sách phẳng không?]`                   |

### Option C: Inline Scaffolding Co-pilot

| Tiêu chí quan sát      | Hành vi thực tế / Quote                                                       |
| :--------------------- | :---------------------------------------------------------------------------- |
| Thao tác đầu tiên      | `[TODO: bấm vào ký hiệu nào trước?]`                                          |
| Tương tác chính        | Kéo thanh trượt qua cả 3 mức; thích nhất **Mức 2 (So sánh cũ/mới)**.          |
| Kiểm tra hiểu bài      | Làm mini-quiz và rất hào hứng khi trả lời đúng.                               |
| Recovery/control       | `[TODO: có dùng "Trở về mặc định" không?]`                                    |

---

## 3. Đánh đổi & Lựa chọn của Tester

- **Lựa chọn**: Chọn **C cho việc học hàng ngày**, nhưng chọn **A khi hoàn toàn bế tắc**.
- **Đánh đổi chính**: _"Giữ mạch đọc"_ (C) ↔ _"được định hướng khi mất gốc"_ (A).
- **Quote lý do**: `[TODO: câu tester nói khi giải thích lựa chọn]`

---

## 4. Diễn giải của Facilitator (Interpretation, chưa phải kết luận)

- Cơ chế **Ask → Act** của Option A có vẻ giúp tester gỡ kẹt nhanh khi không tự xác định được chỗ hổng. Hai câu trắc nghiệm ngắn chưa cho thấy dấu hiệu gây quá tải.
- Tester không muốn A là công cụ mặc định. Inline (C) phù hợp hơn với nhịp đọc liên tục, A đóng vai trò "cứu hộ" khi bế tắc sâu.
- Option B được chú ý nhờ tín hiệu cảnh báo trực quan, nhưng lượng chữ trên sơ đồ là rào cản lúc người học đang rối.

**Giới hạn**: Chỉ 1 tester, prototype dùng output viết sẵn, test trong môi trường giả lập. **Không** dùng note này để tuyên bố solution đã validated.

---

## 5. Đề xuất Next Change cho Option A (từ phiên test này)

1. `[TODO: ví dụ: đưa nút "Chẩn đoán nhanh 2 câu" vào ngay tại công thức (inline) thay vì mở panel chat riêng]`
2. `[TODO: ví dụ: kiểm tra lại tester có để ý/hiểu con số 88% không, nếu không thì đổi cách thể hiện độ tin cậy]`
