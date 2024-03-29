import { useEffect, useState } from 'react';
import '../apps/App.css';
import AddTodo from './AddTodo';
import Todo from './Todo';

// uuid 라이브러리는 다양한 종류의 UUID를 생성할 수 있도록 여러 함수를 제공하는데, 
// v4 함수는 랜덤하고 고유한 UUID를 생성합니다.
export default function TodoList({ filter }) {
  const initData = readFromLocalStorage()
  const [todos, setTodos] = useState(initData);
  const handleUpdate = updated =>
    setTodos(todos.map(todo => (todo.id === updated.id) ? updated : todo));
  const handleDelete = deleted =>
    setTodos(todos.filter(todo => todo.id !== deleted.id));
  const handleAdd = todo => setTodos([...todos, todo]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = getFilteredTodos(todos, filter);
  return (
    <div>
      <AddTodo onAdd={handleAdd} /><br />
      {
        filteredTodos.map(todo => (
          <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))
      }
    </div>
  );
}

function readFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  console.log(todos);
  return todos ? JSON.parse(todos) : [];
}

function getFilteredTodos(todos, filter) {
  if (filter === 'all')
    return todos;
  return todos.filter((todo => todo.status === filter));
}

// 이 TodoList 컴포넌트는 사용자가 할 일을 추가, 수정, 삭제할 수 있도록 기능을 제공하고,
// 이를 로컬 스토리지에 저장하여 사용자가 페이지를 새로 고침하거나
// 나중에 다시 방문해도 데이터가 유지되도록 합니다.
// 또한, 사용자가 선택한 필터에 따라 보여지는 할 일 목록을 조절하여 필요한 정보만을 확인할 수 있도록 합니다.






