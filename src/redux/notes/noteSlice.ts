import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../helpers/types/noteTypes";
import {
  fetchAllNotes,
  updateNote,
  addNote,
  deleteNote,
  archiveNote,
} from "./noteOperations";

interface NotesState {
  entities: Note[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  entities: [],
  isLoading: false,
  error: null,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload;
      })
      .addCase(fetchAllNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(updateNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedNote = action.payload;
        const index = state.entities.findIndex(
          (note) => note._id === updatedNote._id
        );
        if (index !== -1) {
          state.entities[index] = updatedNote;
        }
      })
      .addCase(updateNote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(addNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities.push(action.payload);
      })
      .addCase(addNote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(archiveNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(archiveNote.fulfilled, (state, action) => {
        state.isLoading = false;
        const archivedNote = action.payload;
        const index = state.entities.findIndex(
          (note) => note._id === archivedNote._id
        );
        if (index !== -1) {
          state.entities[index] = archivedNote;
        }
      })
      .addCase(archiveNote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(deleteNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = state.entities.filter(
          (note) => note._id !== action.payload
        );
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default noteSlice.reducer;
