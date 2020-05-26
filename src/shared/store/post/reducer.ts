import { produce } from 'immer';
import { ErrorMessage } from '../../providers/global.provider';
import { PostActions, PostActionTypes, postInitialState, PostState } from './types';

export default (state: PostState = postInitialState, action: PostActions) =>
    produce(state, (draft) => {
        switch (action.type) {
            case PostActionTypes.POST_LIST_REQUEST:
                if (state.updatedAt) {
                    draft.isLoadingMore = true;
                } else {
                    draft.isLoading = true;
                }
                return;

            case PostActionTypes.POST_LIST_SUCCESS:
                draft.items = [...state.items, ...action.payload.items];
                draft.isLoading = false;
                draft.isLoadingMore = false;
                draft.lastOneFetched = action.payload.items.length < state.fetchLimit;
                draft.updatedAt = action.payload.updatedAt;
                return;

            case PostActionTypes.POST_LIST_FAILURE:
                draft.isLoading = false;
                draft.errors = ErrorMessage(action.payload.reason);
                return;

            case PostActionTypes.POST_ADD_REQUEST:
                draft.isLoading = true;
                return;

            case PostActionTypes.POST_ADD_SUCCESS:
                if (state.updatedAt) {
                    draft.items = [action.payload, ...state.items];
                }
                state.isLoading = false;
                return;

            case PostActionTypes.POST_ADD_FAILURE:
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
                draft.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                });
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
