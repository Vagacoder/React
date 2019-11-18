import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Person from './Person';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Person />
        </Route>
        <Route path="/">
          <Redirect to="/0" />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
