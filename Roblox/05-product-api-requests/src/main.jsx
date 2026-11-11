import React from 'react';
import { createRoot } from 'react-dom/client';
import Starter from '../problem.tsx';
import Solution from '../solution.jsx';
import prompt from '../problem.tsx?raw';
import ExercisePage from '../../shared/ExercisePage.jsx';
createRoot(document.getElementById('root')).render(<React.StrictMode><ExercisePage title="Product page with independent requests" prompt={prompt} Starter={Starter} Solution={Solution} product /></React.StrictMode>);
