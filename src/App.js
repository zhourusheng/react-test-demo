import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TodoPage from './view/TodoPage'
import FormPage from './view/FormPage'
import Game from './view/game/Game'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/form" component={FormPage} />
        <Route exact path="/page" component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default App;
