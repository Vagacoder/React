import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { createStore} from 'redux';
import Posts from './components/Posts';
import Postform from './components/Postform';


function App() {


  // // Create a Redux store holding the state of your app.
  // // Its API is { subscribe, dispatch, getState }.
  // let store = createStore(Counter);

  // store.subscribe(()=>{console.log(store.getState())});

  // console.log(store);
  // store.dispatch({type: 'INCREMENT'});
  // store.dispatch({type: 'INCREMENT'});
  // store.dispatch({type: 'DECREMENT'});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1>Redux Simple example</h1>
        <h4>Redux</h4>
        <Postform />
        <hr />
        <Posts />
      </div>
    </div>
  );
}



export default App;
