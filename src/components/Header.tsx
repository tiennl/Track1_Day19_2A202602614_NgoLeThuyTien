import React from 'react';
import { Action } from '../state';
import { track } from '../track';

interface Props {
  dispatch: React.Dispatch<Action>;
}

export default function Header({ dispatch }: Props) {
  return (
    <header className="h-14 border-b border-[#E3E7EE] flex items-center justify-between px-4 shrink-0 bg-white z-10">
      <div className="flex items-center gap-3">
        <button className="text-[#5B6474] hover:text-[#18212F] p-1" aria-label="Quay lại">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <h1 className="font-semibold text-[15px]">Ngày 10 · Day10-data-pipeline-observability</h1>
        <span className="px-2 py-0.5 bg-[#F3EFFC] text-[#5B3AA8] text-[12px] font-semibold rounded-full">Option A</span>
      </div>
      
      <div className="flex items-center gap-4 text-[14px]">
        <div className="flex items-center bg-[#F1F5F9] rounded overflow-hidden text-[12px] font-semibold">
          <div className="px-2 py-1 text-[#5B6474]">EN</div>
          <div className="px-2 py-1 bg-[#C62828] text-white">VI</div>
        </div>
        
        <div className="flex items-center gap-2 text-[#5B6474]">
          <span className="text-[13px] font-medium">1/15 hoạt động</span>
          <div className="w-[120px] h-1.5 bg-[#EAF0F8] rounded-full overflow-hidden">
            <div className="h-full bg-[#1F4E8C] w-[7%]"></div>
          </div>
        </div>
        
        <button className="px-3 py-1.5 bg-[#EAF0F8] border border-[#B9C7DC] text-[#1F4E8C] font-medium rounded opacity-60 cursor-not-allowed flex items-center gap-1.5" disabled>
          <span>✦</span> Đặt câu hỏi với AI
        </button>
        
        <button 
          className="px-3 py-1.5 border border-[#D5DCE6] text-[#18212F] font-medium rounded hover:bg-gray-50 flex items-center gap-1.5"
          onClick={() => {
            track('reset_click');
            dispatch({ type: 'RESET_ALL' });
          }}
        >
          <span>↺</span> Về bài học ban đầu
        </button>
        
        <button className="text-[#5B6474] font-medium opacity-60 cursor-not-allowed" disabled>
          Gửi yêu cầu
        </button>
        
        <div className="w-8 h-8 rounded-full bg-[#E6EEF8] text-[#1F4E8C] flex items-center justify-center font-bold text-[14px]">
          N
        </div>
      </div>
    </header>
  );
}
