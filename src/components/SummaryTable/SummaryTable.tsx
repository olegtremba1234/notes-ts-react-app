import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { NoteCategory, Note } from '../../helpers/types/noteTypes';
import { SummaryData } from '../../helpers/types/summaryTypes';

import { TableContainer, Table, TableHeaderCell, TableCell, TableRow } from './SummaryTable.styled';

interface SummaryTableProps {
  categories: NoteCategory[];
}

const SummaryTable: React.FC<SummaryTableProps> = ({ categories }) => {
  const notes = useSelector((state: RootState) => state.note.notes);

  const countNotesByCategory = (notes: Note[], active: boolean): SummaryData => {
    return notes.reduce((counts: SummaryData, note) => {
      if ((active && !note.archived) || (!active && note.archived)) {
        const category = note.category;
        counts[category] = (counts[category] || 0) + 1;
      }
      return counts;
    }, {});
  };

  const activeNotesByCategory: SummaryData = countNotesByCategory(notes, true);
  const archivedNotesByCategory: SummaryData = countNotesByCategory(notes, false);

  return (
    <TableContainer>
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
            <TableRow key={category}>
              <TableCell>{category}</TableCell>
              <TableCell>{activeNotesByCategory[category] || 0}</TableCell>
              <TableCell>{archivedNotesByCategory[category] || 0}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SummaryTable;
