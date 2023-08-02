import { ADD_NOTE, EDIT_NOTE, ARCHIVE_NOTE, UNARCHIVE_NOTE, REMOVE_NOTE, NoteActionTypes, Note } from '../../helpers/types/noteTypes';
import notesData from '../../data/notesData'

export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: notesData.map((note) => ({ ...note, archived: false })), // Initialize the archived property for each note
};

const noteReducer = (state = initialState, action: NoteActionTypes): NoteState => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, archived: false }], // Set the archived property to false for newly added notes
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => (note.id === action.payload.id ? action.payload : note)),
      };
    case ARCHIVE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload ? { ...note, archived: true } : note
        ),
      };
    case UNARCHIVE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload ? { ...note, archived: false } : note
        ),
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
