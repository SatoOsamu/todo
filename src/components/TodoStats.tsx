import type { Todo } from '../types/todo';
import './TodoStats.css';

interface TodoStatsProps {
  todos: Todo[];
  onClearCompleted: () => void;
}

export function TodoStats({ todos, onClearCompleted }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const remaining = total - completed;

  if (total === 0) return null;

  return (
    <div className="todo-stats">
      <span className="stats-text">
        {remaining} 件の未完了タスク / 全 {total} 件
      </span>
      {completed > 0 && (
        <button className="clear-completed-btn" onClick={onClearCompleted}>
          完了済みを削除
        </button>
      )}
    </div>
  );
}
