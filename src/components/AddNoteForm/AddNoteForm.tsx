import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {AppDispatch} from '../../redux/store'
import {addNote} from '../../redux/notes/noteOperations'
import { NoteCategory, Note } from '../../helpers/types/noteTypes';
import Label from '../Label/Label';

interface NoteFormProps {
  categories: NoteCategory[];
  onClose: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onClose,categories }) => {
  const [name, setName] = useState('')
  const [noteContent, setNoteContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<NoteCategory | ''>('');

  const dispatch = useDispatch<AppDispatch>();

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (noteContent.trim() !== '' && selectedCategory !== '') {
      const newNote: Note = {
        _id: "",
        name: name,
        content: noteContent,
        category: selectedCategory,
        datesMentioned: [],
        archived: false,
      };
      dispatch(addNote(newNote));
      setNoteContent('');
      setSelectedCategory('');
      onClose();
    }
  };

  const inputStyle = ' p-2 mx-0 my-1 border border-gray-300 rounded-md text-sm';
  const buttonStyle = ' p-2 mx-0 my-1 border border-gray-300 rounded-md text-sm bg-blue-500 text-white cursor-pointer hover:bg-blue-600';

  return (
    <form className='flex flex-col'>
      <Label htmlFor="edit-note-name" text='Note Name:'/>
      <input
        id='edit-note-name'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter note name'
        className={inputStyle}
      />
      <Label htmlFor="edit-category" text='Category:'/>
      <select
        id="edit-category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value as NoteCategory)}
        className={inputStyle}
      >
        <option value="">Select category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
        <Label htmlFor="edit-note-content" text='Note Content:'/>
        <input
          id='edit-note-content'
          type="text"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        placeholder="Enter note content"
        className={inputStyle}
        />
      <button
        onClick={handleAddNote}
        className={buttonStyle}
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
