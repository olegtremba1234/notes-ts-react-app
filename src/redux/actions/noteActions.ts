import { ADD_NOTE,EDIT_NOTE, ARCHIVE_NOTE, UNARCHIVE_NOTE, REMOVE_NOTE, NoteActionTypes, Note } from '../../helpers/types/noteTypes';

export const addNotesOnAppInit = (notes: Note[]) => {
  return {
    type: ADD_NOTE,
    payload: notes,
  };
};

export const addNote = (note: Note): NoteActionTypes => ({
  type: ADD_NOTE,
  payload: note,
});

export const editNote = (editedNote: Note) => {
  return {
    type: EDIT_NOTE,
    payload: editedNote,
  };
};

export const archiveNote = (id: number): NoteActionTypes => ({
  type: ARCHIVE_NOTE,
  payload: id,
});

export const unarchiveNote = (id: number): NoteActionTypes => ({
  type: UNARCHIVE_NOTE,
  payload: id,
});

export const removeNote = (id: number): NoteActionTypes => ({
  type: REMOVE_NOTE,
  payload: id,
});


