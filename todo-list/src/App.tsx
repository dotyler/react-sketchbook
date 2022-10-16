import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useRef, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  //binder
  const todoText: any = useRef();

  //events
  function addTodos(event: any) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    localStorage.setItem('todos', JSON.stringify(next));
  }
  function removeTodos(deleteEvent: any) {
    deleteEvent.preventDefault();
    const next = [...todos, todoText.current.value];
    localStorage.setItem('todos', JSON.stringify(next));
  }

  //side effect/ lifecycle hooks
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);

  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>
        <form onSubmit={addTodos}>
          <input type="text" placeholder="What needs to be done?" ref={todoText} />
          <input type="submit" value="Add Todo" />
        </form>
      </header>
    </div>
  );
}

export default App;
