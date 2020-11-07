import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import { createStore } from '@reduxjs/toolkit';
// import { combineReducers } from '@reduxjs/toolkit';

import { Component } from 'react';

// * Reducer Composited

// * sub reducer
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      } else {
        return {
          ...state,
          completed: !state.completed
        };
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action))
    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


// * 1, how to combine multiple reducers
// const todoApp = (state={}, action)=> {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// };

// * 3, implement combinedReducers from scratch
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  };
};

// * 2, combined reducer from library
const todoApp = combineReducers({
  // todos: todos,
  todos,
  // visibilityFilter: visibilityFilter
  visibilityFilter
});




// * create store using combined reducer: todoApp
const store = createStore(todoApp);




// * test reducer ================================
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

  const action = {
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

// * end of test ==================================

let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      <div>
        <input  ref={node => {
          this.input = node;
        }}
        />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  };
}


const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <div>To Do List</div>
      <TodoApp todos={store.getState().todos} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();


