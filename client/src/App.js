import './App.css';
import Home from './views/home';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home />
        </Router>
      </header>
    </div>
  );
}

export default App;
