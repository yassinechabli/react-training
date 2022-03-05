import logo from 'assets/images/better_way.svg';
import 'assets/css/App.css';
import Hello from "components/Hello/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello fullName="chabli mohammed yassine"/>
          <hr/>
        <Hello fullName="chabli mohammed yassine" username="konnetrofast13"/>
      </header>
    </div>
  );
}

export default App;
