import logo from '../logo.svg';
import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';

function App() {

  return (
    <>
      <CardInput name={'Eunice'} />
      <br />
      <CardInput2 name={'maria'} email={'maria@gmail.com'} />
    </>
  );
}

export default App;