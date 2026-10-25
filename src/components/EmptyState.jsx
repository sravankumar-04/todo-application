export default function EmptyState({ totalTasksCount }) {
  return (
    <div className="empty-state">
      <span>🎯</span>
      <p>
        {totalTasksCount === 0
          ? "No tasks yet. Add your first task!"
          : "No tasks in this category."}
      </p>
    </div>
  );
}
