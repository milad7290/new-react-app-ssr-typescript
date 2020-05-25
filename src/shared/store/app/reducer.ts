import { produce } from 'immer';
import { AppActions, AppState, AppActionTypes, appInitialState } from './types';

export default (state: AppState = appInitialState, action: AppActions): AppState =>
    produce(state, (draft) => {
        switch (action.type) {
            case AppActionTypes.SETLOCALE: {
                draft.locale = action.payload;
                return;
            }
        }
    });
