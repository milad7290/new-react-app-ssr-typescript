import { combineReducers } from 'redux';
import app from './app/reducer';
import post from './post/reducer';

const createRootReducer = combineReducers({
    app,
    post,
});

export default createRootReducer;
