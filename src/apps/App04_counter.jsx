import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const handleClick = () => {
    setCount(count + 1);
    setNumbers([...numbers, count + 1, ' ']);   // the way to reference new Object
    // numbers.push(count+1); - 리액트에서 권장하는 방법아님
    console.log(count);
  }
  return (
    <>
      <div style={{ fontSize: '5rem' }}>{count}</div>    {/* 값은 '5rem' '' 붙여서 입력 */}
      <h3>{numbers}</h3>
      <button onClick={handleClick}>증가하기</button>
    </>
  );
}

// 반복적인 태그가 필요하다면 components로 파일화
// use state 사용 : 3가지 받아냄 1. 배열로 변수이름명 2. 값 변경 도구 3. 변수를 고치기 위한 값
// 바뀐 값으로 화면이 렌더링 되어야 함