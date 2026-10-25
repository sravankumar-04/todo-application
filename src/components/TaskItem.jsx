export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={task.completed ? "task done" : "task"}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
        title="Delete task"
      >
        ×
      </button>
    </li>
  );
}
