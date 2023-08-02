import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { Note, NoteCategory } from '../../helpers/types/noteTypes';
import { archiveNote, unarchiveNote, removeNote } from '../../redux/actions/noteActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Table from '../Table/Table';

import {  Tr, Td,  ActionButton } from './NoteTable.styled'

interface NotesTableProps {
  categories: NoteCategory[];
  onOpenEditNoteModal: (note: Note) => void;
}

const NotesTable: React.FC<NotesTableProps> = ({ categories,onOpenEditNoteModal }) => {
  const notes = useSelector((state: RootState) => state.note.notes);
  const dispatch = useDispatch();
 
    const handleEditNote = (note: Note) => {
       onOpenEditNoteModal(note);
    }
    
 const handleToggleArchiveNote = (note: Note) => {
    if (note.archived) {
      dispatch(unarchiveNote(note.id));
    } else {
      dispatch(archiveNote(note.id));
    }
  };

  const removeNoteModal = (id: number) => {
    const confirmation = window.confirm('Are you sure you want to remove this note?');
    if (confirmation) {
      dispatch(removeNote(id));
    }
  };

  const columns = ['Name', 'Created', 'Category', 'Content', 'Dates', '', '', ''];

  const renderRow = (note: Note) => (
     <Tr key={note.id} archived={note.archived}>
            <Td>{note.name}</Td>
            <Td>{note.createdAt}</Td>
            <Td>{note.category}</Td>
            <Td>{note.content}</Td>
            <Td>{note.datesMentioned.join(', ')}</Td>
            <Td>
              <ActionButton onClick={() => handleEditNote(note)}>
                <FontAwesomeIcon icon={faPen} size="lg" />
              </ActionButton>
            </Td>
            <Td>
              <ActionButton onClick={() => handleToggleArchiveNote(note)}>
                <FontAwesomeIcon icon={faBoxArchive} size='lg'/>
              </ActionButton>
            </Td>
            <Td>
              <ActionButton onClick={() => removeNoteModal(note.id)}>
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                </ActionButton>
            </Td>
          </Tr>
   )

  return (
    <Table data={notes} columns={columns} renderRow={renderRow} />
  );
};

export default NotesTable;
