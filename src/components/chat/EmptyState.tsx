import React from 'react';
import { Screen } from '../../state';

interface Props {
  screen: Screen;
}

export default function EmptyState({ screen }: Props) {
  if (screen === 'returned') {
    return (
      <div className="flex flex-col h-full justify-center">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#E3F2EE] text-[#0F7A63] flex items-center justify-center mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 className="font-bold text-[18px]">Bạn vừa ôn: Data observability</h3>
          <p className="text-[#5B6474] text-[15px] leading-relaxed max-w-[80%] mx-auto">
            Mình đã tô sáng ý Observability trên slide. Học tiếp thôi, cần thì cứ gọi mình nhé.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="font-bold text-[20px]">Sáng nay TIÊN định học phần nào?</h3>
        <p className="text-[#5B6474] text-[15px]">
          Đang mở: day10-data-pipeline-observability (2) · trang 4
        </p>
      </div>
    </div>
  );
}
