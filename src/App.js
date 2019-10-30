import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TodoPage from './view/TodoPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/page" component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default App;
