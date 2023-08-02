import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Note, NoteCategory } from '../../helpers/types/noteTypes';
import { editNote } from '../../redux/actions/noteActions';
import { EditNoteForm } from './EditNoteForm.styled';

interface EditNoteModalProps {
  // isOpen: boolean;
  onClose: () => void;
  note: Note;
  categories: NoteCategory[];
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({ onClose, note, categories }) => {
  const [editedName, setEditedName] = useState(note.name);
  const [editedContent, setEditedContent] = useState(note.content);
  const [editedCategory, setEditedCategory] = useState(note.category);
  const dispatch = useDispatch();

  const handleSaveNote = () => {
    const editedNote: Note = {
      ...note,
      name: editedName,
      content: editedContent,
      category: editedCategory,
    };
    dispatch(editNote(editedNote));
    onClose();
  };

  // if (!isOpen) return null;

  return (
        <EditNoteForm>
          <label htmlFor="edit-note-name">Edit Note Name:</label>
          <input
            id="edit-note-name"
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Enter note name"
          />
          <label htmlFor="edit-note-content">Edit Note Content:</label>
          <input
            id="edit-note-content"
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Enter note content"
          />
          <label htmlFor="edit-category">Edit Category:</label>
          <select
            id="edit-category"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value as NoteCategory)}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button onClick={handleSaveNote}>Save Changes</button>
          <button onClick={onClose}>Cancel</button>
        </EditNoteForm>
  );
};

export default EditNoteModal;
