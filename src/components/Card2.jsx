import '../apps/App.css';


export default function Card2(props) {    // props = properties 속성 what properties it has?
  const person = { name: 'Eunice', job: 'Poem' };
  return (
    <div className="card">
      <h1 style={{ backgroundColor: "coral" }}>{props.person.name}</h1>
      <hr />
      <img src={`https://picsum.photos/200/200?q=${props.person.id}`} className="photo" alt="자동생성사진" />
      <br />
      <h3>{props.person.job}</h3>
    </div>
  );
}