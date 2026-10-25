export default function CardFooter({ totalTasksCount, onClearCompleted }) {
  return (
    <footer className="card-footer">
      <span>{totalTasksCount} total tasks</span>
      <button type="button" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
