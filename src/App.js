import 'assets/css/App.css';
import logo from 'assets/images/logo.jpeg';
import AppRoutes from 'routes';

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" />
      <AppRoutes />
    </div>
  );
}

export default App;
