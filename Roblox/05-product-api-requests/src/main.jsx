import React from 'react';
import { createRoot } from 'react-dom/client';
import Exercise from '../problem.tsx';
import prompt from '../problem.tsx?raw';
import './style.css';
import { mockAPI } from './mockAPI.js';

createRoot(document.getElementById('root')).render(<React.StrictMode><main><h1>Product page with independent requests</h1><Exercise api={mockAPI} /><details><summary>Exercise requirements</summary><pre>{prompt.split('/*')[1].split('*/')[0]}</pre></details></main></React.StrictMode>);
