import './App.css';
import React from 'react';

import Nav from './components/Nav';
import Aulas from './components/Aulas';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Aula from './components/Aula';
import Assistir from './components/Assistir';
import AuthButton from './components/AuthButton';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loginReducer from './reducers/loginReducer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PrivateRoute from './components/PrivateRoute';
import AcessoNegado from './components/AcessoNegado';

const store = createStore(loginReducer)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/sobre">
                <Sobre />
              </Route>
              <Route exact path="/aulas/:id">
                <Aula></Aula>
              </Route>
              <PrivateRoute path="/aulas">
                <Aulas />
              </PrivateRoute>
              <Route path="/assistir">
                <Assistir />
              </Route>
              <Route path="/negado">
                <AcessoNegado/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </React.StrictMode>
      </Router>
    </Provider>
  );
}

export default App;
