import React, { useReducer } from 'react';
import { appReducer, initialState } from './state';
import { track } from './track';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LessonMain from './components/LessonMain';
import ChatPanel from './components/ChatPanel';
import FacilitatorNotes from './components/FacilitatorNotes';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const isFacilitator = typeof window !== 'undefined' && window.location.search.includes('facilitator=1');

  return (
    <div className="flex flex-col h-screen w-full min-w-[1280px] bg-white overflow-hidden text-[#18212F] text-[15px]">
      <Header dispatch={dispatch} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <LessonMain state={state} dispatch={dispatch} />
        <ChatPanel state={state} dispatch={dispatch} />
      </div>
      {isFacilitator && <FacilitatorNotes screen={state.screen} />}
    </div>
  );
}

export default App;
