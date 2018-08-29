import { ADD_NOTE } from "../actions/types";

export const initialState = {
  notes: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [...state.notes, action.note]
      };
    default:
      return state;
  }
};
