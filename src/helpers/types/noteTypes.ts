export interface Note {
  _id?: string;
  name: string;
  createdAt?: string;
  content: string;
  category: NoteCategory;
  datesMentioned: string[];
  archived: boolean;
}

export type NoteCategory = "Task" | "Random Thought" | "Idea";

export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const ARCHIVE_NOTE = "ARCHIVE_NOTE";
export const UNARCHIVE_NOTE = "UNARCHIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: Note;
}

interface EditNoteAction {
  type: typeof EDIT_NOTE;
  payload: Note;
}

interface ArchiveNoteAction {
  type: typeof ARCHIVE_NOTE;
  payload: number; // Note ID
}

interface UnarchiveNoteAction {
  type: typeof UNARCHIVE_NOTE;
  payload: number; // Note ID
}

interface RemoveNoteAction {
  type: typeof REMOVE_NOTE;
  payload: number; // Note ID
}

export type NoteActionTypes =
  | AddNoteAction
  | EditNoteAction
  | ArchiveNoteAction
  | UnarchiveNoteAction
  | RemoveNoteAction;

export interface NoteState {
  activeNotes: Note[];
  archivedNotes: Note[];
}
