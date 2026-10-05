# SPEC — Option A: Socratic Diagnostic Chat (micro-prototype demo)

> Dành cho Claude Code. Mục tiêu: dựng lại prototype click được này để demo/user test. Không cần backend, không gọi LLM thật. Toàn bộ nội dung bằng **tiếng Việt**. Prototype bản thiết kế nằm ở Design artifact "AI Tutor – Option A: Socratic Diagnostic Chat (Day 10)"; spec này mô tả đầy đủ để dựng độc lập.

---

## 1. Bối cảnh & mục tiêu

- **Sản phẩm:** AI Tutor – _Diagnostic Refresher_, tích hợp trong app học **vlearn** (học AI thực chiến).
- **Người dùng:** học viên tự học online, bị kẹt ở một điểm nhỏ trong bài, không biết mình thiếu kiến thức nền nào. Sợ quá tải nếu phải ôn cả bài; ngại viết prompt dài cho ChatGPT.
- **Mục tiêu trải nghiệm:** gỡ đúng chỗ kẹt trong ~1 phút rồi quay lại bài.
- **Option A:** AI hỏi **2 câu chẩn đoán** dạng chọn (không gõ phím) → kết luận lỗ hổng → user tự quyết định bước tiếp theo.
- **Nguyên tắc:** tối giản, sạch, nhiều khoảng trắng, giọng thân thiện, không phán xét, không làm người học thấy mình "kém". Giữ nguyên khung giao diện vlearn; **chỉ panel chatbox bên phải là phần thiết kế mới**.

## 2. Tech stack đề xuất

- **Vite + React + TypeScript**, styling bằng **Tailwind CSS** (hoặc CSS modules, tuỳ chọn). Không router: dùng một state machine `screen`.
- Font: **Be Vietnam Pro** (Google Fonts, weight 400/500/600/700).
- Không backend. Độ trễ "AI đang phân tích…" giả lập bằng `setTimeout(1600ms)`.
- Desktop-first, thiết kế ở **1440px** rộng. Không cần responsive mobile (chỉ cần không vỡ ở ≥1280px).
- Chạy: `npm run dev`. Build tĩnh để demo: `npm run build`.

## 3. Cấu trúc thư mục gợi ý

```
src/
  main.tsx
  App.tsx                 // state machine + layout
  state.ts                // useReducer: screen, chat, result
  data.ts                 // toàn bộ copy + topics (mục 8)
  track.ts                // ghi log sự kiện (mục 10)
  components/
    Header.tsx
    Sidebar.tsx
    LessonMain.tsx        // thẻ nhiệm vụ + slide + nút + nav
    SlideCard.tsx
    ChatPanel.tsx         // khung panel (head, body, foot)
    chat/
      EmptyState.tsx      // Màn 1 & Màn 1′
      DiagnosticChat.tsx  // Màn 2
      ResultView.tsx      // Màn 3
      ReviewPicker.tsx
    FacilitatorNotes.tsx  // sticky notes, chỉ hiện khi ?facilitator=1
```

## 4. Layout chung (giữ ở cả 3 màn)

Toàn trang: cột dọc `Header` + hàng ngang 3 vùng. Nền trắng.

```
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├───────────┬──────────────────────────────┬───────────────────┤
│ Sidebar   │ Main (flex: 1)               │ Panel Trợ giảng AI│
│ 300px     │ thẻ nhiệm vụ, slide, nav     │ 440px             │
└───────────┴──────────────────────────────┴───────────────────┘
```

- Bài giảng (slide) ở Main **luôn hiển thị, không bị panel che** ở mọi màn.
- Panel luôn mở. Chiều cao panel kéo giãn theo trang; nội dung panel cuộn nếu dài.
- Sidebar 300px, nền `#F3F7FC`, viền phải `#E3E7EE`. Panel 440px, viền trái `#E3E7EE`.

### 4.1 Header (giống vlearn)

Trái: mũi tên quay lại · tiêu đề **"Ngày 10 · Day10-data-pipeline-observability"** · chip nhỏ **"Option A"** (nền `#F3EFFC`, chữ `#5B3AA8`).

Phải (theo thứ tự): toggle ngôn ngữ `EN | VI` (VI nền đỏ `#C62828`, chữ trắng) · "1/15 hoạt động" + thanh tiến độ 120px (fill ~7%, `#1F4E8C`) · nút **"✦ Đặt câu hỏi với AI"** (nền `#EAF0F8`, viền `#B9C7DC`, chữ `#1F4E8C`; **inert**) · nút **"↺ Về bài học ban đầu"** (viền `#D5DCE6`, reset về Màn 1) · "Gửi yêu cầu" (inert) · avatar tròn "N" (`#E6EEF8` / `#1F4E8C`).

Các nút inert không cần hành vi.

### 4.2 Sidebar "NỘI DUNG BÀI HỌC" (giống vlearn)

- Tiêu đề "NỘI DUNG BÀI HỌC" (letter-spacing 0.1em) + icon X.
- Dropdown giả "Slides ⌄".
- Nhóm **Slides**: item đang học `day10-data-pipeline-observability` — nền `#EAF0F8`, viền trái đỏ 3px `#C62828`, chữ `#1F4E8C` đậm, nhãn phải "Đang học".
- Nhóm **Videos**: "Tổng quan ngày 10 — 5 phút", "Video 1: Từ nguồn đến agent — 19 phút", "Video 2: Ingestion transform — 14 phút". Icon video đỏ trên nền `#FDE8E4`.
- Hàng "K4-L3B-Day10: Lab Technical" (icon bình thí nghiệm, chevron phải, nền `#E6EEF8`, viền trái xanh `#1F4E8C`).
- Hàng "Kiến thức & Quiz cuối Day" (chevron phải).
- Tên dài cắt bằng ellipsis. Tất cả item **inert**.

### 4.3 Main (vùng bài giảng)

Cột dọc, padding 24px 28px, gap 16px:

1. **Thẻ nhiệm vụ** (nền `#EAF0F8`, bo 14px, padding 16/20, icon đích ngắm xanh):
   > **Nhiệm vụ:** Hãy xác định xem khái niệm Observability trên slide này đòi hỏi kiến thức nền gì từ trước và làm sao để hiểu được nó.
2. **Slide card** (xem 4.4).
3. **Hàng nút "Tôi chưa hiểu chỗ này"** ngay dưới slide (xem 5.1).
4. Thanh công cụ slide giả (chỉ trang trí): chip "100%", "4 / 138", "Sổ ghi chú" căn phải.
5. Dòng "Nội dung này có hữu ích không?" + 2 icon like/dislike (inert).
6. Đường kẻ, rồi 2 nút: "‹ Hoạt động trước" (xám) và "Đi tới hoạt động tiếp theo ›" (nền `#1B4F9C`, chữ trắng). Cả hai inert.

### 4.4 Slide card (nội dung mẫu lấy từ bài thật)

Khung viền `#C9D3E3`, bo 6px. Thanh tiêu đề nền `#2F4F86`, chữ trắng 19px đậm: **"Tại Sao Data Pipeline Là Nền Tảng Của Mọi AI Product?"**

Thân (padding 28/28/20), 2 cột (flex-wrap; trái flex 1.5, phải flex 1):

**Cột trái — 4 bullet** (marker vuông `#2F4F86` 7px, chữ 16px, line-height 1.55):

1. Một agent RAG xuất sắc vẫn **trả lời sai** nếu vector store được nạp data bẩn hoặc data cũ
2. **Garbage in → garbage out**: chất lượng output bị chặn trên bởi chất lượng input data
3. Data work bị **đánh giá thấp một cách hệ thống** — Sambasivan et al. (Google Research, CHI 2021) gọi đây là _data cascades_: lỗi data ở thượng nguồn nhân lên thành hỏng hóc ở hạ nguồn
4. **Observability** = cơ chế phát hiện data sai **trước khi user phản nàn** ← _đây là "điểm kẹt" mục tiêu, có thể tô sáng (xem 5.2, 5.4)_

**Cột phải — ô callout** (viền trái 3px `#2F4F86`, nền `#EEF2F9`): tiêu đề **"Con số bạn sẽ nghe rất nhiều"** (`#2F4F86`, đậm); trích dẫn nghiêng "80% thời gian data science là làm sạch dữ liệu"; dòng: "Con số này **không đáng tin**. Ta sẽ mổ xẻ nó ở §15 — và dùng nó để học cách kiểm chứng một trích dẫn."

**Footer slide** (nền `#3D5A8F`, chữ trắng 11px, 3 cụm): "Giảng viên (VinUni)" · "AICB · Data Pipeline" · "2026 2 / 115".

> Ghi chú: bullet 4 dùng chung một component `ObservabilityBullet` nhận prop `highlight: 'none' | 'dashed' | 'yellow'`.

## 5. Các màn hình & state machine

```
type Screen = 'lesson' | 'diagnostic' | 'result' | 'returned';
// 'lesson'    = Màn 1
// 'diagnostic'= Màn 2
// 'result'    = Màn 3
// 'returned'  = Màn 1′ (về bài sau khi bấm "Hiểu rồi")
```

Chuyển màn:

| Từ                | Sự kiện                                                                | Đến                                     |
| ----------------- | ---------------------------------------------------------------------- | --------------------------------------- |
| lesson / returned | bấm "Tôi chưa hiểu chỗ này"                                            | diagnostic (reset chat về Câu 1)        |
| diagnostic        | chọn chip Câu 1 → chọn chip Câu 2 → 1.6s phân tích → bấm "Xem kết quả" | result                                  |
| diagnostic        | bấm "← Quay lại bài học"                                               | lesson                                  |
| result            | "✅ Hiểu rồi, quay lại bài"                                            | returned                                |
| result            | "↺ Chẩn đoán lại"                                                      | diagnostic (reset về Câu 1)             |
| result            | "⚠️ AI đoán sai? Tôi tự chọn bài ôn"                                   | mở/đóng danh sách chủ đề (vẫn ở result) |
| mọi màn           | Header "↺ Về bài học ban đầu"                                          | lesson (reset toàn bộ state)            |
| mọi màn           | "+ Chat mới" trong panel                                               | diagnostic (reset chat)                 |

State cần giữ:

```
screen: Screen
chat: { step: 'q1'|'q2'|'analyzing'|'done'; a1: string|null; a2: string|null }
result: { whyOpen: boolean; pickerOpen: boolean; pickedTopicId: string|null }
```

### 5.1 MÀN 1 — Bài học (common context)

- Main như mục 4.3; bullet 4 **không** tô sáng.
- Dưới slide: nút **"🤔 Tôi chưa hiểu chỗ này"** — dạng pill, viền 1.5px `#6B46C1`, chữ `#5B3AA8`, nền trắng, min-height 46px (hover nền `#F3EFFC`). Dùng icon SVG dấu hỏi trong vòng tròn thay cho emoji nếu muốn nhất quán.
- Panel phải: **trạng thái trống**, căn giữa dọc: dòng đậm 20px **"Sáng nay TIÊN định học phần nào?"**, dòng nhạt 15px "Đang mở: day10-data-pipeline-observability (2) · trang 4". Footer panel có ô nhập (disabled, placeholder "Hỏi bất cứ điều gì…") + dòng nhỏ "Trợ giảng AI có thể sai — hãy đối chiếu với bài giảng. Đừng gửi thông tin cá nhân nhạy cảm."

### 5.2 MÀN 2 — AI hỏi 2 câu chẩn đoán (critical interaction)

Thay đổi so với Màn 1:

- Bullet 4 có **viền nét đứt tím** (outline 2px dashed `#8B6BD6`, offset 3px, nền `#F6F0FF`, bo 6px).
- Nút "Tôi chưa hiểu chỗ này" chuyển sang **trạng thái đang chọn** (nền đặc `#6B46C1`, chữ trắng, không click).

Panel chat, từ trên xuống:

1. **Header panel:** icon sao + "Trợ giảng AI" · bên phải: "+ Chat mới", icon lịch sử, icon bố cục, icon đóng (X).
2. **Banner** (nền `#F1F5F9`, viền `#DDE4ED`, bo 12px, icon info xanh): "AI sẽ hỏi bạn **2 câu ngắn (~30 giây)** để tìm đúng chỗ đang hổng. AI không giải bài hộ và không thay thế bài giảng."
3. **Chỉ báo tiến trình:** nhãn "Câu 1/2" → "Câu 2/2" → "Đã xong 2/2" (màu `#5B3AA8`, 13px đậm) + thanh 2 đoạn (đoạn 1 luôn tím `#6B46C1`; đoạn 2 xám `#DCE3EE` ở Câu 1, tím từ Câu 2).
4. **Vùng hội thoại** (gap 14px):
   - Bong bóng AI A: "Nhiều người cũng khựng ở slide này đấy, không sao cả."
   - Bong bóng AI B (kèm nhãn nhỏ "Câu 1/2"): "Khi đọc slide này, phần nào khiến bạn khựng lại?"
   - **4 chip Câu 1** (xem 8.1). Bấm 1 chip → chip biến mất, hiện **bong bóng user** (căn phải) chứa nhãn chip, rồi hiện Câu 2.
   - Bong bóng AI C: "Cảm ơn bạn! Thêm một câu nhanh nữa thôi, không tính điểm đâu."
   - Bong bóng AI D (nhãn "Câu 2/2"): "Pipeline chạy xanh, không báo lỗi, nhưng dữ liệu nạp vào vector store đã 3 tuần không được cập nhật. Cách nào phát hiện sớm nhất?"
   - **4 chip Câu 2** (xem 8.1). Bấm 1 chip → chip biến mất, hiện bong bóng user.
   - **Trạng thái chờ** 1600ms: bong bóng AI có 3 chấm nhấp nháy + "AI đang phân tích…".
   - Sau đó: bong bóng AI "Xong rồi! Mình đã thấy chỗ có thể đang làm bạn khựng." + nút **"Xem kết quả →"** (nền `#1B4F9C`) → sang Màn 3.
5. **Footer panel:** link **"← Quay lại bài học"** luôn hiển thị (về Màn 1) · ô nhập disabled, placeholder "Chỉ cần bấm chọn, không cần gõ" · dòng cảnh báo nhỏ như Màn 1.

**Ràng buộc:** user chỉ bấm chọn, **không có ô gõ hoạt động**. Mỗi câu chỉ chọn một lần (không đổi đáp án sau khi chọn; muốn làm lại phải "Chẩn đoán lại"/"Chat mới").

### 5.3 MÀN 3 — Kết quả & quyết định của user

Main giữ nguyên như Màn 2 (bullet 4 viền đứt). Panel hiển thị (cuộn nếu dài), từ trên xuống:

1. Bong bóng AI: "Xong rồi! Đây là chỗ có thể đang làm bạn khựng. Không có đúng sai ở đây, bạn là người quyết định bước tiếp theo."
2. **Thẻ kết quả** (nền `#FFF5EB`, viền `#F2C79A`, bo 14px):
   - Nhãn nhỏ viết hoa "KẾT QUẢ CHẨN ĐOÁN" (`#9A4500`).
   - Tiêu đề 20px đậm: **"Phát hiện lỗ hổng: Data observability"**.
   - Hàng "Độ tin cậy" … **88%** (chữ xanh lá `#0F6A56`) + thanh 8px (track `#D6EDE6`, fill `#0F7A63`, width 88%, `role="img"` + `aria-label`).
   - Mục có thể mở/thu **"Vì sao AI kết luận vậy?"** (mặc định **thu gọn**, chevron xoay 180° khi mở, `aria-expanded`). Nội dung khi mở:
     > Bạn chọn "Observability khác monitoring ở đâu?" và trả lời "Đọc error log" → có thể bạn đang coi pipeline "chạy không lỗi" là "dữ liệu đúng".
3. **Thẻ "⏱ Ôn nhanh 1 phút"** (nền trắng, viền `#D5DCE6`): tiêu đề + **tag** bên phải ("AI gợi ý": nền `#F3EFFC`/chữ `#5B3AA8`; "Do bạn chọn": nền `#1F4E8C`/chữ trắng) · tên chủ đề · **3 dòng đánh số** (số trong vòng tròn nền `#EAF0F8`) · dòng nối về bài (nền `#EAF0F8`, icon mũi tên). Mặc định hiển thị chủ đề **"Data observability"** (xem 8.2).
4. **3 nút quyết định** (user tự quyết):
   - **"✅ Hiểu rồi, quay lại bài"** — nút chính, full width, nền `#1B4F9C`, chữ trắng → Màn 1′.
   - **"↺ Chẩn đoán lại"** — nút phụ viền xám → Câu 1 (reset chat).
   - **"⚠️ AI đoán sai? Tôi tự chọn bài ôn"** — nút phụ viền xám, toggle danh sách chủ đề (`aria-expanded`).
5. **Danh sách chủ đề** (chỉ hiện khi mở): tiêu đề "Bạn muốn ôn chủ đề nào?", 5 nút (xem 8.2). Chọn 1 chủ đề → đóng danh sách, thẻ "Ôn nhanh 1 phút" đổi nội dung sang chủ đề đó, tag chuyển thành **"Do bạn chọn"**; chủ đề đang xem có hint "Đang xem" và viền xanh trong danh sách. Có thể mở lại và chọn chủ đề khác.
6. Footer panel: ô nhập disabled, placeholder "Bấm chọn một lựa chọn ở trên…".

### 5.4 MÀN 1′ — Quay lại bài (sau "Hiểu rồi, quay lại bài")

- Main như Màn 1 nhưng bullet 4 **tô sáng vàng nhạt** (nền `#FFF1C2`, ring 3px `#F2C94C`, bo 6px) và hiện thêm pill ghi chú cạnh nút "Tôi chưa hiểu": "Observability: giám sát chất lượng dữ liệu, không chỉ việc pipeline có chạy" (nền `#FFF8E1`, chữ `#5C4300`).
- Nút "Tôi chưa hiểu chỗ này" trở lại dạng click được (bắt đầu lượt chẩn đoán mới).
- Panel: icon check xanh trong vòng tròn `#E3F2EE`, dòng đậm "Bạn vừa ôn: Data observability" (đổi theo chủ đề đã xem), dòng nhạt "Mình đã tô sáng ý Observability trên slide. Học tiếp thôi, cần thì cứ gọi mình nhé."

## 6. Design tokens

| Vai trò                                  | Giá trị                                                                                                                                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Chữ chính                                | `#18212F` (phụ `#2B3443`, nhạt `#5B6474`, placeholder `#7B8494`)                                                                        |
| Viền chung                               | `#E3E7EE` / `#D5DCE6`                                                                                                                   |
| Xanh chính (nút, link)                   | `#1B4F9C` (hover `#173D6E`), `#1F4E8C`                                                                                                  |
| Nền xanh nhạt (nhiệm vụ, sidebar active) | `#EAF0F8`, sidebar `#F3F7FC`                                                                                                            |
| **Tin nhắn AI**                          | nền `#F3EFFC`, viền `#E4DBF7`, chữ `#18212F`, avatar tròn `#6B46C1`, nhãn `#5B3AA8`                                                     |
| **Lựa chọn của user**                    | chip: nền trắng, viền 1.5px `#B9C7DC`, chữ `#1F4E8C` (hover nền `#EAF0F8`, viền `#1F4E8C`); bong bóng đã chọn: nền `#1F4E8C`, chữ trắng |
| **Thẻ kết quả**                          | nền `#FFF5EB`, viền `#F2C79A`, nhãn `#9A4500`, link `#7A3A00`                                                                           |
| **Độ tin cậy**                           | track `#D6EDE6`, fill `#0F7A63`, số `#0F6A56`                                                                                           |
| Slide                                    | title bar `#2F4F86`, footer `#3D5A8F`, callout `#EEF2F9`                                                                                |
| Tô sáng điểm kẹt                         | Màn 2/3: dashed `#8B6BD6` + nền `#F6F0FF`; Màn 1′: nền `#FFF1C2` + ring `#F2C94C`                                                       |

Bốn nhóm màu **AI (tím) / user (xanh dương) / kết quả (cam nhạt) / tin cậy (xanh lá)** phải phân biệt rõ, không dùng chung.

Typography: Be Vietnam Pro. Tiêu đề header 18/600; thân 15–16px, line-height 1.55; bong bóng chat 15px; chip 14/500; nhãn nhỏ 12–13px. Bo góc: card 14–16px, bong bóng 14px (góc đuôi 4px), chip pill 999px, nút 10px. **Touch target ≥ 44px** cho mọi nút/chip.

Bong bóng AI: bo `4px 14px 14px 14px`, tối đa 88% bề rộng, avatar 28px bên trái. Bong bóng user: bo `14px 4px 14px 14px`, căn phải, tối đa 80%.

## 7. Giọng điệu (copy guideline)

Thân thiện, không phán xét, không "kiểm tra". Dùng "mình/bạn". Có câu trấn an ("Nhiều người cũng khựng ở slide này đấy, không sao cả", "không tính điểm đâu", "Không có đúng sai ở đây"). Không dùng từ "sai", "kém", "thiếu", "yếu" hướng vào người học; dùng "có thể đang làm bạn khựng", "chỗ chưa quen".

## 8. Data mẫu (đặt trong `data.ts`)

### 8.1 Câu hỏi chẩn đoán

```ts
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
```

**Kết quả cố định (không cần logic chấm điểm thật):** mọi tổ hợp đáp án đều ra cùng một kết luận — "Data observability", 88%. Câu "Vì sao AI kết luận vậy?" có thể nội suy từ 2 đáp án đã chọn:
`Bạn chọn "${a1}" và trả lời "${a2}" → có thể bạn đang coi pipeline "chạy không lỗi" là "dữ liệu đúng".`
(Mặc định khi chưa có đáp án thì dùng bản cố định ở 5.3.)

### 8.2 Chủ đề ôn nhanh (5 chủ đề)

Mỗi chủ đề: `id`, `name`, `lines[3]`, `bridge`. Mặc định hiển thị `obs`.

```ts
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
    name: "Data observability", // chủ đề AI gợi ý (mặc định)
    lines: [
      'Monitoring hỏi "pipeline có chạy không?"; data observability hỏi "dữ liệu ra có đúng không?".',
      "Tín hiệu chính: freshness (độ tươi), volume (số lượng), schema, chất lượng giá trị.",
      "Ví dụ: pipeline xanh nhưng bảng 3 tuần không cập nhật → freshness check báo trước khi agent trả lời sai.",
    ],
    bridge: "Vậy observability = phát hiện data sai trước khi user phản nàn.",
  },
];
```

Thứ tự hiển thị trong danh sách chọn: đúng như trên (pipeline, gigo, cascades, vectorstore, obs).

## 9. Hành vi chi tiết & trạng thái

- **Chip:** hover đổi nền/viền; focus ring rõ; là `<button type="button">`. Không cho chọn lại sau khi đã chọn.
- **Analyzing:** 3 chấm opacity nhấp nháy (animation `blink 1.2s`, trễ lệch 0.2s/0.4s). Cleanup timeout khi unmount hoặc khi reset.
- **Reset** ("Chẩn đoán lại", "Chat mới", "Về bài học ban đầu"): xoá `chat`, đóng `why`/`picker`, bỏ `pickedTopicId` (chỉ riêng "Về bài học ban đầu" mới về `lesson`).
- **Cuộn:** khi có tin nhắn mới trong panel, tự cuộn xuống cuối vùng hội thoại.
- **Truy cập:** dùng `<button>`/`<a>` thật; icon-only có `aria-label`; chữ ≥ 4.5:1; không phân biệt thông tin chỉ bằng màu.

## 10. Ghi log sự kiện (phục vụ user test)

Hàm `track(name, payload?)` ghi `console.info` + đẩy vào `window.__events` kèm `t = performance.now()`. Sự kiện cần có:

`help_click`, `banner_view` (hiển thị Màn 2), `q1_answer {value, ms_since_q1_shown}`, `q2_answer {value, ms_since_q2_shown}`, `analyzing_start/end`, `result_view`, `why_toggle {open}`, `review_dwell {ms}` (từ lúc thấy thẻ ôn tới khi bấm quyết định), `decision {type: 'return'|'rediagnose'|'pick_topic'}`, `topic_picked {id}`, `back_to_lesson_click`, `reset_click`.

Nút ẩn `Ctrl+Shift+L` (hoặc `?debug=1`) có thể in `window.__events` ra bảng để facilitator xem.

## 11. Facilitator notes (annotation — **ngoài giao diện tester thấy**)

Chỉ hiển thị khi URL có `?facilitator=1`: render 4 sticky note màu cam ở **ngoài khung app** (dải bên phải trang, rộng 460px, trang cuộn ngang nếu cần) — mỗi note gắn với một màn, và đổi nội dung theo `screen` hiện tại. Khi không có `?facilitator=1`, **không render gì cả** (không được lộ trong DOM tester thấy).

Nội dung chung cho mọi note, tiêu đề: **OPTION A — Socratic Diagnostic Chat**

- **Màn 1 (lesson):**
  - _We expect the tester to:_ đọc thẻ nhiệm vụ và slide, rồi tự bấm "Tôi chưa hiểu chỗ này" khi khựng ở ý Observability.
  - _Watch for:_ mất bao lâu mới tìm thấy nút; có đọc thẻ nhiệm vụ không; có nhìn sang panel AI trước khi bấm không.
  - _Do not explain:_ nút "Tôi chưa hiểu" sẽ làm gì; AI sẽ hỏi gì.
- **Màn 2 (diagnostic):**
  - _We expect:_ đọc banner, trả lời Câu 1 và Câu 2 chỉ bằng cách bấm chip (không gõ phím), rồi bấm "Xem kết quả".
  - _Watch for:_ có đọc banner không; ngập ngừng ở câu nào (1 hay 2); có chọn "Mình không chắc" / "Chưa học cái này" không; dấu hiệu cảm thấy bị "kiểm tra" hoặc gián đoạn; có dùng "← Quay lại bài học" không.
  - _Do not explain:_ AI sẽ hỏi gì; vì sao AI hỏi tình huống dữ liệu 3 tuần không cập nhật.
- **Màn 3 (result):**
  - _We expect:_ đọc kết quả, rồi tự chọn quay lại bài, chẩn đoán lại hoặc tự chọn bài ôn.
  - _Watch for:_ có để ý "88%" không; có mở "Vì sao AI kết luận vậy?" không; thời gian đọc thẻ Ôn nhanh 1 phút; có dùng nút "AI đoán sai?" không, chọn chủ đề nào.
  - _Do not explain:_ ý nghĩa con số độ tin cậy; sự tồn tại của nút "AI đoán sai?".
- **Màn 1′ (returned):**
  - _Watch for:_ tester có nhận ra ý Observability được tô sáng không; có tự giải thích lại được khái niệm Observability để hoàn thành nhiệm vụ không.
  - _Hỏi sau buổi test (không hỏi trong lúc test):_ "Giờ bạn hiểu Observability nghĩa là gì?"

## 12. Ngoài phạm vi (không làm)

Không gọi LLM thật, không chấm điểm động, không lưu dữ liệu người dùng, không responsive mobile, không làm các Option B/C (nhưng giữ **khung chung** — Header, Sidebar, LessonMain, ChatPanel — tách component để Option B/C tái dùng, chỉ thay phần `chat/`), không làm hoạt động thật cho các nút inert.

## 13. Tiêu chí hoàn thành (acceptance checklist)

- [ ] Flow chạy trọn vẹn: Màn 1 → 2 (2 câu) → 3 → (Hiểu rồi → 1′ | Chẩn đoán lại → 2 | AI đoán sai → chọn chủ đề), không lỗi console.
- [ ] Slide bên trái luôn nhìn thấy ở mọi màn, không bị panel che; thẻ nhiệm vụ luôn ở đầu Main.
- [ ] Panel Màn 2 có đủ: banner, chỉ báo Câu 1/2 → 2/2, chip, bong bóng user sau khi chọn, "AI đang phân tích…", link "← Quay lại bài học" luôn thấy.
- [ ] Màn 3 có đủ: "Phát hiện lỗ hổng: Data observability", thanh 88%, mục "Vì sao AI kết luận vậy?" mở/thu, thẻ Ôn nhanh 1 phút (3 dòng + dòng nối), 3 nút, danh sách 5 chủ đề với nhãn "Do bạn chọn".
- [ ] Màn 1′: ý Observability tô sáng vàng nhạt.
- [ ] 4 nhóm màu (AI / user / kết quả / tin cậy) phân biệt rõ.
- [ ] Mọi nút/chip ≥ 44px, dùng phần tử `<button>`/`<a>` thật.
- [ ] Facilitator notes chỉ xuất hiện khi `?facilitator=1` và nằm ngoài khung app.
- [ ] Toàn bộ copy bằng tiếng Việt, đúng nội dung trong spec.
