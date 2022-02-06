import dictionary from './dictionary.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionary} className="App-logo" alt="dictionary" />
        <a href="#" className="btn btn-info shadow">
          Search
        </a>
      </header>
    </div>
  );
}

export default App;
