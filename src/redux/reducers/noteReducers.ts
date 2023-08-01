import { ADD_NOTE, EDIT_NOTE, ARCHIVE_NOTE, UNARCHIVE_NOTE, REMOVE_NOTE, NoteActionTypes, Note } from '../../helpers/types/noteTypes';
import notesData from '../../data/notesData'

export interface NoteState {
  activeNotes: Note[];
  archivedNotes: Note[];
}

const initialState: NoteState = {
  activeNotes: notesData,
  archivedNotes: [],
};

const noteReducer = (state = initialState, action: NoteActionTypes): NoteState => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        activeNotes: [...state.activeNotes, action.payload],
          };
    case EDIT_NOTE:
      const editedNote = action.payload;
      const updatedActiveNotes = state.activeNotes.map((note) =>
        note.id === editedNote.id ? editedNote : note
      );
      return {
        ...state,
        activeNotes: updatedActiveNotes,
      };
    case ARCHIVE_NOTE:
      const noteToArchive = state.activeNotes.find((note) => note.id === action.payload);
      if (!noteToArchive) return state;

      return {
        ...state,
        activeNotes: state.activeNotes.filter((note) => note.id !== action.payload),
        archivedNotes: [...state.archivedNotes, { ...noteToArchive, archived: true }],
      };
    case UNARCHIVE_NOTE:
      const noteToUnarchive = state.archivedNotes.find((note) => note.id === action.payload);
      if (!noteToUnarchive) return state;

      return {
        ...state,
        archivedNotes: state.archivedNotes.filter((note) => note.id !== action.payload),
        activeNotes: [...state.activeNotes, { ...noteToUnarchive, archived: false }],
      };
    case REMOVE_NOTE:
      return {
        ...state,
        activeNotes: state.activeNotes.filter((note) => note.id !== action.payload),
        archivedNotes: state.archivedNotes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
