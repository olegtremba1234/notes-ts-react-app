import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { NoteCategory, Note } from '../../helpers/types/noteTypes';
import { SummaryData } from '../../helpers/types/summaryTypes';
import Table from '../Table/Table';

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

  const columns = ['Category', 'Active Notes', 'Archived Notes'];

  const renderRow = (category: NoteCategory) => (
    <tr className='border-b border-gray-300'  key={category}>
      <td className='p-2 text-center'>{category}</td>
      <td className='p-2 text-center'>{activeNotesByCategory[category] || 0}</td>
      <td className='p-2 text-center'>{archivedNotesByCategory[category] || 0}</td>
    </tr>
  );

  return (
    <Table data={categories} columns={columns} renderRow={renderRow} />
  );
};

export default SummaryTable;
