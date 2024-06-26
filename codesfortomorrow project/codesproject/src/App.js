import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchTodos } from './slice/todo';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  // Using useMemo to compute derived state (e.g., completed todos)
  const completedTodos = useMemo(() => {
    return todos.filter(todo => todo.completed);
  }, [todos]);

  // Fetch todos when the button is clicked
  const handleFetchTodos = () => {
    dispatch(fetchTodos());
  };

  useEffect(() => {
    // Initial fetch when the component mounts
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <button onClick={handleFetchTodos}>Fetch data</button>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <h2>Completed Todos</h2>
      <ul>
        {completedTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
