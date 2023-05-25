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

### Global State Management using Redux
Installation steps - 
```
npm install @reduxjs/toolkit react-redux
```
Terminology -
1. Store
2. InitialState
3. Slice - Reducers & Actions
4. Hooks - useSelector & useDispatch

Steps to setup - 
1. First we need to create a slice.
2. Inside the slice we need to have unique name
3. Inside the slice we need to have initialState
4. Action functions inside the reducer key.
5. Configure the reducer with store.
6. Passing the store to Provider which wraps your project. Also termed as High Order Component.
7. Now, Inside the component you can read the redux state value via useSelector hook and you can call the action to modify the state via useDispatch hook.

Persisting the redux state using redux-persist - 
1. Install the library 
```
npm install redux-persist
```
2. Modify the store with persisted Reducer as mentioned in store.js file
3. Export the persistor along with the store
4. In App.js Below Provider add PersistGate Component with persistor as a prop
5. Re-run the project, and redux state will be persisted in localstorage of the browser.

### Network calls in React using axios
1. Install the axios library -
```
npm i axios
```
2. Add the axios configuration with it's instance inside config folder as mentioned.
3. Add the request & response interceptors for axios instance (Reference - https://axios-http.com/docs/interceptors)
4. Use this instance across the project for crud operations.

Using Middleware - redux-saga (https://redux-saga.js.org/)
1. Install the saga library -
```
npm i redux-saga
```
2. Configure the store with middleware as mentioned in store.js file
3. Create saga folder inside redux folder, where you maintain all saga files
4. Create actions related to saga, eg - request, success, failure
5. Configure the request action to saga as mentioned in dashboardSaga.js
6. The index file of saga will have all action associated with the generator functions to be called. refer saga/index.js