import '../apps/App.css';


export default function Card() {
  const person = { name: 'Eunice', job: 'Poem' };
  return (
    <>
      <h1 style={{ backgroundColor: "beige" }}>name: {person.name}</h1>
      <hr />
      <img src="https://picsum.photos/200/200" className="photo" alt="자동생성사진" />
      <br />
      <h3>job: {person.job}</h3>
    </>
  );
}