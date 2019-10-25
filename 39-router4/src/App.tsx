import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import PublicPage from './PublicPage';
import PrivatePage from './PrivatePage';
import LoginPage from './LoginPage';


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: any) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb: any) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = () => {

  let history = useHistory();

  return (
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome! {" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}>
          Sign out
        </button>
      </p>
    ) : (
        <p>
          You are not logged in.
        <button onClick={() => { fakeAuth.authenticate(undefined) }}>Sign in</button>
        </p>
      )
  );
}

const PrivateRouter = ({ children, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return (
        (fakeAuth.isAuthenticated)
        ? (
          children
        ) 
        : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          ))
      }}
    />
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage fakeAuth={fakeAuth} />
          </Route>
          <PrivateRouter path="/private">
            <PrivatePage />
          </PrivateRouter>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
