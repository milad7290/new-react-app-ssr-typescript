import { combineReducers } from 'redux';
import app from './reducer';

const appReducer = combineReducers({
    app,
});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;
