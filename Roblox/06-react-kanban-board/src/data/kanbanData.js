export const columns = [
  { id: 'col-1', name: 'To do' },
  { id: 'col-2', name: 'In progress' },
  { id: 'col-3', name: 'Done' }
];
export const SANITIZED_COL_NAMES = columns.map((col) => col.name.toLowerCase().replace(' ', ''));
export const BOARDS = {
  todo: [
    { id: 'task-1', title: 'Plan test coverage', description: 'List the key user flows that need automated tests.' },
    {
      id: 'task-2',
      title: 'Design search filters',
      description: 'Define filters for finding tasks by status and keyword.'
    },
    { id: 'task-3', title: 'Draft setup guide', description: 'Document the steps for running the project locally.' }
  ],
  inprogress: [
    {
      id: 'task-11',
      title: 'Build task editor',
      description: 'Add a form for editing task titles and descriptions.'
    },
    {
      id: 'task-12',
      title: 'Add keyboard navigation',
      description: 'Let users move between cards and columns with the keyboard.'
    },
    { id: 'task-13', title: 'Polish card layout', description: 'Improve spacing and text wrapping on smaller screens.' }
  ],
  done: [
    { id: 'task-21', title: 'Create board columns', description: 'Set up the To do, In progress, and Done sections.' },
    {
      id: 'task-22',
      title: 'Implement task movement',
      description: 'Connect the arrow buttons to move cards between adjacent columns.'
    },
    {
      id: 'task-23',
      title: 'Style navigation buttons',
      description: 'Add consistent button styles and disabled states.'
    }
  ]
};
