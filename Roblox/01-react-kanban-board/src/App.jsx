import ExercisePage from '../../shared/ExercisePage.jsx';
import Starter from './components/KanbanBoard.jsx';
import Solution from './components/BoardReference.jsx';
import prompt from '../01-problem.jsx?raw';
export default function App() {
  return <ExercisePage title="React Kanban board" prompt={prompt} practiceFile="src/components/KanbanBoard.jsx" solutionFile="src/components/BoardReference.jsx" Starter={Starter} Solution={Solution} />;
}
