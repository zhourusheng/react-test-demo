import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavPage from './view/NavPage'
import TodoPage from './view/TodoPage'
import FormPage from './view/FormPage'
import Game from './view/game/Game'
import MixinPage from './view/mixinPage/MixinPage'
import StateLess from './view/HOC/Stateless'
import NewClass from './view/HOC/NewClass'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NavPage} />
        <Route exact path="/HocStateLess" component={StateLess} />
        <Route exact path="/NewClass" component={NewClass} />
        <Route exact path="/mixin" component={MixinPage} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/form" component={FormPage} />
        <Route exact path="/page" component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default App;
