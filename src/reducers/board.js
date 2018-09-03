import { ADD_NOTE, SELECT_NOTE } from "../actions/types";

export const initialState = {
  notes: [],
  selectedNotes: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.note]
      };
    case SELECT_NOTE:
      return {
        ...state,
        selectedNotes: [action.id]
      };
    default:
      return state;
  }
};
