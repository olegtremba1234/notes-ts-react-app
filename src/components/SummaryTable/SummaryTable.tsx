import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { NoteCategory } from '../../helpers/types/noteTypes';
import { SummaryData } from '../../helpers/types/summaryTypes';

import { Table, TableHeaderCell, TableCell } from './SummaryTable.styled';

interface SummaryTableProps {
  categories: NoteCategory[];
}

const SummaryTable: React.FC<SummaryTableProps> = ({ categories }) => {
  const activeNotes = useSelector((state: RootState) => state.note.activeNotes);
  const archivedNotes = useSelector((state: RootState) => state.note.archivedNotes);

  const countNotesByCategory = (notes: NoteCategory[], active: boolean): SummaryData => {
    return notes.reduce((counts: SummaryData, category) => {
      const count = active
        ? activeNotes.filter((note) => note.category === category).length
        : archivedNotes.filter((note) => note.category === category).length;
      return { ...counts, [category]: count };
    }, {});
  };

  const activeNotesByCategory: SummaryData = countNotesByCategory(categories, true);
  const archivedNotesByCategory: SummaryData = countNotesByCategory(categories, false);

  return (
    <Table>
      <thead>
        <tr>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Active Notes</TableHeaderCell>
          <TableHeaderCell>Archived Notes</TableHeaderCell>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category}>
            <TableCell>{category}</TableCell>
            <TableCell>{activeNotesByCategory[category]}</TableCell>
            <TableCell>{archivedNotesByCategory[category]}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SummaryTable;