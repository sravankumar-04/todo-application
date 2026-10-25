export default function TaskFilters({ filter, setFilter }) {
  const filterOptions = ["all", "active", "completed"];

  return (
    <nav className="filters" aria-label="Filter tasks">
      {filterOptions.map((name) => (
        <button
          key={name}
          type="button"
          className={filter === name ? "filter active-filter" : "filter"}
          onClick={() => setFilter(name)}
        >
          {name[0].toUpperCase() + name.slice(1)}
        </button>
      ))}
    </nav>
  );
}
