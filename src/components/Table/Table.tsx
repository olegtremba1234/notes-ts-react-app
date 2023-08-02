import React from 'react';

import {TableTemplate, Thead, Th, TableContainer} from './Table.styled'

interface TableProps {
  data: any[]; 
  columns: string[]; 
  renderRow: (item: any) => JSX.Element;
}

const Table: React.FC<TableProps> = ({ data, columns, renderRow }) => {
    return (
    <TableContainer>
        <TableTemplate>
            <Thead>
                <tr>
                {columns.map((column) => (
                   <Th key={column}>{column}</Th>
                ))}
                </tr>
            </Thead>
            <tbody>
                {data.map((item) => (
                <React.Fragment key={item.id}>{renderRow(item)}</React.Fragment>
                ))}
            </tbody>
        </TableTemplate>
    </TableContainer>        
  );
};

export default Table;
