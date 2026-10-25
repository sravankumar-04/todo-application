export default function TaskForm({ input, setInput, onAddTask }) {
  return (
    <form className="add-form" onSubmit={onAddTask}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="What do you need to do?"
        aria-label="New task"
        maxLength={200}
      />
      <button type="submit" className="add-button">
        + Add
      </button>
    </form>
  );
}
