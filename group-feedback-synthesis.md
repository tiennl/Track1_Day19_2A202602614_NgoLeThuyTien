# Group Feedback Synthesis & Next Change

> **Lưu ý:** Phần dưới đây được tổng hợp từ 3 biên bản kiểm thử (Feedback Notes) độc lập của nhóm cho 3 tùy chọn (Option A, Option B, Option C).

## 1. Ma trận đối chiếu phản hồi từ 3 Tester độc lập

| Tester / Facilitator | Option A (Socratic Chat) | Option B (Concept Radar) | Option C (Inline Scaffolding) | Đánh đổi & Xu hướng lựa chọn |
| :--- | :--- | :--- | :--- | :--- |
| **Tester 1**<br>_(Thành viên 1 facilitate)_<br>Sinh viên CNTT năm 3 | Thao tác nhanh (45s); trả lời dứt khoát 2 câu hỏi; rất thích việc AI "bắt đúng bệnh" ngay lập tức mà không cần tự gõ từ khóa. | Chú ý ngay vào nút cam cảnh báo; nhận xét cây sơ đồ hơi nhiều chữ và phức tạp khi đang bị rối. | Kéo thanh trượt qua cả 3 mức độ sâu; thích nhất Mức 2 (So sánh cũ/mới); làm mini-quiz và rất hào hứng. | **Ưu tiên C cho việc học hàng ngày**, nhưng sẽ **chọn A khi hoàn toàn bế tắc**. Nhận ra sự đánh đổi giữa việc _"giữ mạch đọc nguyên vẹn"_ (C) và _"được AI định hướng khi mất gốc hoàn toàn"_ (A). |
| **Tester 2**<br>_(Thành viên 2 facilitate)_<br>Người chuyển ngành Data | Bấm mở chat ngay; đánh giá câu hỏi của AI điều chỉnh hướng tốt; cảm thấy nhẹ nhõm vì không phải tự tìm tài liệu. | Đọc kỹ đối chiếu lý thuyết; khen bản đồ giúp hiểu logic bài, nhưng thú nhận lúc làm bài tập gấp thì sẽ lười đọc. | Thử bấm từng ký hiệu toán học; nhận xét Mức 2 là vừa vặn nhất; rất thích giao diện inline vì không che lấp bài giảng chính. | **Thích sự kết hợp giữa A và C**. Nhận xét Option B phù hợp để review lại toàn bộ khóa trước kỳ thi hơn là lúc đang kẹt giữa bài. |
| **Tester 3**<br>_(Thành viên 3 facilitate)_<br>Học viên khóa Python online | Ban đầu có tâm lý sợ bị AI "dạy đời" bằng một bài dài; sau khi thấy chỉ có 2 câu trắc nghiệm ngắn thì hoàn thành rất nhanh. | Lúng túng trước các mũi tên sơ đồ; bấm nhầm sang nhánh khác trước khi nhìn thấy nút kiến thức thực sự cần. | Thích việc chọn thẳng vào ký hiệu; kéo Mức 2 xem giải thích rồi đóng lại đọc bài tiếp ngay lập tức. | **Chọn C là giải pháp tiện dụng nhất**. Không muốn mở một cửa sổ chat phụ bên ngoài vì cảm giác như bị gián đoạn và phải thừa nhận mình "kém cỏi". |

---

## 2. Tuyên bố cải tiến nhóm (Group Next Change Statement)

Dựa trên nguyên tắc thiết kế lặp (Iterative Design), chúng tôi rút ra tuyên bố cải tiến cho phiên bản tiếp theo:

> **“Với Hypothesis Problem về việc học viên bị bế tắc cục bộ, ngại quá tải khi ôn lại cả bài và tốn công sức mớm prompt cho AI ngoài, chúng tôi đã thử nghiệm ba cách giải (A, B, C).**
> 
> **Kết quả cho thấy Tester có xu hướng ưu tiên sự liền mạch của Option C (Inline Scaffolding) để không làm đứt gãy dòng đọc bài, nhưng họ vẫn cần cơ chế gợi mở và tự động khoanh vùng lỗ hổng của Option A khi họ rơi vào trạng thái bế tắc hoàn toàn (không biết mình không biết gì).**
> 
> **Vì vậy, ở iteration tiếp theo, chúng tôi sẽ thực hiện các điều chỉnh sau:**
> 
> 1. **Hợp nhất cơ chế chẩn đoán nhanh của Option A trực tiếp vào thanh công cụ Inline của Option C**: Khi người dùng bôi đen một vùng chữ/công thức mà không rõ mình vướng ở đâu, một nút nhỏ _"Chẩn đoán nhanh 2 câu"_ sẽ xuất hiện ngay tại chỗ thay vì mở hẳn một khung chat riêng biệt ở bên phải màn hình.
> 2. **Chuyển Option B (Bản đồ khái niệm) thành tính năng hậu kỳ**: Đặt Bản đồ kiến thức Radar ở cuối bài học dưới dạng _"Tóm tắt các mắt xích đã học"_ để phục vụ mục đích ôn tập (review), thay vì hiển thị song song gây nhiễu nhận thức lúc đang cố gắng đọc bài mới.
> 3. **Bổ sung tính năng Kiểm tra củng cố (Micro-Check)**: Mở rộng tính năng câu hỏi trắc nghiệm mini (1-click) sau mỗi lần AI bóc tách kiến thức. Điều này giúp người học tự tin rằng mình đã thực sự hiểu điểm cốt lõi trước khi tắt popup và quay lại bài giảng chính.”
