import styled from 'styled-components';

const noteTableBorderColor = '#ccc';
const noteTableHeaderBg = '#f2f2f2';
const noteTableRowBg = '#fff';

export const NoteTableContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(118, 80, 13, 0.9);
  overflow: hidden;
  /* overflow-x: scroll; */
`;

export const NoteTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${noteTableBorderColor};
  color: rgb(0, 0, 24);
  `;

   
export const Tr = styled.tr`
background-color: ${noteTableRowBg}
`;

export const Th = styled.th`
padding: 10px;
        border-bottom: 1px solid ${noteTableBorderColor};
        text-align: center;
`;

export const Td = styled.td`
padding: 10px;
border-bottom: 1px solid ${noteTableBorderColor};
text-align: center;
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
  &:hover{
  
    transform: scale(1.1);
  }
`;



// $note-table-border-color: #ccc;
// $note-table-header-bg: #f2f2f2;
// $note-table-row-bg: #fff;


// .note-table-container{
//     width: 100%;
//     border-radius: 3px;
//         box-shadow: 0 0 10px rgba(118, 80, 13, 0.9);
//         overflow: hidden;
//         overflow-x: scroll;
// }

// .note-table {
//     width: 100%;
//     border-collapse: collapse;
//     border: 1px solid $note-table-border-color;
//     color: rgb(0, 0, 24);

//     th,
//     td {
//         padding: 10px;
//         border-bottom: 1px solid $note-table-border-color;
//         text-align: center;
//     }

//     thead {
//         background-color: $note-table-header-bg;
//         font-weight: bold;
//     }

//     tbody {
//         tr {
//             background-color: $note-table-row-bg;
//             &:nth-child(even) {
//                 background-color: $note-table-row-bg;
//             }
//         }
//     }
// }

// .note-table .archived-note {
//     background-image: linear-gradient(45deg, #f2f2f2, #ffc10772,#ffc107b7);
//         transition: background-image 0.3s ease;
//         backdrop-filter: blur(4px); 
//         color: #888888;
// }

// .note-table .archived-note.unarchived {
//     background-image: none;
//     background-color: #f2f2f2;
//     backdrop-filter: none;
// }

// .add-note-btn-container{
//     margin-top: 20px;
//     display: flex;
//     justify-content: end;
// }

// #add-note-button {
//     background-color: #007bff;
//     color: #fff;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 3px;
//     cursor: pointer;
//     font-size: 16px;
//     transition: background-color 0.2s ease-in-out;

//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

//     &:hover {
//         background-color: #0056b3;
//     }

//     &:focus,
//     &:active {
//         outline: none;
//         background-color: #0056b3;
//     }
// }

// .archive-button {
//     width: 20px;
//     height: 20px;
//     padding: 8px;
//     border: none;
//     background-color: transparent;
//     background-image: url('../images/box-archive-solid.svg');
//     background-size: cover;
//     cursor: pointer;
//     &:hover{
//         transform: scale(1.1);
//     }
// }

// .edit-button{
//     width: 20px;
//     height: 20px;
//     padding: 8px;
//     border: none;
//     background-color: transparent;
//     background-image: url('../images/pen-solid.svg');
//     background-size: cover;
//     cursor: pointer;

//     &:hover {
//        transform: scale(1.1);
//     }
// }

// .remove-button{
//     width: 20px;
//         height: 20px;
//         padding: 8px;
//         border: none;
//         background-color: transparent;
//         background-image: url('../images/trash-solid.svg');
//         background-size: cover;
//         cursor: pointer;
    
//         &:hover {
//             transform: scale(1.1);
//         }
// }

