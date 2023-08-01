import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Note, NoteCategory } from '../../helpers/types/noteTypes';
import { editNote } from '../../redux/actions/noteActions';

interface EditNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  categories: NoteCategory[];
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({ isOpen, onClose, note, categories }) => {
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

  return (
    <div>
      {isOpen && (
        <div>
          <h2>Edit Note</h2>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Enter note name"
          />
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Enter note content"
          />
          <select value={editedCategory} onChange={(e) => setEditedCategory(e.target.value as NoteCategory)}>
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button onClick={handleSaveNote}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default EditNoteModal;
