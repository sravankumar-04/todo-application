# Todo App (React + Vite)

This project has been split from the original single document into organized project files and modular components.

## Project Structure

```
todo-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── src/
│   ├── components/             # Decomposed sub-components
│   │   ├── Header.jsx          # App header & branding
│   │   ├── TaskForm.jsx        # Add task input form
│   │   ├── TaskStats.jsx       # Task counter badges
│   │   ├── TaskFilters.jsx     # All / Active / Completed filter buttons
│   │   ├── TaskItem.jsx        # Single task row with checkbox & delete
│   │   ├── TaskList.jsx        # List container mapping tasks
│   │   ├── EmptyState.jsx      # Placeholder when no tasks match
│   │   └── CardFooter.jsx      # Footer with total count & clear completed
│   ├── App.css                 # Application styles
│   ├── App.jsx                 # Original monolithic App component
│   ├── AppModular.jsx          # Modular App component using sub-components
│   ├── index.css               # Global base styling & resets
│   └── main.jsx                # React root mount entrypoint
├── index.html                  # HTML entrypoint
├── package.json                # Dependencies and scripts
└── vite.config.js              # Vite configuration
```

## Running Locally

```bash
cd todo-app
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```
