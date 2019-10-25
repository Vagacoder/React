import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">NetFlix</Link>
          </li>
          <li>
            <Link to="/zillow">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus">Modus Create</Link>
          </li>
          <li>
            <Link to="/google">Google</Link>
          </li>
        </ul>

        <Switch>
          {/* <Route exact path="/:id" children={<Child />} /> */}
          <Route exact path="/:id" component={Child} />

        </Switch>
      </div>
    </Router>
  );
}

const Child = (props: any) => {
  let { id } = useParams();
  if (id === ""){
    id = "Home";
  }
  return (
    <div>
      <h4>ID: {id}</h4>
    </div>
  );
}

export default App;
