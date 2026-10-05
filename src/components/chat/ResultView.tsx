import React, { useEffect, useRef } from 'react';
import { AppState, Action } from '../../state';
import { TOPICS } from '../../data';
import { track } from '../../track';
import ReviewPicker from './ReviewPicker';

interface Props {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export default function ResultView({ state, dispatch }: Props) {
  const { chat, result } = state;
  const dwellStart = useRef(performance.now());
  
  const pickedTopic = TOPICS.find(t => t.id === result.pickedTopicId) || TOPICS.find(t => t.id === 'obs')!;
  
  const whyReason = `Bạn chọn "${chat.a1 || ''}" và trả lời "${chat.a2 || ''}" → có thể bạn đang coi pipeline "chạy không lỗi" là "dữ liệu đúng".`;

  const handleDecision = (type: 'return' | 'rediagnose' | 'pick_topic') => {
    track('review_dwell', { ms: performance.now() - dwellStart.current });
    track('decision', { type });
    if (type === 'return') dispatch({ type: 'RETURN_TO_LESSON' });
    if (type === 'rediagnose') dispatch({ type: 'REDIAGNOSE' });
    if (type === 'pick_topic') dispatch({ type: 'TOGGLE_PICKER' });
  };

  return (
    <div className="flex flex-col gap-6 pb-4">
      <AiMessage>Xong rồi! Đây là chỗ có thể đang làm bạn khựng. Không có đúng sai ở đây, bạn là người quyết định bước tiếp theo.</AiMessage>

      {/* Result Card */}
      <div className="bg-[#FFF5EB] border border-[#F2C79A] rounded-[14px] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-[#F2C79A] border-opacity-50">
          <div className="text-[#9A4500] text-[12px] font-bold tracking-wide uppercase mb-1">Kết quả chẩn đoán</div>
          <h3 className="text-[20px] font-bold text-[#18212F] mb-4">Phát hiện lỗ hổng: Data observability</h3>
          
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[13px] text-[#5B6474] font-medium">Độ tin cậy</span>
            <span className="text-[14px] text-[#0F6A56] font-bold">88%</span>
          </div>
          <div className="w-full h-2 bg-[#D6EDE6] rounded-full overflow-hidden" role="img" aria-label="Độ tin cậy 88%">
            <div className="h-full bg-[#0F7A63] w-[88%] rounded-full"></div>
          </div>
        </div>
        
        {/* Accordion for Why */}
        <div className="border-b border-[#F2C79A] border-opacity-50 last:border-0 bg-[#FFF9F2]">
          <button 
            className="w-full px-4 py-3 flex items-center justify-between text-[#9A4500] font-medium text-[14px] hover:bg-[#FFF5EB]"
            onClick={() => {
              track('why_toggle', { open: !result.whyOpen });
              dispatch({ type: 'TOGGLE_WHY' });
            }}
            aria-expanded={result.whyOpen}
          >
            Vì sao AI kết luận vậy?
            <svg className={`transition-transform ${result.whyOpen ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          
          {result.whyOpen && (
            <div className="px-4 pb-4 pt-1 text-[14px] text-[#5B6474] leading-relaxed">
              {whyReason}
            </div>
          )}
        </div>
      </div>

      {/* Review Card */}
      <div className="border border-[#D5DCE6] rounded-[14px] bg-white shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 flex items-start justify-between border-b border-[#E3E7EE]">
          <div className="flex flex-col gap-1">
            <h4 className="text-[16px] font-bold">⏱ Ôn nhanh 1 phút</h4>
            <span className="text-[14px] font-medium text-[#1B4F9C]">{pickedTopic.name}</span>
          </div>
          {result.pickedTopicId ? (
            <span className="bg-[#1F4E8C] text-white px-2 py-0.5 rounded-[4px] text-[12px] font-semibold">Do bạn chọn</span>
          ) : (
            <span className="bg-[#F3EFFC] text-[#5B3AA8] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold">AI gợi ý</span>
          )}
        </div>
        
        <div className="p-4 flex flex-col gap-3 text-[14px]">
          {pickedTopic.lines.map((line, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#EAF0F8] text-[#1F4E8C] text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">{idx + 1}</span>
              <p className="leading-relaxed">{line}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#EAF0F8] px-4 py-3 text-[13px] text-[#1F4E8C] font-medium flex items-start gap-2 border-t border-[#D5DCE6]">
          <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 9l-6 6 6 6"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>
          <span>{pickedTopic.bridge}</span>
        </div>
      </div>

      {/* Decision Buttons */}
      <div className="flex flex-col gap-3">
        <button 
          className="w-full bg-[#1B4F9C] text-white font-semibold rounded-lg py-3.5 px-4 text-[15px] flex items-center justify-center gap-2 hover:bg-[#173D6E] transition-colors min-h-[46px]"
          onClick={() => handleDecision('return')}
        >
          ✅ Hiểu rồi, quay lại bài
        </button>
        
        <div className="flex gap-3">
          <button 
            className="flex-1 border border-[#D5DCE6] text-[#5B6474] font-medium rounded-lg py-2.5 px-3 text-[14px] hover:bg-gray-50 transition-colors min-h-[44px]"
            onClick={() => handleDecision('rediagnose')}
          >
            ↺ Chẩn đoán lại
          </button>
          
          <button 
            className="flex-[1.5] border border-[#D5DCE6] text-[#5B6474] font-medium rounded-lg py-2.5 px-3 text-[14px] hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
            onClick={() => handleDecision('pick_topic')}
            aria-expanded={result.pickerOpen}
          >
            <span>⚠️</span> AI đoán sai? Tôi tự chọn bài ôn
          </button>
        </div>
      </div>

      {/* Picker */}
      {result.pickerOpen && <ReviewPicker currentTopicId={pickedTopic.id} dispatch={dispatch} />}
    </div>
  );
}

function AiMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-[#6B46C1] flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
      </div>
      <div className="bg-[#F3EFFC] border border-[#E4DBF7] text-[#18212F] rounded-[14px] rounded-tl-[4px] px-4 py-3 max-w-[88%] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
