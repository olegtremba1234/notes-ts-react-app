import styled from 'styled-components';

const noteTableBorderColor = '#ccc';
const noteTableHeaderBg = '#f2f2f2';
const noteTableRowBg = '#fff';

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${noteTableBorderColor};
  text-align: center;
`;

export const TableRow = styled.tr`
background-color: ${noteTableRowBg};
`
