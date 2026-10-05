export type Screen = 'lesson' | 'diagnostic' | 'result' | 'returned';

export type ChatState = {
  step: 'q1' | 'q2' | 'analyzing' | 'done';
  a1: string | null;
  a2: string | null;
};

export type ResultState = {
  whyOpen: boolean;
  pickerOpen: boolean;
  pickedTopicId: string | null;
};

export type AppState = {
  screen: Screen;
  chat: ChatState;
  result: ResultState;
};

export type Action =
  | { type: 'START_DIAGNOSTIC' }
  | { type: 'ANSWER_Q1'; payload: string }
  | { type: 'ANSWER_Q2'; payload: string }
  | { type: 'FINISH_ANALYZING' }
  | { type: 'VIEW_RESULT' }
  | { type: 'RETURN_TO_LESSON' }
  | { type: 'REDIAGNOSE' }
  | { type: 'TOGGLE_WHY' }
  | { type: 'TOGGLE_PICKER' }
  | { type: 'PICK_TOPIC'; payload: string }
  | { type: 'RESET_ALL' };

export const initialState: AppState = {
  screen: 'lesson',
  chat: { step: 'q1', a1: null, a2: null },
  result: { whyOpen: false, pickerOpen: false, pickedTopicId: null },
};

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'START_DIAGNOSTIC':
      return {
        ...state,
        screen: 'diagnostic',
        chat: { step: 'q1', a1: null, a2: null },
      };
    case 'ANSWER_Q1':
      return {
        ...state,
        chat: { ...state.chat, step: 'q2', a1: action.payload },
      };
    case 'ANSWER_Q2':
      return {
        ...state,
        chat: { ...state.chat, step: 'analyzing', a2: action.payload },
      };
    case 'FINISH_ANALYZING':
      return {
        ...state,
        chat: { ...state.chat, step: 'done' },
      };
    case 'VIEW_RESULT':
      return {
        ...state,
        screen: 'result',
      };
    case 'RETURN_TO_LESSON':
      return {
        ...state,
        screen: 'returned',
      };
    case 'REDIAGNOSE':
      return {
        ...state,
        screen: 'diagnostic',
        chat: { step: 'q1', a1: null, a2: null },
        result: { whyOpen: false, pickerOpen: false, pickedTopicId: null },
      };
    case 'TOGGLE_WHY':
      return {
        ...state,
        result: { ...state.result, whyOpen: !state.result.whyOpen },
      };
    case 'TOGGLE_PICKER':
      return {
        ...state,
        result: { ...state.result, pickerOpen: !state.result.pickerOpen },
      };
    case 'PICK_TOPIC':
      return {
        ...state,
        result: { ...state.result, pickerOpen: false, pickedTopicId: action.payload },
      };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
}
