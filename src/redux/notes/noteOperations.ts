import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Note } from "../../helpers/types/noteTypes";

axios.defaults.baseURL = "https://notes-ts-backend.onrender.com/api";

export const fetchAllNotes = createAsyncThunk(
  "notes/fetchAllNotes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/notes/");
      if (!response.data.length) {
        console.log(
          "There are no one notes! Add new note, just click on ADD NOTE button!"
        );
      }
      return response.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addNote = createAsyncThunk(
  "notes/addNote",
  async (note: Note, thunkAPI) => {
    try {
      const response = await axios.post("/notes/", note);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateNote = createAsyncThunk(
  "notes/editNote",
  async (payload: { note: Note }, thunkAPI) => {
    const { note } = payload;
    try {
      const updatedNote = { ...note };
      const response = await axios.patch(`/notes/${note._id}`, updatedNote);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const archiveNote = createAsyncThunk(
  "notes/archiveNote",
  async (payload: { note: Note }, thunkAPI) => {
    const { note } = payload;
    try {
      const archivedNote = { ...note, archived: !note.archived };
      const response = await axios.patch(`/notes/${note._id}`, archivedNote);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (_id: string, thunkAPI) => {
    try {
      await axios.delete(`/notes/${_id}`);
      return _id;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
