import logo from '../src/assets/images/better_way.svg'; // relative path ?
import '../src/assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and enjoy coding.
        </p>
        <a
          className="App-link"
          href="https://github.com/yassinechabli/react-training"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
