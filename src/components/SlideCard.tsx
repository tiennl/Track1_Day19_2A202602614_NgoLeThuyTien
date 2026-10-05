import React from 'react';
import { Screen } from '../state';

interface Props {
  screen: Screen;
}

export default function SlideCard({ screen }: Props) {
  const isHighlight = screen === 'diagnostic' || screen === 'result';
  const isReturned = screen === 'returned';
  
  let bulletClass = "mb-4 last:mb-0 relative z-0";
  if (isHighlight) {
    bulletClass = "mb-4 last:mb-0 relative z-0 outline outline-2 outline-dashed outline-[#8B6BD6] outline-offset-[3px] bg-[#F6F0FF] rounded-[6px] px-2 -mx-2";
  } else if (isReturned) {
    bulletClass = "mb-4 last:mb-0 relative z-0 bg-[#FFF1C2] ring-[3px] ring-[#F2C94C] rounded-[6px] px-2 -mx-2";
  }

  return (
    <div className="border border-[#C9D3E3] rounded-[6px] overflow-hidden flex flex-col bg-white">
      <div className="bg-[#2F4F86] text-white px-[28px] py-[12px]">
        <h3 className="text-[19px] font-bold">Tại Sao Data Pipeline Là Nền Tảng Của Mọi AI Product?</h3>
      </div>
      
      <div className="p-[28px] pb-[20px] flex gap-8 flex-wrap md:flex-nowrap">
        <div className="flex-[1.5]">
          <ul className="text-[16px] leading-[1.55]">
            <li className="mb-4 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[7px] before:h-[7px] before:bg-[#2F4F86]">
              Một agent RAG xuất sắc vẫn <strong>trả lời sai</strong> nếu vector store được nạp data bẩn hoặc data cũ
            </li>
            <li className="mb-4 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[7px] before:h-[7px] before:bg-[#2F4F86]">
              <strong>Garbage in → garbage out</strong>: chất lượng output bị chặn trên bởi chất lượng input data
            </li>
            <li className="mb-4 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[7px] before:h-[7px] before:bg-[#2F4F86]">
              Data work bị <strong>đánh giá thấp một cách hệ thống</strong> — Sambasivan et al. (Google Research, CHI 2021) gọi đây là <em>data cascades</em>: lỗi data ở thượng nguồn nhân lên thành hỏng hóc ở hạ nguồn
            </li>
            <li className={`${bulletClass} pl-5 before:content-[''] before:absolute before:left-[8px] before:top-[10px] before:w-[7px] before:h-[7px] before:bg-[#2F4F86]`}>
              <strong>Observability</strong> = cơ chế phát hiện data sai <strong>trước khi user phản nàn</strong>
            </li>
          </ul>
        </div>
        
        <div className="flex-1">
          <div className="border-l-[3px] border-[#2F4F86] bg-[#EEF2F9] p-4">
            <h4 className="text-[#2F4F86] font-bold mb-2">Con số bạn sẽ nghe rất nhiều</h4>
            <p className="italic text-[#5B6474] mb-3">"80% thời gian data science là làm sạch dữ liệu"</p>
            <p>Con số này <strong>không đáng tin</strong>. Ta sẽ mổ xẻ nó ở §15 — và dùng nó để học cách kiểm chứng một trích dẫn.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#3D5A8F] text-white text-[11px] px-[28px] py-1.5 flex justify-between uppercase font-medium">
        <span>Giảng viên (VinUni)</span>
        <span>AICB · Data Pipeline</span>
        <span>2026 &nbsp; 2 / 115</span>
      </div>
    </div>
  );
}
