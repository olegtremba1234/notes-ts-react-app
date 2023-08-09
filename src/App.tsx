import React, { useState } from 'react';
import { Note,NoteCategory } from './helpers/types/noteTypes';
import NoteForm from './components/AddNoteForm/AddNoteForm';
import NotesTable from './components/NotesTable/NotesTable';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import SummaryTable from './components/SummaryTable/SummaryTable';
import AddNoteButton from './components/AddNoteButton/AddNoteButton';
import EditNoteModal from './components/EditNoteForm/EditNoteForm';
import Container from './components/Container/Container';
import './App.css'

const categories: NoteCategory[] = ['Task', 'Random Thought', 'Idea'];

const App: React.FC = () => {
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);
  const [isEditNoteModalOpen, setIsEditNoteModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

   const handleOpenAddNoteModal = () => {
    setIsAddNoteModalOpen(true);
  };

  const handleCloseAddNoteModal = () => {
    setIsAddNoteModalOpen(false);
  };

  const handleOpenEditNoteModal = (note:Note) => {
    setSelectedNote(note);
    setIsEditNoteModalOpen(true);
  };

  const handleCloseEditNoteModal = () => {
    setIsEditNoteModalOpen(false);
  };

  return (
    <Container>
      <Header/>
      <NotesTable categories={categories} onOpenEditNoteModal={handleOpenEditNoteModal} />
      <AddNoteButton onClick={handleOpenAddNoteModal}/>
        <Modal isOpen={isAddNoteModalOpen} onClose={handleCloseAddNoteModal}>
          <NoteForm onClose={handleCloseAddNoteModal} categories={categories} />
        </Modal>
        <Modal isOpen={isEditNoteModalOpen} onClose={handleCloseEditNoteModal}>
         {selectedNote && <EditNoteModal  note={selectedNote} onClose={handleCloseEditNoteModal} categories={categories}/>}
        </Modal>
      <SummaryTable categories={categories} />
    </Container>
  );
};

export default App;
