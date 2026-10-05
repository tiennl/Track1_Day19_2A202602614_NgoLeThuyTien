import React, { useEffect, useRef } from 'react';
import { AppState, Action } from '../state';
import EmptyState from './chat/EmptyState';
import DiagnosticChat from './chat/DiagnosticChat';
import ResultView from './chat/ResultView';

interface Props {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export default function ChatPanel({ state, dispatch }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [state.chat.step, state.screen, state.result.whyOpen, state.result.pickerOpen]);

  return (
    <aside className="w-[440px] shrink-0 bg-[#F8FAFC] border-l border-[#E3E7EE] flex flex-col h-full z-20 shadow-[-4px_0_15px_rgba(0,0,0,0.03)]">
      {/* Header Panel */}
      <div className="h-14 border-b border-[#E3E7EE] px-4 flex items-center justify-between bg-white shrink-0">
        <div className="flex items-center gap-2 font-semibold text-[15px] text-[#18212F]">
          <span className="text-[#C62828]">✦</span> Trợ giảng AI
        </div>
        
        <div className="flex items-center gap-2 text-[#5B6474]">
          <button 
            className="flex items-center gap-1.5 text-[13px] font-medium hover:text-[#18212F] px-2 py-1"
            onClick={() => {
              if (state.screen !== 'lesson' && state.screen !== 'returned') {
                dispatch({ type: 'REDIAGNOSE' });
              }
            }}
          >
            <span>+</span> Chat mới
          </button>
          
          <button className="p-1 hover:text-[#18212F]" disabled><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></button>
          <button className="p-1 hover:text-[#18212F]" disabled><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg></button>
          <button className="p-1 hover:text-[#18212F]" disabled><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
      </div>
      
      {/* Body Panel */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-6 bg-white"
      >
        {state.screen === 'lesson' || state.screen === 'returned' ? (
          <EmptyState screen={state.screen} />
        ) : state.screen === 'diagnostic' ? (
          <DiagnosticChat state={state} dispatch={dispatch} />
        ) : (
          <ResultView state={state} dispatch={dispatch} />
        )}
      </div>
      
      {/* Footer Panel */}
      <div className="p-4 bg-white border-t border-[#E3E7EE] shrink-0">
        {(state.screen === 'diagnostic' || state.screen === 'result') && (
          <button 
            className="flex items-center gap-1.5 text-[#1B4F9C] font-semibold text-[14px] mb-3 hover:underline"
            onClick={() => {
              import('../track').then(m => m.track('back_to_lesson_click'));
              dispatch({ type: 'RETURN_TO_LESSON' });
            }}
          >
            <span>←</span> Quay lại bài học
          </button>
        )}
        
        <div className="relative mb-2">
          <input 
            type="text" 
            disabled 
            placeholder={
              state.screen === 'lesson' || state.screen === 'returned'
                ? "Hỏi bất cứ điều gì..." 
                : state.screen === 'diagnostic'
                ? "Chỉ cần bấm chọn, không cần gõ"
                : "Bấm chọn một lựa chọn ở trên..."
            }
            className="w-full h-11 pl-4 pr-10 border border-[#D5DCE6] rounded-full bg-[#F8FAFC] text-[14px] disabled:opacity-70 disabled:cursor-not-allowed placeholder-[#7B8494]"
          />
          <button className="absolute right-1.5 top-1.5 w-8 h-8 rounded-full bg-[#EAF0F8] text-[#1F4E8C] flex items-center justify-center opacity-50 cursor-not-allowed" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
          </button>
        </div>
        
        <p className="text-[11px] text-[#7B8494] text-center leading-relaxed px-4">
          Trợ giảng AI có thể sai — hãy đối chiếu với bài giảng.<br/>
          Đừng gửi thông tin cá nhân nhạy cảm.
        </p>
      </div>
    </aside>
  );
}
