import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './root.reducer';
import { RootState, RootActions } from './root.types';

type StoreParams = {
    initialState?: { [key: string]: any };
    middleware?: any[];
};

export const configureStore = ({ initialState, middleware = [] }: StoreParams) => {
    const devtools =
        typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

    const composeEnhancers = devtools || compose;

    const store = createStore(
        RootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                ...[thunk as ThunkMiddleware<RootState, RootActions>].concat(...middleware)
            )
        )
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./root.reducer', () =>
                store.replaceReducer(require('./root.reducer').default)
            );
        }
    }

    return store;
};

export default configureStore;
