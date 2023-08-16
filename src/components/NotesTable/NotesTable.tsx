import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../../redux/store';
import { Note, NoteCategory } from '../../helpers/types/noteTypes';
import {fetchAllNotes,updateNote,deleteNote } from '../../redux/notes/noteOperations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Table from '../Table/Table';

interface NotesTableProps {
  categories: NoteCategory[];
  onOpenEditNoteModal: (note: Note) => void;
}

const NotesTable: React.FC<NotesTableProps> = ({ categories,onOpenEditNoteModal }) => {
  const notes = useSelector((state: RootState) => state.notes.entities);
  const isLoading = useSelector((state: RootState) => state.notes.loading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);
  
 
  const handleEditNote = (note: Note) => {
    onOpenEditNoteModal(note);
  }
  
  const removeNoteModal = (_id: string) => {
    const confirmation = window.confirm('Are you sure you want to remove this note?');
      if (confirmation) {
      dispatch(deleteNote(_id));
    }
  };

  const columns = ['Name', 'Created', 'Category', 'Content', 'Dates', '', '', ''];

  const tdStyle = 'px-2 py-2 border-b border-gray-300'
  const btnHoverStyle = 'transition-all duration-300 ease-in-out hover:scale-110'

  const renderRow = (note: Note) => (
    <tr
      key={note._id}
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
                <button onClick={() => dispatch(updateNote({note}))}>
                  <FontAwesomeIcon icon={faBoxArchive} size='lg'/>
                </button>
              </div>
            </td>
            <td className={tdStyle}>
              <div className={btnHoverStyle}>
                <button onClick={() => note._id && removeNoteModal(note._id)}>
                  <FontAwesomeIcon icon={faTrash} size="lg"/>
                </button>
              </div>
            </td>
          </tr>
   )

  return (
    <>
      <Table data={notes} columns={columns} renderRow={renderRow} />
      {isLoading === 'pending' && <div>Loading...</div>}
    </>
  );
};

export default NotesTable;
