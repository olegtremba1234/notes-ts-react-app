import React, { useState } from 'react';
import { NoteCategory } from './helpers/types/noteTypes';
import NoteForm from './components/NoteForm/AddNoteForm';
import NotesTable from './components/NotesTable/NotesTable';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import SummaryTable from './components/SummaryTable/SummaryTable';
import AddNoteButton from './components/AddNoteButton/AddNoteButton';

const categories: NoteCategory[] = ['Task', 'Random Thought', 'Idea'];

const App: React.FC = () => {
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);
  const [isEditNoteModalOpen, setIsEditNoteModalOpen] = useState(false);

   const handleOpenAddNoteModal = () => {
    setIsAddNoteModalOpen(true);
  };

  const handleCloseAddNoteModal = () => {
    setIsAddNoteModalOpen(false);
  };

  const handleOpenEditNoteModal = () => {
    setIsEditNoteModalOpen(true);
  };

  const handleCloseEditNoteModal = () => {
    setIsEditNoteModalOpen(false);
  };

  return (
    <div>
      <Header/>
      <NotesTable categories={categories} onOpenEditNoteModal={handleOpenEditNoteModal} />
      <AddNoteButton onClick={handleOpenAddNoteModal}/>
        <Modal isOpen={isAddNoteModalOpen} onClose={handleCloseAddNoteModal}>
          <NoteForm categories={categories} />
        </Modal>
        <Modal isOpen={isEditNoteModalOpen} onClose={handleCloseEditNoteModal}>
         <NoteForm categories={categories} />
        </Modal>
      <SummaryTable categories={categories} />
    </div>
  );
};

export default App;
