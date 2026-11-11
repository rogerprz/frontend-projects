import './KanbanBoard.css';

export default function KanbanBoard() {
  return (
    <section className="board-container">
      {/* TODO: Add the task form and board state. */}
      <section className="cols-container">
        <section className="col-container">
          <h2 className="col-header">To do</h2>
          {/* TODO: Render tasks and controls. */}
        </section>
        <section className="col-container">
          <h2 className="col-header">In progress</h2>
        </section>
        <section className="col-container">
          <h2 className="col-header">Done</h2>
        </section>
      </section>
    </section>
  );
}
