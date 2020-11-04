import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// * Reducer
const counter = (state=0, action)=>{

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
  switch (action.type){
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
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return ()=> {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
}


// * store
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <h1>Counter with Manual Redux</h1>
      <div id='counterDisplay'>{store.getState()}</div>
    </React.StrictMode>,
  document.getElementById('root')
  );
}

store.subscribe(render);


render();
  
document.getElementById('counterDisplay').addEventListener('click', ()=> {
  store.dispatch({type:'INCREMENT'});
});