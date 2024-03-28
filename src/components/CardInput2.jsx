import { useState } from 'react';
import '../apps/App.css';


export default function CardInput2(props) {
    const [form, setForm] = useState({ name: props.name, email: props.email });
  const handleSubmit = (event) => {
    event.preventDefault(); {/* 서브밋 버튼을 누르면 페이지가 자동적으로 바뀌는 것을 방지 */ }
    console.log(form);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });   // 값을 바꿀 때 setFrom 사용
  }

  return (
    <div className='card'>
      <div className='count'>{form.name}</div>
      <h3>{form.email}</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>이름</label>
        <input type='text' id='name' name='name' value={form.name}
          onChange={handleChange}
        /><br />
        <label htmlFor='email'>이메일:</label>
        <input type="text" id='email' name='email' value={form.email}
          onChange={handleChange}
        /><br />
        <button>제출</button>
      </form>
    </div>
  );
}

{/* 'for' with label in html '<label for~~>
<label for="jb-input-text">Input - Text</label> */}