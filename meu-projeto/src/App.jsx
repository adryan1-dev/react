import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Adryan'
  const newName = name.toUpperCase()

  function sum(a,b){
    return a+b
  }
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>A soma é igual a: {sum(2,4)}</p>
      <img src= {url} alt="" />
      <HelloWorld/>
    </div>
  );
}

export default App;
