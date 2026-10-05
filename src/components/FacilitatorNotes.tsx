import React from 'react';
import { Screen } from '../state';

interface Props {
  screen: Screen;
}

export default function FacilitatorNotes({ screen }: Props) {
  let expected = '';
  let watch = '';
  let doNotExplain = '';
  let header = '';

  if (screen === 'lesson') {
    header = 'Màn 1 (lesson):';
    expected = 'đọc thẻ nhiệm vụ và slide, rồi tự bấm "Tôi chưa hiểu chỗ này" khi khựng ở ý Observability.';
    watch = 'mất bao lâu mới tìm thấy nút; có đọc thẻ nhiệm vụ không; có nhìn sang panel AI trước khi bấm không.';
    doNotExplain = 'nút "Tôi chưa hiểu" sẽ làm gì; AI sẽ hỏi gì.';
  } else if (screen === 'diagnostic') {
    header = 'Màn 2 (diagnostic):';
    expected = 'đọc banner, trả lời Câu 1 và Câu 2 chỉ bằng cách bấm chip (không gõ phím), rồi bấm "Xem kết quả".';
    watch = 'có đọc banner không; ngập ngừng ở câu nào (1 hay 2); có chọn "Mình không chắc" / "Chưa học cái này" không; dấu hiệu cảm thấy bị "kiểm tra" hoặc gián đoạn; có dùng "← Quay lại bài học" không.';
    doNotExplain = 'AI sẽ hỏi gì; vì sao AI hỏi tình huống dữ liệu 3 tuần không cập nhật.';
  } else if (screen === 'result') {
    header = 'Màn 3 (result):';
    expected = 'đọc kết quả, rồi tự chọn quay lại bài, chẩn đoán lại hoặc tự chọn bài ôn.';
    watch = 'có để ý "88%" không; có mở "Vì sao AI kết luận vậy?" không; thời gian đọc thẻ Ôn nhanh 1 phút; có dùng nút "AI đoán sai?" không, chọn chủ đề nào.';
    doNotExplain = 'ý nghĩa con số độ tin cậy; sự tồn tại của nút "AI đoán sai?".';
  } else if (screen === 'returned') {
    header = 'Màn 1′ (returned):';
    expected = '';
    watch = 'tester có nhận ra ý Observability được tô sáng không; có tự giải thích lại được khái niệm Observability để hoàn thành nhiệm vụ không.';
    doNotExplain = 'hỏi sau buổi test (không hỏi trong lúc test): "Giờ bạn hiểu Observability nghĩa là gì?"';
  }

  return (
    <div className="fixed right-0 top-0 bottom-0 w-[460px] bg-[#FFF8F1] border-l-4 border-[#F59E0B] p-6 overflow-y-auto shadow-xl z-50 transform translate-x-full lg:translate-x-0 transition-transform">
      <h2 className="text-[14px] font-bold text-[#D97706] mb-6 uppercase tracking-wider">
        OPTION A — Socratic Diagnostic Chat
      </h2>
      
      <div className="bg-white p-5 rounded-lg border border-[#FDE68A] shadow-sm flex flex-col gap-4">
        <h3 className="font-bold text-[16px] text-[#92400E] border-b border-[#FEF3C7] pb-2">
          {header}
        </h3>
        
        {expected && (
          <div>
            <strong className="text-[13px] uppercase tracking-wide text-[#B45309] block mb-1">We expect the tester to:</strong>
            <p className="text-[14px] text-[#78350F] leading-relaxed">{expected}</p>
          </div>
        )}
        
        {watch && (
          <div>
            <strong className="text-[13px] uppercase tracking-wide text-[#B45309] block mb-1">Watch for:</strong>
            <p className="text-[14px] text-[#78350F] leading-relaxed">{watch}</p>
          </div>
        )}
        
        {doNotExplain && (
          <div>
            <strong className="text-[13px] uppercase tracking-wide text-[#DC2626] block mb-1">{screen === 'returned' ? 'Hỏi sau buổi test:' : 'Do not explain:'}</strong>
            <p className="text-[14px] text-[#991B1B] leading-relaxed">{doNotExplain}</p>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-[12px] text-[#B45309] bg-[#FEF3C7] p-3 rounded opacity-80">
        <em>Note: Panel này chỉ hiển thị khi có `?facilitator=1` trong URL và nằm ngoài khung nhìn của Tester nếu thu hẹp màn hình. Nhấn `Ctrl+Shift+L` để xem log sự kiện trong console.</em>
      </div>
    </div>
  );
}
