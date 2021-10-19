import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Editor } from './components/Editor/Editor';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/dashboard" exact={true} to="/dashboard/projects" />
        <Route path="/dashboard" component={Dashboard} />
        <Route path={`/editor/:id`} component={Editor} />
        <Redirect from="/" exact={true} to="/dashboard/projects" />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
