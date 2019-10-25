import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  const [auth, setAuth] = useState(true);

  const toggleAuth = () => {
    setAuth(!auth);
  }

  return (
    <Router>
      <div>
        <button onClick={toggleAuth}>Click to toggle login</button>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} isAuthed={auth} />} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/tacos" component={Tacos} />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/Tacos">Tacos</Link>
      </li>
    </ul>
  );
}

function Home() {
  return <h2>Home</h2>;
}

const Dashboard = (props) => {
  if (props.isAuthed) {
    return (
      <div>
        This is Dashboard
      </div>
    );
  } else {
    return (
      <div> PLease login </div>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

//==================
function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

// ==============
const Tacos = ({ match }) => {
  return (
    <div>
      <h4>Menu for Tacos</h4>
      <ul>
        <li>
          <Link to={`${match.url}/carnitas`}>Carnitas</Link>
        </li>
        <li>
          <Link to={`${match.url}/fishtacos`}>Fish Tacos</Link>
        </li>
      </ul>
      <br />
      <div>
        <Route exact path={match.url} render={() => {return <div>Click links above to select</div>}} />
        <Route path={match.url + "/carnitas"} component={Carnitas} />
        <Route path={match.url + "/fishtacos"} component={Fishtacos} />
      </div>
    </div>
  );
};

const Carnitas = () => {
  return (
    <div>
      This is Carnitas.
    </div>
  );
};

const Fishtacos = () => {
  return (
    <div>
      This is Fish Tacos.
    </div>
  );
}

export default App;
