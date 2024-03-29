import '../apps/App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdLibraryAddCheck } from "react-icons/md";
import { InputGroup, Form, Button } from 'react-bootstrap';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (event) => setText(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0)
      return;
    onAdd({ id: uuidv4(), work: text, status: 'active' });
    setText('');
  }
  return (
    <form style={{ marginTop: '20px' }}>
      <InputGroup>
        <Button size="lg" onClick={handleSubmit}>
          <MdLibraryAddCheck /> 추가
        </Button>
        <Form.Control
          Type='text'
          placeholder='할 일을 입력하세요.'
          value={text}
          onChange={handleChange}>

        </Form.Control>
      </InputGroup>


    </form>
  );
}

// 이 AddTodo 컴포넌트는 사용자가 입력한 할 일을 받아와서 새로운 할 일로 추가하는 기능을 제공하고,
// 사용자가 입력한 후에는 입력 필드를 초기화하여 새로운 할 일을 계속해서 추가할 수 있도록 합니다.