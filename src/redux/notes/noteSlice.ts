import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../helpers/types/noteTypes";
import {
  fetchAllNotes,
  updateNote,
  addNote,
  deleteNote,
} from "./noteOperations";

interface NotesState {
  entities: Note[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NotesState = {
  entities: [],
  loading: "idle",
  error: null,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotes.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchAllNotes.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(fetchAllNotes.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? null;
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        const updatedNote = action.payload;
        const index = state.entities.findIndex(
          (note) => note._id === updatedNote._id
        );
        if (index !== -1) {
          state.entities[index] = updatedNote;
        }
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.entities = state.entities.filter(
          (note) => note._id !== action.payload
        );
      });
  },
});

export default noteSlice.reducer;
