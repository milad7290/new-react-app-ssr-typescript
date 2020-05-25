import { produce } from 'immer';
import { ErrorMessage } from '../../providers/global.provider';
import { PostActions, PostActionTypes, PostState, postInitialState } from './types';

export default (state: PostState = postInitialState, action: PostActions) =>
    produce(state, (draft) => {
        switch (action.type) {
            case PostActionTypes.POST_LIST_REQUEST:
                draft.isLoading = true;
                return;

            case PostActionTypes.POST_LIST_SUCCESS:
                draft.items = [...state.items, ...action.payload];
                draft.isLoading = false;
                draft.lastOneFetched = action.payload.length < state.fetchLimit;
                return;

            case PostActionTypes.POST_LIST_FAILURE:
                draft.isLoading = false;
                draft.errors = ErrorMessage(action.payload.reason);
                return;

            case PostActionTypes.POST_UPDATE_REQUEST:
                draft.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.isUpdating = true;
                    }
                    return item;
                });
                return;

            case PostActionTypes.POST_UPDATE_SUCCESS:
                draft.items =
                    state.items.findIndex((item) => item.id === action.payload.id) > -1
                        ? state.items.map((item) => {
                              if (item.id === action.payload.id) {
                                  return action.payload;
                              }
                              return item;
                          })
                        : [action.payload, ...state.items];
                return;

            case PostActionTypes.POST_UPDATE_FAILURE:
                draft.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.isUpdating = false;
                    }
                    return item;
                });
                draft.errors = ErrorMessage(action.payload.reason);
                return;

            case PostActionTypes.POST_REMOVE_REQUEST:
                draft.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.isRemoving = true;
                    }
                    return item;
                });
                return;

            case PostActionTypes.POST_REMOVE_SUCCESS:
                draft.items = state.items.filter((item) => item.id !== action.payload.id);
                return;

            case PostActionTypes.POST_REMOVE_FAILURE:
                draft.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.isRemoving = false;
                    }
                    return item;
                });
                draft.errors = ErrorMessage(action.payload.reason);
                return;
        }
    });
