import styled from 'styled-components';

const noteTableBorderColor = '#ccc';
const noteTableHeaderBg = '#f2f2f2';
const noteTableRowBg = '#fff';

export const TableContainer = styled.div`
  margin-top: 50px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(118, 80, 13, 0.9);
  overflow: hidden;
  /* overflow-x: scroll; */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  border-bottom: 1px solid ${noteTableBorderColor};
  text-align: center;
  background-color: ${noteTableHeaderBg};
  font-weight: bold;
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${noteTableBorderColor};
  text-align: center;
`;

export const TableRow = styled.tr`
background-color: ${noteTableRowBg};
`
