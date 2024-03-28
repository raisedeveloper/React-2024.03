import logo from '../logo.svg';
import './App.css';
import Card from '../components/Card';

function App() {
  const name = 'James';
  return (
    <>
      <Card />
      <br />
      <Card />
    </>
  );
}

export default App;

// 태그이름은 대문자 시작
// br과 hr도 닫는 것이 필요 - 모든 태그가 모두 열고 닫힘
// 자바스크립트 코드로 사용하는 방법 : {}
// <></> : 반드시 태그로 감싸주어야 오류가 발생하지 않음
// 기존 html의 class의 태그 이름은 className으로 사용해야 함.
// 기존 style 태그에서 '-'기호는 사용할 수 없기 때문에 대문자로 붙여줌. object 형태임