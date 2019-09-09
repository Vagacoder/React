import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  var auth = (Math.random() > 0.5);
  
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} isAuthed={auth} />} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        
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
    </ul>
  );
}

function Home() {
  return <h2>Home</h2>;
}

const Dashboard = (props) => {
  if (props.isAuthed){
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

export default App;
