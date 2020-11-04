import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import  { createStore } from '@reduxjs/toolkit';


// * Reducer Composited
const todoApp = (state={}, action)=> {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};


// * sub reducer
const todos = (state=[], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action) 
      ];
    case 'TOGGLE_TODO':
      return state.map((t)=> todo(t, action))
    default:
      return state;
  }
}

const todo = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id){
        return state;
      }else{
        return {
          ...state,
          completed: !state.completed
        };
      };
    default:
      return state;
  }
};

const visibilityFilter = ( state = 'SHOW_ALL', action ) => {
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


// * test reducer
const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0, 
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false,
    }
  ];

  const action ={
    type: 'TOGGLE_TODO',
    id: 1
  }

  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: true
    }
  ]

  let result = todoApp(stateBefore, action);
  console.log('Compare result with stateAfter');
  console.log('result:', result);
  console.log('stateAfter', stateAfter);
}

testToggleTodo();

const store = createStore(todoApp);

ReactDOM.render(
  <React.StrictMode>
    <div>To Do List</div>
  </React.StrictMode>,
  document.getElementById('root')
);

