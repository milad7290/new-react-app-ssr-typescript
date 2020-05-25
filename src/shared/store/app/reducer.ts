import { produce } from 'immer';
import { AppActionTypes, AppState, SETLOCALE } from './types';

export const initialState = Object.freeze<AppState>({
    locale: 'en_US',
});

export default (state: AppState = initialState, action: AppActionTypes): AppState =>
    produce(state, (draft) => {
        switch (action.type) {
            case SETLOCALE: {
                draft.locale = action.payload;
                return;
            }
        }
    });
