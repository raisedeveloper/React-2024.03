import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 파일 추가

export default function Count() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(1);    // 10이 넘으면 다시 1부터 시작
    }
  };

  const handleReset = () => {
    setCount(1); // 카운트 리셋
  };

  return (
    <>
     <span style={{ padding: 10, fontSize: 50, fontWeight: 'bold' }}>{count}</span>
      <br />
      <>
        <Button style={{fontWeight: 'bold', margin: '5px'}} variant="primary" size="sm" onClick={handleIncrement}>증가시키기</Button>
        <Button style={{fontWeight: 'bold', margin: '5px'}} variant="primary" size="sm" onClick={handleReset}>리셋</Button>
      </>
      </>
  )
}