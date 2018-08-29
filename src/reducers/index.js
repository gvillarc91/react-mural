import { combineReducers } from "redux";
import boardReducer from "./board";
import noteReducer from "./note";

const reducers = {
  board: boardReducer,
  note: noteReducer
};

export default combineReducers({
  ...reducers
});
