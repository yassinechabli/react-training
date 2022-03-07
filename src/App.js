import 'assets/css/App.css';
import logo from 'assets/images/logo.jpeg';
import { Link } from 'react-router-dom';
import AppRoutes from 'routes/index';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={'/admin'}>Admin</Link>
            </li>
          </ul>
        </div>
      </nav>

      <AppRoutes />
    </div>
  );
}

export default App;
