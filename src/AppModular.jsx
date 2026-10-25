import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskStats from "./components/TaskStats.jsx";
import TaskFilters from "./components/TaskFilters.jsx";
import TaskList from "./components/TaskList.jsx";
import EmptyState from "./components/EmptyState.jsx";
import CardFooter from "./components/CardFooter.jsx";

const initialTasks = [
  { id: 1, title: "Learn React basics", completed: false },
  { id: 2, title: "Build my first application", completed: true },
];

function AppModular() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("todo-app-tasks");
      return saved ? JSON.parse(saved) : initialTasks;
    } catch {
      return initialTasks;
    }
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todo-app-tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(event) {
    event.preventDefault();
    const title = input.trim();
    if (!title) return;

    setTasks((current) => [
      ...current,
      { id: Date.now(), title, completed: false },
    ]);
    setInput("");
  }

  function toggleTask(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks((current) => current.filter((task) => !task.completed));
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((task) => task.completed).length;
  const remainingCount = tasks.length - completedCount;

  return (
    <main className="app">
      <Header />

      <section className="todo-card">
        <TaskForm input={input} setInput={setInput} onAddTask={addTask} />
        <TaskStats
          remainingCount={remainingCount}
          completedCount={completedCount}
        />
        <TaskFilters filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={visibleTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
        {visibleTasks.length === 0 && (
          <EmptyState totalTasksCount={tasks.length} />
        )}
        <CardFooter
          totalTasksCount={tasks.length}
          onClearCompleted={clearCompleted}
        />
      </section>

      <p className="bottom-note">
        Small steps every day lead to big results.
      </p>
    </main>
  );
}

export default AppModular;
