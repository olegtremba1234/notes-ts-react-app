import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {updateNote} from '../../redux/notes/noteOperations'
import { Note, NoteCategory } from '../../helpers/types/noteTypes';
import Label from '../Label/Label';

interface EditNoteModalProps {
  onClose: () => void;
  note: Note;
  categories: NoteCategory[];
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({ onClose, note, categories }) => {
  const [editedName, setEditedName] = useState(note.name);
  const [editedContent, setEditedContent] = useState(note.content);
  const [editedCategory, setEditedCategory] = useState(note.category);
  const dispatch = useDispatch<AppDispatch>();

  const handleSaveNote = () => {
    const editedNote: Note = {
      ...note,
      name: editedName,
      content: editedContent,
      category: editedCategory,
    };
    dispatch(updateNote({note:editedNote}));
    onClose();
  };

  const inputStyle = ' p-2 mx-0 my-1 border border-gray-300 rounded-md text-sm';
  const buttonStyle = ' p-2 mx-0 my-1 border border-gray-300 rounded-md text-sm bg-blue-500 text-white cursor-pointer hover:bg-blue-600';

  return (
        <form className='flex flex-col'>
          <Label htmlFor='edit-note-name' text='Edit Note Name:' />
          <input
            id="edit-note-name"
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Enter note name"
            className={inputStyle}
          />
          <Label htmlFor='edit-note-content' text='Edit Note Content:' />
          <input
            id="edit-note-content"
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Enter note content"
            className={inputStyle}
          />
          <Label htmlFor='edit-category' text='Edit Category:' />
          <select
            id="edit-category"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value as NoteCategory)}
            className={inputStyle}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={handleSaveNote}
            className={buttonStyle}
          >
            Save Changes
          </button>
          <button
            onClick={onClose}
            className={buttonStyle}
          >
            Cancel
          </button>
        </form>
  );
};

export default EditNoteModal;
