import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { Note, NoteCategory } from '../../helpers/types/noteTypes';
import { archiveNote, unarchiveNote, removeNote } from '../../redux/actions/noteActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Table from '../Table/Table';

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

  const tdStyle = 'px-2 py-2 border-b border-gray-300'
  const btnHoverStyle = 'transition-all duration-300 ease-in-out hover:scale-110'

  const renderRow = (note: Note) => (
    <tr
      key={note.id}
      className={`border-t ${note.archived ? 'bg-gradient-to-r from-yellow-100 to-yellow-300 text-gray-500' : 'bg-white'} text-center`}>
            <td className={tdStyle}>{note.name}</td>
            <td className={tdStyle}>{note.createdAt}</td>
            <td className={tdStyle}>{note.category}</td>
            <td className={tdStyle}>{note.content}</td>
            <td className={tdStyle}>{note.datesMentioned.join(', ')}</td>
            <td className={tdStyle}>
              <div className={btnHoverStyle}>
                <button onClick={() => handleEditNote(note)}>
                  <FontAwesomeIcon icon={faPen} size="lg" />
                </button>
              </div>
            </td>
            <td className={tdStyle}>
              <div className={btnHoverStyle}>
                <button onClick={() => handleToggleArchiveNote(note)}>
                  <FontAwesomeIcon icon={faBoxArchive} size='lg'/>
                </button>
              </div>
            </td>
            <td className={tdStyle}>
              <div className={btnHoverStyle}>
                <button onClick={() => removeNoteModal(note.id)}>
                  <FontAwesomeIcon icon={faTrash} size="lg"/>
                </button>
              </div>
            </td>
          </tr>
   )

  return (
    <Table data={notes} columns={columns} renderRow={renderRow} />
  );
};

export default NotesTable;
