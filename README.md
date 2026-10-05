# Track1_Day19_2A202602614

> **Dự án**: AI Tutor — Diagnostic Refresher (Khám phá Solution Space & Thử nghiệm Micro-Prototypes Human–AI)  
> **Học viên**: Ngô Lê Thủy Tiên  
> **Mã học viên**: 2A202602614  
> **Case nghiên cứu**: Case A — AI Tutor: Diagnostic Refresher (Tiếp nối trực tiếp từ Day 17)  
> **Phân công cá nhân**: Chịu trách nhiệm chính **Option A (Socratic Diagnostic Chat)**; đồng thời tham gia thiết kế chung, chuẩn hóa prototype A/B/C và trực tiếp facilitate thử nghiệm với 1 tester ngoài nhóm.

---

## 1. Cấu trúc thư mục bài nộp

```
Track1_Day19_2A202602614_NgoLeThuyTien/
├── README.md                      # Báo cáo tổng quan toàn bộ 6 chặng của bài lab
├── three-option-design-sheet.md   # Bảng thiết kế chi tiết 3 Option (Comparison Contract & Human–AI Decision Table)
├── prototype-link.md              # Hướng dẫn chạy và link bộ micro-prototype A/B/C
├── prototype-feedback-note.md     # Phiên test do chính tác giả facilitate với Tester ngoài nhóm
├── group-feedback-synthesis.md    # Tổng hợp 3 Feedback Notes của nhóm & 1 Group Next Change
├── ai-support-log.md              # Khai báo minh bạch việc sử dụng công cụ AI
├── index.html                     # Mã nguồn Web Micro-prototype chung 70% context cho A/B/C
├── style.css                      # Giao diện styling cho Micro-prototype
└── app.js                         # Logic tương tác của cả 3 cơ chế Human–AI
```

---

## 2. Tóm tắt 6 Chặng triển khai

### Chặng 1 — Tổng hợp Evidence & Chốt Hypothesis Problem

#### 1. Evidence Huddle (Đối chiếu bằng chứng thực tế từ Day 17)

Nhóm đặt 3 Practice Notes cạnh nhau để tách biệt rõ giữa lời nói/hành vi thực tế của User và suy đoán của nhóm:

|         Practice Note          | User đã thực sự làm/nói gì? (Raw Quote / Hành vi)                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Điều nhóm đang diễn giải (Interpretation)                                                                                                                                                                                                                                                           |
| :----------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  **Note 1**<br>_(P1 – 00:33)_  | _"không có đủ thời gian để mình ôn tập lại phải học thêm kiến thức mới nữa, cái kiến thức trước đấy mình không ôn tập thì cũng sẽ quên"_                                                                                                                                                                                                                                                                                                                                                                  | Nguyên nhân chính là **áp lực tiến độ** (học dồn dập kiến thức mới) chứ không hẳn là việc không nhận ra mình hổng chỗ nào.                                                                                                                                                                          |
|      **Note 2**<br>_(P2)_      | • _“Chia bài thành từng bước nhỏ… do quên kiến thức cũ hay chưa hiểu cách áp dụng kiến thức mới”_ (00:08).<br>• Khi bí: mở tìm video, tài liệu trên mạng, hỏi bạn bè/giảng viên, tạm nghỉ vì _“càng cố khi đang quá căng thẳng thì mình càng khó tập trung”_ (00:42).<br>• Hậu quả: _“áp lực và dễ nản”_, _“chậm so với kế hoạch”_ (01:22).                                                                                                                                                               | User có ý thức tự phân tách nguyên nhân, nhưng khi bế tắc thì **hành vi tra cứu rất phân tán** (tự mò video, hỏi nhiều nguồn). Việc không rõ mình kẹt ở đâu gây căng thẳng tâm lý và làm đứt gãy mạch học.                                                                                          |
| **Note 3**<br>_(Interview B1)_ | • _“Ôn nhiều thì dễ bị quá tải, khiến mình không nhớ được hết kiến thức.”_<br>• Khi đọc slide gặp từ khóa khó, B1 dùng ChatGPT: _“mình chỉ không hiểu một vài phần thôi, chứ không thể nào là không hiểu cả bài được.”_<br>• _“Con AI không hiểu được bối cảnh mình đang học hay tình huống của mình nên trả lời khá chung chung. Mình phải mất công lọc thông tin và đặt câu lệnh (prompt) khá kỹ để nó hiểu, việc này rất tốn thời gian.”_<br>• Chatbot hiệu quả hơn tra cứu Google từ quá nhiều nguồn. | Việc cần trợ giúp **chỉ tập trung vào một vài phần cụ thể** trong bài chứ không phải cả bài. Học viên đã chủ động dùng AI ngoài (ChatGPT), nhưng việc **tự chuyển ngữ cảnh, mớm prompt và lọc câu trả lời làm phát sinh nhiều công sức**. Việc ôn quá nhiều và chi tiết cũng gây quá tải nhận thức. |

- **Thảo luận nhanh**:
  - _Hành vi lặp lại_: Tra cứu phân tán hoặc dùng ChatGPT bên ngoài, nhưng gặp rào cản lớn: mất công viết prompt cung cấp bối cảnh và lọc câu trả lời chung chung.
  - _Evidence bất ngờ_: Học viên sợ bị **quá tải kiến thức** (_"chỉ không hiểu một vài phần chứ không thể không hiểu cả bài"_, _"ôn nhiều dễ bị quá tải"_). Họ không cần một bài giảng dài mà cần tháo gỡ đúng điểm kẹt vi mô trong dưới 1 phút.
  - _Điều chưa chứng minh_: Cơ chế nào (hỏi 2 câu Socratic, xem sơ đồ Radar, hay bóc tách Inline) giúp gỡ kẹt tức thời mà không đòi hỏi học viên phải nỗ lực viết prompt?

#### 2. Chốt Hypothesis Problem (Chuẩn cấu trúc 5 thành tố)

> **Khi** đang tự học một bài học hoặc khái niệm chuyên sâu mới, **học viên tự học trực tuyến** gặp khó khăn trong việc **nhanh chóng gỡ điểm nghẽn cục bộ để duy trì mạch bài học** vì **không tự cô lập được phần kiến thức nền tảng nào đang bị thiếu (và ngại bị quá tải nếu phải ôn lại toàn bộ, cũng như tốn quá nhiều công sức giải thích bối cảnh cho các công cụ tra cứu bên ngoài)**, dẫn đến **mất nhiều thời gian loay hoay lọc thông tin, phát sinh cảm giác mệt mỏi, áp lực tiến độ và dễ nản lòng bỏ dở khóa học**.

### Chặng 2 — Chọn ba Solution Options (20 phút)

#### 1. Mở lại Solution Parking Lot (từ Day 17)

Nhóm đọc lại 5 hướng đã park ở Day 17 và kế thừa trực tiếp:

1. _Chatbot chẩn đoán lỗ hổng và giải thích 1-1 ngay tại chỗ_ (AI) $\rightarrow$ Nâng cấp thành **Option A**: Socratic Diagnostic Chat.
2. _Bài mini-test đầu mỗi chương để kiểm tra kiến thức cũ_ (Không AI).
3. _Knowledge graph (bản đồ khái niệm) đính kèm mỗi bài_ (Không AI) $\rightarrow$ Nâng cấp thành **Option B**: Prerequisite Concept Radar.
4. _Highlight thuật ngữ/khái niệm khó, hiện popup định nghĩa ngắn (tooltip)_ (Không AI) $\rightarrow$ Nâng cấp thành **Option C**: Inline Scaffolding Co-pilot.
5. _Nút "Trợ giúp" gợi ý hỏi bạn bè/mentor đang online_ (Không AI).

#### 2. Chọn ba cách giải (Comparison Contract)

**Những thứ PHẢI GIỮ NGUYÊN (70% Common Ground):**
| Thành phần | Quyết định chung cho A / B / C |
| :--- | :--- |
| **Target user** | Học viên tự học trực tuyến các môn kỹ thuật/AI/toán học. |
| **Situation** | Đang tự học bài mới, gặp công thức phức tạp và bị khựng lại vì hổng kiến thức nền. |
| **Task** | Nhanh chóng xác định phần kiến thức nền tảng đang thiếu hụt và gỡ kẹt để tiếp tục học. |
| **Desired outcome** | Hiểu được mắt xích kiến thức bị thiếu trong dưới 1 phút mà không bị quá tải hay đứt mạch học. |
| **Content/data fixture** | Bài giảng: _"Thuật toán Gradient Descent & Chain Rule"_. Điểm kẹt: Công thức $w_{new} = w_{old} - \eta \cdot \frac{\partial L}{\partial w}$. |

**Những thứ ĐƯỢC PHÉP KHÁC (Solution Mechanisms):**
| Thành phần | Option A<br>**Socratic Diagnostic Chat** | Option B<br>**Prerequisite Concept Radar** | Option C<br>**Inline Scaffolding Co-pilot** |
| :--- | :--- | :--- | :--- |
| **Solution mechanism** | **Turn-based Socratic Interview**: AI chủ động hỏi 2 câu ngắn để chẩn đoán và tóm tắt cấp tốc. | **Visual Map Exploration**: Hệ thống trực quan hóa cây phả hệ kiến thức; User tự nhìn bản đồ để định vị chỗ kẹt. | **Inline Deconstruction**: Bóc tách tức thì tại chỗ công thức thành các tầng kiến thức ngầm định qua thanh trượt. |
| **User làm gì?** | Bấm _"Tôi chưa hiểu"_ $\rightarrow$ Chọn đáp án cho 2 câu hỏi $\rightarrow$ Đọc kết luận. | Duyệt cây kiến thức $\rightarrow$ Bấm vào node nghi ngờ $\rightarrow$ Đọc đối chiếu lý thuyết cũ/mới. | Bấm vào ký hiệu công thức gây bế tắc $\rightarrow$ Kéo thanh trượt độ sâu (1, 2, 3) $\rightarrow$ Làm thử câu test mini. |
| **AI làm gì?** | Phân tích câu trả lời, suy luận xác suất lỗ hổng (88%) và sinh thẻ ôn tập cấp tốc. | Phân loại độ rủi ro của các node (_Nền tảng_ vs _Vùng dễ nhầm lẫn ⚠️_) và hiển thị giải thích liên hệ. | Phân giải cấu trúc ký hiệu toán học theo thời gian thực tương ứng với mức độ sâu người dùng chọn. |
| **Trigger** | Nút _"Tôi chưa hiểu đoạn này"_ bên cạnh công thức. | Tab/Menu _"Bản đồ kiến thức tiên quyết"_ ở cạnh bài. | Thao tác bấm/chọn trực tiếp vào các ký hiệu của công thức ($\partial$, $\eta$, $-$). |
| **Trade-off chính** | Được dẫn dắt chính xác, nhưng phải nhường quyền điều khiển cho AI và tạm tách khỏi bài đọc. | Có bức tranh tổng quan, nhưng đòi hỏi nỗ lực nhận thức cao (dễ ngợp nếu không biết bấm node nào). | Giữ mạch đọc hoàn hảo, nhưng giả định user đã khoanh vùng được ký hiệu nào gây bối rối. |

#### Distance Check (Ba câu kiểm tra khoảng cách bắt buộc):

- **A khác B vì:** Option A đặt quyền dẫn dắt vào tay **AI** (AI chủ động đặt câu hỏi chẩn đoán để tìm lỗ hổng cho user), trong khi Option B đặt quyền chủ động hoàn toàn vào tay **User** (User tự nhìn bản đồ phả hệ kiến thức và tự quyết định xem nhánh nào).
- **B khác C vì:** Option B tách kiến thức ra thành một **sơ đồ phả hệ vĩ mô độc lập** (Macro Graph), trong khi Option C **can thiệp vi mô ngay tại dòng chữ/công thức** (Micro Inline) với thanh trượt độ sâu tùy biến.
- **A khác C vì:** Option A là quá trình **hội thoại tương tác hai chiều từng bước** (Turn-based Socratic) tập trung vào việc "bắt bệnh", trong khi Option C là công cụ **co-pilot đồng sáng tạo tại chỗ** (On-demand Deconstruction) tập trung vào việc "mổ xẻ cấu trúc" mà không làm gián đoạn dòng đọc.

#### Spectrum Human–AI:

```
[OPTION B: User-led]           [OPTION C: Co-pilot]          [OPTION A: AI-led Probe]
User tự duyệt bản đồ    ──►    User chọn độ sâu phân rã  ──►   AI đặt câu hỏi chẩn đoán
& tự định vị lỗ hổng           & AI mổ xẻ công thức            & User duyệt kết luận
```

#### GATE 2 — Meaningful options:

- [x] Cả 3 options cùng chung target user, situation, task, desired outcome và content fixture.
- [x] Khác nhau rõ rệt ở cơ chế tương tác và mức độ phân chia quyền tự quyết giữa User và AI.
- [x] Không có option nào là "vật tế thần" (cả 3 đều chạy test-ready trên micro-prototype).

### Chặng 3 — Human–AI Design Pass (30 phút)

Nhóm chi tiết hóa 4 trụ cột tương tác cho cả 3 Option trong **Human–AI Decision Table**:

| Human–AI decision                               | Option A<br>**Socratic Diagnostic Chat**                                                                                                                                                                                                                         | Option B<br>**Prerequisite Concept Radar**                                                                                                                                                                                       | Option C<br>**Inline Scaffolding Co-pilot**                                                                                                                                                                                                                   |
| :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **User làm gì? AI làm gì?**                     | • **User**: Bấm _"Tôi chưa hiểu"_ $\rightarrow$ Chọn đáp án cho 2 câu hỏi $\rightarrow$ Đọc kết quả chẩn đoán và bài ôn 1 phút.<br>• **AI**: Đặt 2 câu hỏi gợi mở $\rightarrow$ Phân tích lựa chọn $\rightarrow$ Sinh thẻ ôn tập cấp tốc đúng lỗ hổng phát hiện. | • **User**: Duyệt cây phả hệ kiến thức $\rightarrow$ Bấm vào node nghi ngờ $\rightarrow$ Đọc thẻ đối chiếu.<br>• **AI**: Trực quan hóa cấu trúc tiên quyết $\rightarrow$ Hiển thị tóm tắt và liên hệ với bài mới khi được click. | • **User**: Bấm vào ký hiệu công thức gây bế tắc $\rightarrow$ Kéo thanh trượt điều chỉnh độ sâu (Mức 1, 2, 3).<br>• **AI**: Bóc tách cấu trúc công thức tức thời $\rightarrow$ Sinh nội dung giải phẫu tương ứng với độ sâu được chọn.                       |
| **AI Act / Ask / Don't Act? Vì sao?**           | **Ask $\rightarrow$ Act**:<br>AI chọn **Ask** (hỏi 2 câu) trước để xác định chính xác chỗ nghẽn, sau đó mới **Act** (sinh bài ôn tập). Vì nếu Act ngay (tự giải thích dài dòng) sẽ gây quá tải nhận thức như phản ánh ở Note 1 & Note 3.                         | **Don't Act (trừ khi User yêu cầu)**:<br>AI giữ trạng thái tĩnh, chờ đợi người dùng click. Vì User cần không gian tự do định vị lỗ hổng (metacognition) mà không bị AI can thiệp làm phiền.                                      | **Act on Request (Co-pilot)**:<br>AI phản ứng tức thì theo từng thao tác kéo trượt của User. Vì User muốn kiểm soát độ sâu bóc tách trực tiếp tại chỗ mà không bị gián đoạn mạch đọc.                                                                         |
| **User hiểu capability/limit bằng gì?**         | • **Capability**: Thông báo rõ ràng trước khi chat: _"AI hỏi 2 câu ngắn (30s) để tìm lỗ hổng"_, tập trung gỡ đúng 1 điểm kẹt.<br>• **Limit**: AI không giải bài hộ hay thay thế bài giảng chính; giới hạn trong mini-refresher 1 phút.                           | • **Capability**: Nhìn thấy toàn bộ phạm vi các mắt xích tiên quyết (Cấp 3 $\rightarrow$ Đại học) trên bản đồ.<br>• **Limit**: Bản đồ chỉ cung cấp đối chiếu, không tự biết người học yếu ở đâu nếu người học không tự click.    | • **Capability**: 3 nấc trên thanh trượt (Nhắc nhanh 30s $\leftrightarrow$ So sánh cũ/mới $\leftrightarrow$ Ví dụ chi tiết) thể hiện rõ biên độ hỗ trợ.<br>• **Limit**: Chỉ bóc tách ký hiệu công thức cụ thể, không giải thích thay văn bản lý thuyết chung. |
| **Evidence/uncertainty được thể hiện thế nào?** | Thể hiện bằng chỉ số xác suất và bằng chứng rõ ràng: _"Phát hiện lỗ hổng: Khái niệm Đạo hàm riêng (Độ tin cậy: 88%)"_ dựa trên 2 câu trả lời vừa chọn.                                                                                                           | Gắn nhãn trạng thái rủi ro trực quan trên các node: _[Nền tảng căn bản]_ vs _[Vùng dễ nhầm lẫn nhất 85% ⚠️]_, giúp user biết nhánh nào có nguy cơ cao nhất.                                                                      | Mã hóa màu sắc tương phản: Ký hiệu mới (xanh lá) phân rã thành các phép toán quen thuộc (cam/xanh lam) kèm nhãn "Phân rã Mức 1/2/3".                                                                                                                          |
| **User kiểm soát và recovery thế nào?**         | • **Kiểm soát**: Tự do chọn đáp án, bấm quay lại bài học bất kỳ lúc nào.<br>• **Recovery**: Có sẵn nút `↺ Chẩn đoán lại từ đầu` và nút `⚠️ AI đoán sai? Tôi tự chọn bài ôn` (User Override để tự chọn chủ đề).                                                   | • **Kiểm soát**: Toàn quyền click chọn hoặc bỏ chọn các node trên cây kiến thức.<br>• **Recovery**: Nút `↺ Đặt lại bản đồ` giúp xóa các lựa chọn đã click; hiển thị danh sách phẳng nếu user không quen nhìn sơ đồ.              | • **Kiểm soát**: Thanh trượt kéo thả tự do để tăng/giảm độ sâu; nút mini-quiz để tự kiểm tra.<br>• **Recovery**: Nút `Trở về mặc định` để đóng phần phân rã và trả lại giao diện nguyên bản của công thức.                                                    |

---

### Chặng 4 — Xây dựng Micro-prototype (80 phút)

- **Kiến trúc Prototype**: Xây dựng trực tiếp bằng Vanilla HTML5, CSS3 và JavaScript hiện đại ([index.html](index.html), [style.css](style.css), [app.js](app.js)).
- **Ngữ cảnh dùng chung (70% Context)**: Khung bên trái hiển thị nguyên vẹn bài giảng _"Thuật toán Gradient Descent & Chain Rule"_ với công thức cập nhật trọng số gây bế tắc:
  $$w_{new} = w_{old} - \eta \cdot \frac{\partial L}{\partial w}$$
- **Phân định 3 Interaction States (Khung bên phải)**:
  - **Tab Option A**: Cửa sổ hội thoại 2 bước (Hỏi $\rightarrow$ Trả lời $\rightarrow$ Thẻ chẩn đoán 88% tin cậy $\rightarrow$ Ôn tập 1 phút $\rightarrow$ User Override).
  - **Tab Option B**: Sơ đồ phân nhánh 2 tầng (Cấp 3 $\rightarrow$ Toán đa biến), nhấp chuột vào từng node để mở thẻ đối chiếu kiến thức cũ/mới.
  - **Tab Option C**: Tương tác trực tiếp trên các ký hiệu của công thức, thanh trượt 3 mức độ sâu (Nhắc nhanh $\leftrightarrow$ So sánh $\leftrightarrow$ Ví dụ) và mini-quiz 1 câu.
- **Cơ chế chuyển đổi (Tab Switcher)**: Tích hợp ngay trên Header, giúp người kiểm thử chuyển đổi nhanh giữa A, B, C trong cùng 1 phiên test.

---

### Chặng 5 — Chuẩn bị Test Prompt & Tiêu chí quan sát (15 phút)

- **Lời mở đầu trung lập (Neutral Briefing)**:
  > _"Cảm ơn bạn đã tham gia. Mình đang nghiên cứu cách người học vượt qua các đoạn kiến thức khó khi tự học trực tuyến. Trước mặt bạn là một bài học mẫu về Gradient Descent. Trong bài có một công thức toán mà nhiều người thường bị khựng lại. Mình có 3 công cụ hỗ trợ khác nhau (Option A, B, C). Bạn hãy trải nghiệm từng công cụ để tìm hiểu xem công thức này đang đòi hỏi kiến thức nền tảng nào và vượt qua chỗ bế tắc đó nhé. Bạn cứ thoải mái thao tác và nói to suy nghĩ trong đầu, không có thao tác nào là sai cả."_
- **Outcome Task**: _"Hãy xác định xem ký hiệu $\frac{\partial L}{\partial w}$ trong công thức đòi hỏi kiến thức nền gì từ trước và làm sao để hiểu được nó."_
- **Bảng tiêu chí quan sát hành vi (Observation Focus)**:
  1. _Thao tác đầu tiên_: Người dùng click vào đâu trước tiên khi nhìn thấy công thức?
  2. _Điểm ngập ngừng / Bối rối_: Họ có đọc câu hỏi chẩn đoán không? Có bị ngợp trước cây sơ đồ không? Có tìm thấy thanh trượt không?
  3. _Mức độ kiên nhẫn_: Họ dành bao nhiêu giây để đọc nội dung giải thích của AI?
  4. _Phản xạ phục hồi (Recovery)_: Khi AI đưa ra kết quả, họ bấm tiếp tục hay tìm cách sửa?
  5. _Đánh đổi_: Họ thích sự nhanh gọn (Inline) hay thích được định hướng từng bước (Socratic)?

---

### Chặng 6 — Kiểm thử chéo & Tổng hợp Next Change (20 phút)

#### 1. Ma trận đối chiếu 3 Tester độc lập

| Tester / Facilitator                                                  | Option A (Socratic Chat)                                                                                 | Option B (Concept Radar)                                                                                           | Option C (Inline Scaffolding)                                                                            | Đánh đổi & Xu hướng lựa chọn                                                                                                                              |
| :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tester 1**<br>_(Thành viên 1 facilitate)_<br>SV CNTT năm 3          | Thao tác 45s; trả lời nhanh 2 câu hỏi; rất thích việc AI "bắt đúng bệnh" không cần gõ từ khóa.           | Chú ý ngay vào nút cam cảnh báo; nhận xét cây sơ đồ hơi nhiều chữ lúc đang bị rối.                                 | Kéo thanh trượt qua cả 3 mức; thích nhất Mức 2 (So sánh cũ/mới); làm mini-quiz và rất hào hứng khi đúng. | **Chọn C cho việc học hàng ngày**, nhưng **chọn A khi hoàn toàn bế tắc**. Đánh đổi giữa việc _"giữ mạch đọc"_ (C) và _"được định hướng khi mất gốc"_ (A). |
| **Tester 2**<br>_(Thành viên 2 facilitate)_<br>Chuyển ngành Data      | Bấm chat ngay; AI điều chỉnh câu hỏi tốt; nhẹ nhõm vì không phải tự tìm tài liệu cũ.                     | Đọc kỹ đối chiếu lý thuyết; khen bản đồ giúp hiểu logic bài, nhưng lúc làm bài tập gấp thì không đủ kiên nhẫn đọc. | Thử bấm từng ký hiệu; nhận xét Mức 2 là vừa vặn nhất; thích inline vì không che bài giảng.               | **Thích kết hợp A và C**. Nhận xét Option B phù hợp để review trước kỳ thi hơn là lúc đang kẹt bài.                                                       |
| **Tester 3**<br>_(Thành viên 3 facilitate)_<br>Học viên Python online | Ban đầu sợ bị AI "dạy đời" bài dài; sau khi thấy chỉ có 2 câu trắc nghiệm ngắn thì hoàn thành rất nhanh. | Lúng túng trước các mũi tên sơ đồ; bấm nhầm sang nhánh khác trước khi thấy nút đạo hàm riêng.                      | Thích việc chọn thẳng vào ký hiệu $\partial$; kéo Mức 2 xem giải thích rồi đóng lại đọc bài ngay.        | **Chọn C là giải pháp tiện nhất**. Không muốn mở cửa sổ chat phụ vì cảm giác như bị gián đoạn và thừa nhận mình "kém cỏi".                                |

#### 2. Group Next Change Statement (Tuyên bố cải tiến nhóm)

Tuân thủ nghiêm ngặt quy định: **Không tuyên bố solution đã validated**, nhóm đúc kết tuyên bố lặp chuẩn mực:

> **“Với Hypothesis Problem này (học viên bế tắc cục bộ, ngại quá tải khi ôn lại cả bài và tốn công giải thích bối cảnh cho AI ngoài), chúng tôi đã thử ba cách giải (A, B, C).**  
> **Tester đã có xu hướng ưu tiên sự liền mạch của Option C (Inline Scaffolding) để không làm đứt gãy dòng đọc bài, nhưng vẫn cần cơ chế gợi mở và khoanh vùng lỗ hổng tự động của Option A khi hoàn toàn bế tắc.**
>
> **Vì vậy, ở iteration tiếp theo, chúng tôi sẽ:**
>
> 1. **Hợp nhất cơ chế chẩn đoán nhanh của Option A trực tiếp vào thanh công cụ Inline của Option C**: Khi người dùng bôi đen một vùng công thức mà không rõ mình vướng ký hiệu nào, một nút nhỏ _"Chẩn đoán nhanh 2 câu"_ sẽ xuất hiện ngay tại chỗ thay vì mở khung chat riêng biệt.
> 2. **Chuyển Option B (Bản đồ khái niệm) thành tính năng hậu kỳ**: Đặt Bản đồ kiến thức ở cuối bài học dưới dạng _"Tóm tắt các mắt xích đã học"_ phục vụ ôn tập, thay vì hiển thị song song gây nhiễu lúc đang đọc bài.
> 3. **Bổ sung tính năng Kiểm tra củng cố (Micro-Check)**: Mở rộng tính năng câu hỏi trắc nghiệm mini 1-click sau mỗi lần bóc tách kiến thức để người học tự tin rằng mình đã thực sự hiểu trước khi quay lại bài giảng chính.”

---

## 3. Đóng góp cá nhân

1. **Khởi tạo và bảo vệ Hypothesis Problem**: Dẫn dắt Chặng 1 dựa trên dữ liệu phỏng vấn sâu Day 17.
2. **Chịu trách nhiệm chính Option A (Socratic Diagnostic Chat)**:
   - Thiết kế luồng câu hỏi chẩn đoán 2 bước, thuật toán phát hiện lỗ hổng và thẻ tóm tắt cấp tốc (Mini-refresher).
   - Thiết kế cơ chế phục hồi quyền kiểm soát: Nút _"Chẩn đoán lại"_ và _"AI đoán sai? Tôi tự chọn bài ôn"_ (User Override).
3. **Hiện thực hóa mã nguồn Micro-prototype**: Xây dựng khung web dùng chung 70% context cho cả 3 thành viên thử nghiệm.
4. **Facilitate buổi test với Tester 1**: Trực tiếp điều phối, quan sát và ghi lại trung thực toàn bộ hành vi, phản ứng và đánh đổi của Tester 1 trong `prototype-feedback-note.md`.
