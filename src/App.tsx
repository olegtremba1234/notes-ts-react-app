import React from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import { Button } from './components/AddNoteButton/AddNoteButton.styled';

function App() {
  return (
    <>
      <Header />
      <Table />
      <Button/>
    </>
  );
}

export default App;
