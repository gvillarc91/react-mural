import { SELECT_NOTE } from "./types";

export const selectNote = id => ({
  type: SELECT_NOTE,
  id
});
