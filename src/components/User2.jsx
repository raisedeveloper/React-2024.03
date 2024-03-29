import { useState, useSyncExternalStore } from 'react';
import '../apps/App.css';


export default function User() {
  const initUsers = [{ id: 1, name: 'admin', email: 'admin@human.com' },
  { id: 2, name: 'james', email: 'james@naver.com' }];
  const [users, setUsers] = useState(initUsers);
  const [form, setForm] = useState({ id: '', name: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault(); {/* submit button을 누르면 페이지가 자동적으로 바뀌는 것을 방지 */ }

    // 강사님 코드
    const existUser = users.find(user => user.id === form.id);
    // const newUsers = [];
    if (existUser) {// 수정
         setUsers(users.map(user => user.id === form.id ? form : user)); // 16, 19~24번 코드 대체
    //   for (let val of users)
    //     if (val.id != form.id)
    //       newUsers.push(form);
    //     else
    //       newUsers.push(val);
    //     setUsers(newUsers);
    }   else   // 추가
        setUsers([...users, form]);

    // 내 코드
    // for (let user of users) {
    //   if (form.id == user.id) { // 수정
    //     user.name = form.name;
    //     user.email = form.email;
    //     setUsers([...users]);
    //     break;
    //   } else                    // 추가
    //     setUsers([...users, form]);
    // }
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });   // 값을 바꿀 때 setFrom 사용
  }
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

      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" name='id'
          value={form.id} onChange={handleChange} />
        <br />
        <label htmlFor="name">이름: </label>
        <input type="text" id="name" name='name'
          value={form.name} onChange={handleChange} />
        <br />
        <label htmlFor="email">이메일: </label>
        <input type="text" id="email" name='email'
          value={form.email} onChange={handleChange} />
        <br />
        <button>추가/수정</button>
      </form>


      <button onClick={() => {
        const id = prompt("계정 삭제");
        setUsers(users.filter(users => users.id !== id));
      }}>삭제</button>


    </div>
  )
}

