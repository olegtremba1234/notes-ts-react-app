import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllNotes = (state: RootState) => state.notes.entities;

export const selectNoteById = (id: string) =>
  createSelector(selectAllNotes, (notes) =>
    notes.find((note) => note._id === id)
  );
