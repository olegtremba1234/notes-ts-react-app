import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { Note, NoteCategory } from '../../helpers/types/noteTypes';
import { archiveNote, unarchiveNote, removeNote } from '../../redux/actions/noteActions';

import { NoteTableContainer, NoteTable, Tr, Td, Th, Thead, ActionButton } from './NoteTable.styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'



interface NotesTableProps {
  categories: NoteCategory[];
  onOpenEditNoteModal: (note: Note) => void;
}

const NotesTable: React.FC<NotesTableProps> = ({ categories,onOpenEditNoteModal }) => {
  const activeNotes = useSelector((state: RootState) => state.note.activeNotes);
  const archivedNotes = useSelector((state: RootState) => state.note.archivedNotes);
  const dispatch = useDispatch();
  const [showArchived, setShowArchived] = useState(false);

  const handleToggleArchived = () => {
    setShowArchived((prevShowArchived) => !prevShowArchived);
  };

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
    <NoteTableContainer>
    <NoteTable>
      <Thead>
        <tr>
          <Th>Name</Th>
          <Th>Created</Th>
          <Th>Category</Th>
          <Th>Content</Th>
          <Th>Dates</Th>
          <Th></Th>
          <Th>
              <label>
                <ActionButton onClick={handleToggleArchived}>
                  <FontAwesomeIcon icon={faBoxArchive} size='lg'/>
                </ActionButton>
              {/* <input type="checkbox" checked={showArchived} onChange={() => setShowArchived(!showArchived)} /> */}
            </label>
          </Th>
          <Th></Th>
        </tr>
      </Thead>
      <tbody>
          {showArchived
            ? archivedNotes.map((note) => (
                <Tr key={note.id}>
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
                  <ActionButton onClick={() => handleUnarchiveNote(note.id)}>
                    <FontAwesomeIcon icon={faBoxArchive} size='lg'/>
                  </ActionButton>
                </Td>
                <Td><ActionButton onClick={() => handleRemoveNote(note.id)}>
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                </ActionButton>
                </Td>
                </Tr>
              ))
            : activeNotes.map((note) => (
          <Tr key={note.id}>
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
              <ActionButton onClick={() => handleArchiveNote(note.id)}>
                <FontAwesomeIcon icon={faBoxArchive} size='lg'/>
              </ActionButton>
            </Td>
            <Td>
              <ActionButton onClick={() => handleRemoveNote(note.id)}>
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </ActionButton>
            </Td>
          </Tr>
        ))}
      </tbody>
    </NoteTable>
    </NoteTableContainer>
  );
};

export default NotesTable;
