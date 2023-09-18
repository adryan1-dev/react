import './App.css';
import Evento from './components/Evento';
import Cadastro from './components/Cadastro';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Cadastro/>
    </div>
  );
}

export default App;
