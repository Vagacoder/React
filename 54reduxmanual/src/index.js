import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// * Reducer
const counter = (state = 0, action) => {

  // * ES5 style code
  // if(typeof state === 'undefined'){
  //   return 0;
  // }

  // if(action.type === 'INCREMENT'){
  //   return state + 1;
  // } else if(action.type === 'DECREMENT'){
  //   return state - 1;
  // }else {
  //   return state;
  // }

  // * ES6 style code
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// * Manual implementation of createStore
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    // * update state
    state = reducer(state, action);

    // ! call all listeners
    listeners.forEach(l => l());
  };

  const subscribe = (listener) => {
    // * add new listener
    listeners.push(listener);

    // ! return a function to unsubscribe new listener
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
}


// * store
const store = createStore(counter);


const onIncrement = ()=> {
  store.dispatch({ type:'INCREMENT' });
}

const onDecrement = ()=> {
  store.dispatch({ type:'DECREMENT' });
}

// * refactor Counter component
const Counter = ({ value }) => {
  return (
    <React.StrictMode>
      <h1>Counter with Manual Redux</h1>
      <div>{`Counts: click number to increase`}</div>
      <div id='counterDisplay'>{value}</div>
      <div>
        <button id='increase' onClick={onIncrement}>INCREASE</button>
        <button id='decrease' onClick={onDecrement}>DECREASE</button>
      </div>
      <br />
      <div>
        <button id='unsubscribe'>unsubscribe</button>
      </div>
    </React.StrictMode>)
}


const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} />,
    document.getElementById('root')
  );
}

const unsubscribeRender = store.subscribe(render);


render();

// document.getElementById('increase').addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });

// document.getElementById('decrease').addEventListener('click', () => {
//   store.dispatch({ type: 'DECREMENT' });
// });

document.getElementById('unsubscribe').addEventListener('click', () => {
  unsubscribeRender();
}); 