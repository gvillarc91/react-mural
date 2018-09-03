import { ADD_NOTE, SELECT_NOTE } from "./types";
import cuid from "cuid";

export const addNote = note => ({
  type: ADD_NOTE,
  note: { id: cuid(), ...note }
});
