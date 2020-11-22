import React, { useEffect } from 'react';
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

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
}


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


// * view components ==============================
// const FilterLink = ({ filter, currentFilter, onClick, children }) => {

//   if (filter === currentFilter) {
//     return (<span>{children}</span>);
//   }

//   return (
//     <a href='#input'
//       onClick={e => {
//         e.preventDefault();
//         onClick(filter);
//       }}
//     >
//       {children}
//     </a>
//   );
// }

const FilterLink = (props)=> {

  const state = store.getState();

  // ? Is this subscriptiob ok?
  // ? see 22. Extracting Container Components (FilterLink), last section
  useEffect(()=>{
    console.log('sub');
    const unsubsribe = store.subscribe(()=> {})
    return ()=> {
      console.log('unsub');
      unsubsribe();
    }
  });

  return (
    <Link
    active={
      props.filter === state.visibilityFilter
    }
    onClick={()=> store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: props.filter
    })}
    >
      {props.children}
    </Link>
  );
}

// const Footer = ({
//   visibilityFilter,
//   onFilterClick
// }) => {
//   return (
//     <p>
//       <FilterLink
//         filter='SHOW_ALL'
//         currentFilter={visibilityFilter}
//         onClick={onFilterClick}
//       >
//         All
//       </FilterLink>
//       {', '}
//       <FilterLink
//         filter='SHOW_ACTIVE'
//         currentFilter={visibilityFilter}
//         onClick={onFilterClick}
//       >
//         Active
//       </FilterLink>
//       {', '}
//       <FilterLink
//         filter='SHOW_COMPLETED'
//         currentFilter={visibilityFilter}
//         onClick={onFilterClick}
//       >
//         Completed
//       </FilterLink>
//     </p>
//   );
// };

const Footer = ()=>{
  return (
  <p>
    Show:{' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>);
}

const Link = ({ active, children, onClick})=>{
  if(active){
  return <span>{children}</span>
  }

  return (
    <a href='#input'
    onClick={ e => {
      e.preventDefault();
      onClick();
    }}>
      {children}
    </a>
  );
};

const Todo = ({
  onClick,
  completed,
  text
}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  );
};

const TodoList = ({
  todos,
  onTodoClick
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        );
      })}
    </ul>
  );
}


class VisibleTodoList extends Component {
  componentDidMount(){
    this.unsubsribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    // const props = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }}
      />
    );
  }
}


// const AddTodo = ({ onAddClick }) => {
//   let input;
//   return (
//     <div id='input'>
//       <input ref={node => {
//         input = node;
//       }} />
//       <button onClick={() => {
//         onAddClick(input.value);
//         input.value = '';
//       }}>
//         Add Todo
//       </button>
//     </div>
//   );
// }

const AddTodo = ()=>{
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={()=> {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text:input.value
        });
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
}

// const TodoApp = ({
//   todos,
//   visibilityFilter
// }) => {
//   return (
//     <div>
//       <AddTodo
//         onAddClick={(text) => {
//           store.dispatch({
//             type: 'ADD_TODO',
//             id: nextTodoId++,
//             text
//           })
//         }}
//       />
//       <TodoList
//         todos={getVisibleTodos(todos, visibilityFilter)}
//         onTodoClick={(id) => {
//           store.dispatch({
//             type: 'TOGGLE_TODO',
//             id
//           })
//         }}
//       />
//       <Footer
//         visibilityFilter={visibilityFilter}
//         onFilterClick={(filter) => {
//           store.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter
//           })
//         }}
//       />
//     </div>
//   )
// };

const TodoApp = () => {
  return (<div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>);
}

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <div>To Do List</div>
      <TodoApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();


