import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo, clearCompleted } =
    useTodos();

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">TODO</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
        <TodoStats todos={todos} onClearCompleted={clearCompleted} />
      </div>
    </div>
  );
}

export default App;
