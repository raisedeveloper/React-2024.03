import '../apps/App.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { Badge, Button, Form, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, work, status } = todo;
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  }
  const handleDelete = () => onDelete(todo);
  return (
    <Form>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Form.Check // prettier-ignore
          type="switch"
          id={id}
          label={work}
          onChange={handleChange}
          checked={status === 'completed'}
        />
        <button className='deleteButton' onClick={handleDelete}><FaRegTrashAlt /></button>
      </div>
    </Form>
  );
}
// 이 Todo 컴포넌트는 할 일 목록을 보여주고, 각 항목의 상태를 변경하거나 삭제할 수 있는 기능을 제공합니다.