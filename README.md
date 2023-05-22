### ReactJS Main Concepts -
1. Class Components
2. React Lifecycle in class Components
3. Functional Components
4. React Lifecycle in functional Components
5. State
6. Props
7. useState
8. useEffect
9. Conditional Rendering

### Styling in ReactJS
1. Using .css files
2. Using .js files (mainly for inline styles)
3. Using css frameworks (e.g. tailwind, bootstrap, material-ui, etc)

#### Steps to install Tailwind
1. npm install -D tailwindcss postcss autoprefixer (-D represents dev dependencies in package.json)
2. npx tailwindcss init
3. Add the following to your index.css - 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4. npm start
Note - 
Reference to tailwind documentation for styling - https://tailwindcss.com/docs/container.
### Steps to integrate Navigation
1. Install following dependencies in your project:
```
npm install react-router-dom localforage match-sorter sort-by
```
2. Refer this example to configure - https://reactrouter.com/en/main/start/tutorial#adding-a-router
