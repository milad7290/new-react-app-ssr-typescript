import { produce } from 'immer';
import { PostActions, PostActionTypes, PostState, postInitialState } from './types';

export default (state: PostState = postInitialState, action: PostActions) =>
    produce(state, (draft) => {
        switch (action.type) {
            case PostActionTypes.POST_REQUEST:
                draft.isLoading = true;
                return;

            case PostActionTypes.POST_SUCCESS:
                draft.didInvalidate = false;
                draft.updatedAt = action.payload.updatedAt;
                draft.items = action.payload.items || [];
                draft.isLoading = false;
                return;

            case PostActionTypes.POST_FAILURE:
                draft.didInvalidate = true;
                draft.isLoading = false;
                return;

            case PostActionTypes.POST_INVALIDATE:
                draft.didInvalidate = true;
                return;
        }
    });
