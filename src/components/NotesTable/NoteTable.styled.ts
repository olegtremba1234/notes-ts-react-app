import styled from 'styled-components';

// Variables
const noteTableBorderColor = '#ccc';
const noteTableHeaderBg = '#f2f2f2';
const noteTableRowBg = '#fff';

// Styled Components
export const NoteTableContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(118, 80, 13, 0.9);
  overflow: hidden;
  overflow-x: scroll;
  /* Add other styles specific to the table container */
`;

export const NoteTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${noteTableBorderColor};
  color: rgb(0, 0, 24);
  /* Add other styles specific to the table */
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
export const Tr = styled.tr`
background-color: ${noteTableRowBg};
    &:nth-child(even) {
        background-color: ${noteTableRowBg};}
`;

export const ArchivedNote = styled.div`
  /* Add styles for archived notes */
`;

export const UnarchivedNote = styled.div`
  /* Add styles for unarchived notes */
`;

export const AddNoteBtnContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  /* Add other styles for the add note button container */
`;

export const AddNoteButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
  }

  &:focus,
  &:active {
    outline: none;
    background-color: #0056b3;
  }
  /* Add other styles for the add note button */
`;

export const ArchiveButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 8px;
  border: none;
  background-color: transparent;
  /* Add styles for the archive button */
`;

export const EditButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 8px;
  border: none;
  background-color: transparent;
  /* Add styles for the edit button */
`;

export const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 8px;
  border: none;
  background-color: transparent;
  /* Add styles for the remove button */
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

