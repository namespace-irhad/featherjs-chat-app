import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'figbird';
import { UserProvider } from './context/UserContext';
import feathersClient from './feathersClient';

import Home from './views/home';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Provider feathers={feathersClient}>
          <header className="App-header">
            <Router>
              <Home />
            </Router>
          </header>
        </Provider>
      </UserProvider>
    </div>
  );
}

export default App;
