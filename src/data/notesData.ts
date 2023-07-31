import { Note } from '../helpers/types/noteTypes';

const notesData: Note[] = [
 {
    id: 1,
    name: 'Grocery List',
    createdAt: '2023-07-30T10:00:00',
    content: 'Remember to buy groceries on 01/08/2023',
    category: 'Task',
    datesMentioned: ['01/08/2023'],
    archived: false,
  },
  {
    id: 2,
    name: 'Beach Day',
    createdAt: '2023-07-29T15:30:00',
    content: 'Had a great time at the beach today!',
    category: 'Random Thought',
    datesMentioned: [],
    archived: false,
  },
  {
    id: 3,
    name: 'New Project',
    createdAt: '2023-07-28T09:15:00',
    content: 'Idea: Start a new project using React and TypeScript',
    category: 'Idea',
    datesMentioned: [],
    archived: false,
  },
  {
    id: 4,
    name: 'Task Example',
    createdAt: '2023-07-27T12:00:00',
    content: 'This is another note with a name',
    category: 'Task',
    datesMentioned: [],
    archived: false,
  },
  {
    id: 5,
    name: 'Random Thought',
    createdAt: '2023-07-26T18:45:00',
    content: 'A random thought popped into my mind!',
    category: 'Random Thought',
    datesMentioned: [],
    archived: false,
  },
  {
    id: 6,
    name: 'Learning Goal',
    createdAt: '2023-07-25T11:30:00',
    content: 'Idea: Learn a new programming language',
    category: 'Idea',
    datesMentioned: [],
    archived: false,
  },
  {
    id: 7,
    name: 'Task Complete',
    createdAt: '2023-07-24T14:20:00',
    content: 'Completed a task successfully!',
    category: 'Task',
    datesMentioned: ['24/07/2023', '25/07/2023'],
    archived: false,
  },
];

export default notesData;
