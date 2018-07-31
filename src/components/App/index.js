import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../Main';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
