import React from 'react';
import { AppState, Action } from '../state';
import { track } from '../track';
import SlideCard from './SlideCard';

interface Props {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export default function LessonMain({ state, dispatch }: Props) {
  const isReturned = state.screen === 'returned';
  const isDiagnostic = state.screen === 'diagnostic' || state.screen === 'result';

  return (
    <main className="flex-1 bg-white overflow-y-auto px-[28px] py-[24px] flex flex-col gap-4">
      <div className="bg-[#EAF0F8] rounded-[14px] p-4 flex gap-3 items-start text-[15px]">
        <div className="w-5 h-5 mt-0.5 rounded-full bg-[#1F4E8C] flex items-center justify-center shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <p><strong>Nhiệm vụ:</strong> Hãy xác định xem khái niệm Observability trên slide này đòi hỏi kiến thức nền gì từ trước và làm sao để hiểu được nó.</p>
      </div>

      <SlideCard screen={state.screen} />

      <div className="flex items-center gap-3 mt-1">
        <button
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold border-[1.5px] min-h-[46px] transition-colors ${
            isDiagnostic
              ? 'bg-[#6B46C1] text-white border-[#6B46C1] cursor-default'
              : 'bg-white border-[#6B46C1] text-[#5B3AA8] hover:bg-[#F3EFFC]'
          }`}
          onClick={() => {
            if (!isDiagnostic) {
              track('help_click');
              dispatch({ type: 'START_DIAGNOSTIC' });
            }
          }}
          disabled={isDiagnostic}
        >
          <span className="w-5 h-5 rounded-full border-[1.5px] border-current flex items-center justify-center text-[14px]">?</span>
          Tôi chưa hiểu chỗ này
        </button>
        
        {isReturned && (
          <div className="bg-[#FFF8E1] text-[#5C4300] px-4 py-2.5 rounded-full text-[14px] font-medium border border-[#F2C94C]">
            Observability: giám sát chất lượng dữ liệu, không chỉ việc pipeline có chạy
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[13px] text-[#5B6474] mt-2">
        <div className="flex gap-2">
          <span className="bg-gray-100 px-2 py-1 rounded font-medium text-gray-700">100%</span>
          <span className="py-1">4 / 138</span>
        </div>
        <div className="font-medium cursor-not-allowed">Sổ ghi chú</div>
      </div>

      <div className="flex items-center gap-3 text-[14px] text-[#5B6474] font-medium mt-4">
        Nội dung này có hữu ích không?
        <button className="p-1 hover:text-[#18212F]" disabled><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg></button>
        <button className="p-1 hover:text-[#18212F]" disabled><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg></button>
      </div>

      <hr className="border-[#E3E7EE] my-4" />

      <div className="flex justify-between pb-8">
        <button className="px-5 py-2.5 rounded font-semibold text-[#5B6474] border border-[#D5DCE6] bg-[#F8FAFC] opacity-70 cursor-not-allowed" disabled>
          ‹ Hoạt động trước
        </button>
        <button className="px-5 py-2.5 rounded font-semibold text-white bg-[#1B4F9C] opacity-70 cursor-not-allowed" disabled>
          Đi tới hoạt động tiếp theo ›
        </button>
      </div>
    </main>
  );
}
