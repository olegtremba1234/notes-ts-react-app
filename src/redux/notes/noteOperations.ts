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
      const updatedNote = { ...note, archived: !note.archived };
      const response = await axios.put(`/notes/${note._id}`, updatedNote);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (id: string, thunkAPI) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      return id;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
