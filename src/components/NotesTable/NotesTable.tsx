import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { Note, NoteCategory } from '../../helpers/types/noteTypes';
import { archiveNote, unarchiveNote, removeNote, editNote } from '../../redux/actions/noteActions';

import {NoteTable, Td, Th,Thead} from './NoteTable.styled'

interface NotesTableProps {
  categories: NoteCategory[];
  onOpenEditNoteModal: (note: Note) => void;
}

const NotesTable: React.FC<NotesTableProps> = ({ categories,onOpenEditNoteModal }) => {
  const activeNotes = useSelector((state: RootState) => state.note.activeNotes);
  const dispatch = useDispatch();

    const handleEditNote = (note: Note) => {
       onOpenEditNoteModal(note);
    }
    
  const handleArchiveNote = (id: number) => {
    dispatch(archiveNote(id));
  };

  const handleUnarchiveNote = (id: number) => {
    dispatch(unarchiveNote(id));
  };

  const handleRemoveNote = (id: number) => {
    dispatch(removeNote(id));
  };

  return (
    <NoteTable>
      <Thead>
        <tr>
          <Th>Name</Th>
          <Th>Created</Th>
          <Th>Category</Th>
          <Th>Content</Th>
          <Th>Dates</Th>
          <Th></Th>
          <Th></Th>
          <Th></Th>
        </tr>
      </Thead>
      <tbody>
        {activeNotes.map((note) => (
          <tr key={note.id}>
            <Td>{note.name}</Td>
            <Td>{note.createdAt.toISOString()}</Td>
            <Td>{note.category}</Td>
            <Td>{note.content}</Td>
                <Td>{note.datesMentioned.join(', ')}</Td>
                <Td><button onClick={()=> handleEditNote(note)}>Edit</button></Td>
            <Td><button onClick={() => handleArchiveNote(note.id)}>{note.archived ? 'Unarchive' : 'Archive'}</button></Td>
            <Td><button onClick={() => handleRemoveNote(note.id)}>Remove</button></Td>
          </tr>
        ))}
      </tbody>
    </NoteTable>
  );
};

export default NotesTable;
