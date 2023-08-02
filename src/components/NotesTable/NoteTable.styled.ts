import styled from 'styled-components';

const noteTableBorderColor = '#ccc';
const noteTableHeaderBg = '#f2f2f2';
const noteTableRowBg = '#fff';

export const NoteTableContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(118, 80, 13, 0.9);
  overflow: hidden;
`;

export const NoteTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${noteTableBorderColor};
  color: rgb(0, 0, 24);

  @media (max-width: 768px) {
    font-size: 14px;

    th,
    td {
      padding: 8px;
    }
  }
`;

export const Tr = styled.tr`
  background-color: ${noteTableRowBg};
`;

export const Th = styled.th`
  padding: 10px;
  border-bottom: 1px solid ${noteTableBorderColor};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${noteTableBorderColor};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Thead = styled.thead`
  background-color: ${noteTableHeaderBg};
  font-weight: bold;
`;

export const ActionButton = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;