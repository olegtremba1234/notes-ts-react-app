import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/actions/noteActions';
import { NoteCategory, Note } from '../../helpers/types/noteTypes';

interface NoteFormProps {
  categories: NoteCategory[];
}

const NoteForm: React.FC<NoteFormProps> = ({ categories }) => {
  const [name, setName] = useState('')
  const [noteContent, setNoteContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<NoteCategory | ''>(''); // Update the state type

  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (noteContent.trim() !== '' && selectedCategory !== '') {
      const newNote: Note = {
        id: Date.now(),
        name: name,
        createdAt: new Date(),
        content: noteContent,
        category: selectedCategory,
        datesMentioned: [], // You can add date parsing here if needed
        archived: false,
      };

      dispatch(addNote(newNote));
      setNoteContent('');
      setSelectedCategory('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter note name'
      />
      <input
        type="text"
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        placeholder="Enter note content"
      />
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value as NoteCategory)}>
        <option value="">Select category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NoteForm;
