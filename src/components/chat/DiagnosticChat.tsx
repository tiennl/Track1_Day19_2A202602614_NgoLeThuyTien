import React, { useEffect, useRef } from 'react';
import { AppState, Action } from '../../state';
import { Q1, Q2 } from '../../data';
import { track } from '../../track';

interface Props {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export default function DiagnosticChat({ state, dispatch }: Props) {
  const { chat } = state;
  const q1ShownRef = useRef(performance.now());
  const q2ShownRef = useRef<number | null>(null);

  useEffect(() => {
    track('banner_view');
  }, []);

  useEffect(() => {
    if (chat.step === 'q2' && !q2ShownRef.current) {
      q2ShownRef.current = performance.now();
    }
  }, [chat.step]);

  useEffect(() => {
    if (chat.step === 'analyzing') {
      track('analyzing_start');
      const timer = setTimeout(() => {
        track('analyzing_end');
        dispatch({ type: 'FINISH_ANALYZING' });
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [chat.step, dispatch]);

  const handleQ1 = (val: string) => {
    track('q1_answer', { value: val, ms_since_q1_shown: performance.now() - q1ShownRef.current });
    dispatch({ type: 'ANSWER_Q1', payload: val });
  };

  const handleQ2 = (val: string) => {
    track('q2_answer', { value: val, ms_since_q2_shown: performance.now() - (q2ShownRef.current || performance.now()) });
    dispatch({ type: 'ANSWER_Q2', payload: val });
  };

  return (
    <div className="flex flex-col gap-5 pb-4">
      {/* Banner */}
      <div className="bg-[#F1F5F9] border border-[#DDE4ED] rounded-[12px] p-4 flex gap-3 text-[14px]">
        <div className="text-[#1F4E8C] shrink-0 mt-0.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div>
          AI sẽ hỏi bạn <strong>2 câu ngắn (~30 giây)</strong> để tìm đúng chỗ đang hổng. AI không giải bài hộ và không thay thế bài giảng.
        </div>
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-2">
        <div className="text-[#5B3AA8] text-[13px] font-bold uppercase tracking-wide">
          {chat.step === 'q1' ? 'Câu 1/2' : chat.step === 'q2' || chat.step === 'analyzing' ? 'Câu 2/2' : 'Đã xong 2/2'}
        </div>
        <div className="flex gap-1 h-1.5 w-full">
          <div className="flex-1 rounded-full bg-[#6B46C1]"></div>
          <div className={`flex-1 rounded-full ${chat.step !== 'q1' ? 'bg-[#6B46C1]' : 'bg-[#DCE3EE]'}`}></div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex flex-col gap-[14px]">
        {/* Q1 setup */}
        <AiMessage>Nhiều người cũng khựng ở slide này đấy, không sao cả.</AiMessage>
        <AiMessage label="Câu 1/2">{Q1.prompt}</AiMessage>
        
        {/* Q1 options / user answer */}
        {!chat.a1 ? (
          <div className="flex flex-wrap gap-2 mt-1">
            {Q1.chips.map(chip => (
              <button 
                key={chip} 
                type="button"
                className="bg-white border-[1.5px] border-[#B9C7DC] text-[#1F4E8C] text-[14px] font-medium rounded-full px-4 py-2 hover:bg-[#EAF0F8] hover:border-[#1F4E8C] min-h-[44px] transition-colors"
                onClick={() => handleQ1(chip)}
              >
                {chip}
              </button>
            ))}
          </div>
        ) : (
          <UserMessage>{chat.a1}</UserMessage>
        )}

        {/* Q2 setup */}
        {chat.step !== 'q1' && (
          <>
            <AiMessage>Cảm ơn bạn! Thêm một câu nhanh nữa thôi, không tính điểm đâu.</AiMessage>
            <AiMessage label="Câu 2/2">{Q2.prompt}</AiMessage>
            
            {/* Q2 options / user answer */}
            {!chat.a2 ? (
              <div className="flex flex-wrap gap-2 mt-1">
                {Q2.chips.map(chip => (
                  <button 
                    key={chip} 
                    type="button"
                    className="bg-white border-[1.5px] border-[#B9C7DC] text-[#1F4E8C] text-[14px] font-medium rounded-full px-4 py-2 hover:bg-[#EAF0F8] hover:border-[#1F4E8C] min-h-[44px] transition-colors"
                    onClick={() => handleQ2(chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            ) : (
              <UserMessage>{chat.a2}</UserMessage>
            )}
          </>
        )}

        {/* Analyzing / Done */}
        {chat.step === 'analyzing' && (
          <AiMessage>
            <div className="flex items-center gap-2 text-[#5B3AA8]">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-current blink" style={{ animationDelay: '0s' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-current blink" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-current blink" style={{ animationDelay: '0.4s' }}></span>
              </span>
              AI đang phân tích...
            </div>
          </AiMessage>
        )}

        {chat.step === 'done' && (
          <div className="flex flex-col gap-4 mt-2">
            <AiMessage>Xong rồi! Mình đã thấy chỗ có thể đang làm bạn khựng.</AiMessage>
            <button 
              className="bg-[#1B4F9C] text-white font-semibold rounded-lg py-3 px-6 text-[15px] self-start flex items-center gap-2 hover:bg-[#173D6E] transition-colors min-h-[44px]"
              onClick={() => {
                track('result_view');
                dispatch({ type: 'VIEW_RESULT' });
              }}
            >
              Xem kết quả <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function AiMessage({ children, label }: { children: React.ReactNode, label?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-[#6B46C1] flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
      </div>
      <div className="flex flex-col gap-1 max-w-[88%]">
        {label && <span className="text-[#5B3AA8] text-[12px] font-semibold uppercase">{label}</span>}
        <div className="bg-[#F3EFFC] border border-[#E4DBF7] text-[#18212F] rounded-[14px] rounded-tl-[4px] px-4 py-3 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end w-full">
      <div className="bg-[#1F4E8C] text-white rounded-[14px] rounded-tr-[4px] px-4 py-3 max-w-[80%] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
