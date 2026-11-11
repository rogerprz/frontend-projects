import React from 'react';
import { createRoot } from 'react-dom/client';
import Exercise from '../problem.jsx';
import prompt from '../problem.jsx?raw';
import './style.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><main><h1>Debounced React search</h1><Exercise /><details><summary>Exercise requirements</summary><pre>{prompt.split('/*')[1].split('*/')[0]}</pre></details></main></React.StrictMode>);
