import React from 'react';

const ThemeContext = React.createContext('light');

const UserContext = React.createContext({
  name: 'Guest',
});

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
};

const Sidebar = () => {
  return (
    <h4>Sidebar here</h4>
  );
}

const ProfilePage = (props) => {
  return (
    <div>
    <hr/>
    <h5>ProfilePage</h5>
      <div>This is first Context: user, whose value is <b>{props.user}</b></div>
      <div>This is second Context: theme, whose value is <b>{props.theme}</b></div>
    </div>
  );
}

const Content = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
};

function App(props) {

  const signedInUser = 'Alex';
  const theme = 'oceanic blue';

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
