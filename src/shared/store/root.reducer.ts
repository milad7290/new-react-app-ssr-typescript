import { combineReducers } from 'redux';
import post from './post/reducer';
import app from './app/reducer';

export default combineReducers({
    post,
    app,
});
