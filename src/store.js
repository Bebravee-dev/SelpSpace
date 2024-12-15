import { createStore } from "redux";

// Определим начальное состояние
const initialState = {
  isFeedbackOpen: false,
};

// Определим редьюсер
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FEEDBACK":
      return {
        ...state,
        isFeedbackOpen: !state.isFeedbackOpen,
      };
    default:
      return state;
  }
};

// Создадим хранилище
const store = createStore(reducer);

export default store;
