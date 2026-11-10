import './App.css';
import { KanbanBoard } from './components/KanbanBoard';

function App() {
  return (
    <>
      <section id="center">
        <KanbanBoard />
      </section>

      <div className="ticks"></div>

      <section id="next-steps"></section>

      <div className="ticks"></div>
    </>
  );
}

export default App;
