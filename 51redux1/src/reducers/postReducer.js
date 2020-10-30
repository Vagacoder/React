import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {},
};

export default function postReducer(state = initialState, action){
    console.log('reducer');
    switch(action.type){
        case FETCH_POSTS: 
            console.log('reducer receive fetched');
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            console.log('reducer post new post');
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
};