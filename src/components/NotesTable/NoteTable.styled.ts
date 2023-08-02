import styled, { css } from 'styled-components';

const noteTableBorderColor = '#ccc';
const noteTableRowBg = '#fff';

interface TrProps {
  archived: boolean;
}

export const Tr = styled.tr<TrProps>`
${({ archived }) =>
    archived &&
    css`
       background-image: linear-gradient(45deg, #f2f2f2, #ffc10772,#ffc107b7);
        transition: background-image 0.3s ease;
        backdrop-filter: blur(4px); 
        color: #888888;
    `}
  background-color: ${noteTableRowBg};
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${noteTableBorderColor};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
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