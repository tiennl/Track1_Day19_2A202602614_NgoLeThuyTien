import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-[300px] shrink-0 bg-[#F3F7FC] border-r border-[#E3E7EE] flex flex-col h-full overflow-y-auto">
      <div className="flex items-center justify-between p-4 border-b border-[#E3E7EE]">
        <h2 className="text-[12px] font-bold tracking-[0.1em] text-[#5B6474]">NỘI DUNG BÀI HỌC</h2>
        <button className="text-[#5B6474] hover:text-[#18212F]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
      </div>
      
      <div className="px-4 py-3 text-[14px] font-semibold flex justify-between items-center text-[#18212F]">
        Slides <span>⌄</span>
      </div>
      
      <div className="px-3 pb-3 border-b border-[#E3E7EE]">
        <div className="bg-[#EAF0F8] border-l-[3px] border-[#C62828] rounded pl-3 pr-2 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <svg className="shrink-0 text-[#1F4E8C]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            <span className="text-[#1F4E8C] font-bold truncate text-[14px]">day10-data-pipel...</span>
          </div>
          <span className="text-[11px] text-[#1F4E8C] font-semibold bg-white px-1.5 py-0.5 rounded shrink-0">Đang học</span>
        </div>
      </div>
      
      <div className="px-4 py-3 text-[14px] font-semibold text-[#18212F]">
        Videos
      </div>
      
      <div className="px-3 flex flex-col gap-1 pb-3 border-b border-[#E3E7EE]">
        {[
          { title: "Tổng quan ngày 10", time: "5 phút" },
          { title: "Video 1: Từ nguồn đố...", time: "19 phút" },
          { title: "Video 2: Ingestion tra...", time: "14 phút" }
        ].map((v, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2 rounded hover:bg-[#EAF0F8] cursor-not-allowed">
            <div className="flex items-center gap-2 text-[14px]">
              <div className="w-5 h-5 rounded bg-[#FDE8E4] flex items-center justify-center text-[#C62828] shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
              </div>
              <span className="truncate text-[#2B3443]">{v.title}</span>
            </div>
            <span className="text-[12px] text-[#5B6474] shrink-0">{v.time}</span>
          </div>
        ))}
      </div>
      
      <div className="px-4 py-3 border-b border-[#E3E7EE] flex items-center justify-between cursor-not-allowed hover:bg-[#EAF0F8]">
        <div className="flex items-center gap-2">
          <svg className="text-[#5B6474]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6 7.69v3H4v-3l6-7.69"/></svg>
          <span className="font-semibold text-[14px]">K4-L3B-Day10: Lab ...</span>
        </div>
        <svg className="text-[#5B6474]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>
      
      <div className="px-4 py-3 flex items-center justify-between cursor-not-allowed hover:bg-[#EAF0F8]">
        <span className="font-semibold text-[14px]">Kiến thức & Quiz cuối Day</span>
        <svg className="text-[#5B6474]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    </aside>
  );
}
