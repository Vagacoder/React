import { createStore } from 'redux';
// import { compose } from 'redux';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// TODO add compose fro browser Redux-Devtools extension
const store = createStore(rootReducer, 
                          initialState, 
                          applyMiddleware(...middleware));

export default store;