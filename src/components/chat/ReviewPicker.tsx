import React from 'react';
import { Action } from '../../state';
import { TOPICS } from '../../data';
import { track } from '../../track';

interface Props {
  currentTopicId: string;
  dispatch: React.Dispatch<Action>;
}

export default function ReviewPicker({ currentTopicId, dispatch }: Props) {
  return (
    <div className="border border-[#D5DCE6] rounded-[14px] overflow-hidden bg-[#F8FAFC]">
      <div className="px-4 py-3 border-b border-[#D5DCE6] font-bold text-[14px] text-[#18212F]">
        Bạn muốn ôn chủ đề nào?
      </div>
      <div className="flex flex-col">
        {TOPICS.map((topic) => {
          const isCurrent = topic.id === currentTopicId;
          return (
            <button
              key={topic.id}
              className={`px-4 py-3 text-left border-b border-[#E3E7EE] last:border-0 hover:bg-white transition-colors flex justify-between items-center min-h-[44px] ${isCurrent ? 'bg-white' : ''}`}
              onClick={() => {
                if (!isCurrent) {
                  track('topic_picked', { id: topic.id });
                  dispatch({ type: 'PICK_TOPIC', payload: topic.id });
                }
              }}
            >
              <span className={`text-[14px] ${isCurrent ? 'font-bold text-[#1F4E8C]' : 'font-medium text-[#5B6474]'}`}>
                {topic.name}
              </span>
              {isCurrent && (
                <div className="flex items-center gap-1.5 border border-[#1F4E8C] text-[#1F4E8C] px-2 py-0.5 rounded-[4px] text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E8C]"></span>
                  Đang xem
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
