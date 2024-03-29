import { useEffect, useState } from 'react';
import './App.css';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList';
import { FcTodoList } from "react-icons/fc";


export default function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');
  return (
    <div className='cards'><h3 className='titleFont'><FcTodoList /> ♡Today's List♡ <FcTodoList /></h3><hr />
      <TodoList filter={filter} />
      <div className='filterPosition'><Header filters={filters} onFilterChange={setFilter}/></div>
    </div>
  );
  }

  // 이 App 컴포넌트는 사용자에게 할 일 목록을 편리하게 관리할 수 있는 기능을 제공하고, 
  // 선택한 필터에 따라 보여지는 할 일 목록을 동적으로 변경하여 필요한 정보만을 확인할 수 있도록 합니다.






