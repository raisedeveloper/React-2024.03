import { useState, useSyncExternalStore } from 'react';
import '../apps/App.css';

/* thymeleaf 일 때 주어진 것을 가지고 렌더링 하는 것도 어려웠는데 리액트는 클라이언터 사이드에 
렌더링을 하니까 서버 로직도 리액트 안에 들어가 있어서 둘을 함께 구현하는 것이 어렵게 느껴질 수 있음 */
export default function User() {
  const initUsers = [
    { id: 1, name: 'admin', email: 'admin@human.com' },
    { id: 2, name: 'james', email: 'james@naver.com' }
  ];
  const [users, setUsers] = useState(initUsers);
  const [form, setForm] = useState({ id: '', name: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();       {/* submit button을 누르면 페이지가 자동적으로 바뀌는 것을 방지 */ }
    const existUser = users.find(user => user.id == form.id);
    const newUsers = [];
    // 선생님 코드
    let user = user.find(val => val.id == form.id);
    // 값을 변경
    if (existUser) { 
      for (let val of users)
        if (val.id == form.id)    // 같으면 form 을 누르고 아니면 아래 선택지
          newUsers.push(form);    
        else
          newUsers.push(val);
          } else 
      setUsers([...users, form]);
    }
    const handleChange = (event) => 
    setUsers([...users, form]);
  }
  // const handleC = (event) => {
  //   const { name, value } = event.target;
  //   setForm({ ...form, [name]:value });   // 값을 바꿀 때 setFrom 사용
  // }
  // const onChange = (event) => {
  //   event.preventDefault();
  //   if (form.id) {
  //     // 수정하기: 기존 사용자 정보를 업데이트
  //     setUsers(users.map(user => (user.id === form.id ? form : user)));
  //   } else {
  //     // 추가하기: 새로운 사용자 정보를 추가
  //     setUsers([...users, { ...form, id: Date.now() }]);
  //   }
  //   setForm({ id: '', name: '', email: '' }); // 폼 초기화
  // };
  // const handleEdit = (user) => {
  //   // 수정할 사용자 정보를 폼에 설정하여 편집 가능하도록 함
  //   setForm(user);
  //};
  return (
    <div className="card">    
      <h1>사용자 목록</h1>
      <table border={1}>
        <tr><th>ID</th><th>name</th><th>email</th></tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>아이디:</label>
        <input type='text' id='id' name='id' value={form.id} 
          onChange={handleChange} 
        /><br />
        <label htmlFor='name'>이름:</label>
        <input type='text' id='name' name='name' value={form.name} 
          onChange={handleChange} 
        /><br />
        <label htmlFor='email'>이메일:</label>
        <input type='text' id='email' name='email' value={form.email} 
          onChange={handleChange} 
        /><br />
        <button>추가/수정</button>
      </form>
      <button onClick={() => {
        const id = prompt('Id 값을 입력하세요');
        setUsers(users.filter(user => user.id != id));
      }}>삭제</button>
    </div>
  );



// 사용자 리스트 화면
// 1. admin admin@human.com
// id 값 입력받고, name입력받고, email 입력받아 admin 아래에 추가하기
{/* 'for' with label in html '<label for~~>
<label for="jb-input-text">Input - Text</label> */}