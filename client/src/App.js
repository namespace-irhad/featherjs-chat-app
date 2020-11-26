import './App.css';
import Home from './views/home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'figbird';
import feathersClient from './feathersClient';

function App() {
  return (
    <div className="App">
      <Provider feathers={feathersClient}>
        <header className="App-header">
          <Router>
            <Home />
          </Router>
        </header>
      </Provider>
    </div>
  );
}

export default App;
