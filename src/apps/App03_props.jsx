import './App.css';
import Card2 from '../components/Card2';

export default function App() {
  const james = { id: 1, name: 'James', job: 'Back-end programmer' };
  const maria = { id: 2, name: 'Maria', job: 'React JS programmer' };
  return (
    <>
      <Card2 person={james} />
      <br />
      <Card2 person={maria} />
    </>
  );
}

// 반복적인 태그가 필요하다면 components로 파일화