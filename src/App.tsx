import React from 'react';

import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Editor } from './components/Editor/Editor';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Redirect from="/dashboard" exact={true} to="/dashboard/projects" />
        <Route path="/dashboard" component={Dashboard} />
        <Route path={`/editor/:id`} component={Editor} />
        <Redirect from="/" exact={true} to="/dashboard/projects" />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
