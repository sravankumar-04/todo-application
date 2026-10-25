export default function TaskStats({ remainingCount, completedCount }) {
  return (
    <div className="stats">
      <span>{remainingCount} remaining</span>
      <span>{completedCount} completed</span>
    </div>
  );
}
