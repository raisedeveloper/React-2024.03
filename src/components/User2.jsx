import { useState, useSyncExternalStore } from 'react';
import '../apps/App.css';


export default function User() {
  const initUsers = [{ id: 1, name: 'admin', email: 'admin@human.com' },
                     { id: 2, name: 'james', email: 'james@naver.com' }];
  const [users, setUsers] = useState(initUsers);
  return (
    <div className='card'>
      <h1>User List</h1>
      <table border={1}>    {/* {user.map 이하} = 자바 스크립트 코드 */}
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
      <button onClick={() => {
        const id = prompt('id 값을 입력하세요');
        const name = prompt('name 값을 입력하세요');
        const email = prompt('email 값을 입력하세요');
        setUsers([...users,{id, name, email}]);
      }}>추가</button>
      <button onClick={() =>{
        const id = prompt('Id 값을 입력하세요');
        const newUsers = users.filter(user => user.id != id);
        let array = [];
        for (let user of users)
          if (user.id != id)
            array.push(user);
        setUsers(newUsers);
      }}>삭제</button>
    </div>
  );
}


// 사용자 리스트 화면
// 1. admin admin@human.com
// id 값 입력받고, name입력받고, email 입력받아 admin 아래에 추가하기
{/* 'for' with label in html '<label for~~>
<label for="jb-input-text">Input - Text</label> */}