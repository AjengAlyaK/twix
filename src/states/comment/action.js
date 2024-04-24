import api from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const ActionType = {
    ADD_COMMENT: 'ADD_COMMENT',
};

function addCommentActionCreator(comment) {
    return {
        type: ActionType.ADD_COMMENT,
        payload: {
            comment,
        },
    };
}

function asyncAddComment({ threadId, content }) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const comment = await api.createComment({ threadId, content });
            dispatch(addCommentActionCreator(comment));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

export {
    ActionType,
    addCommentActionCreator,
    asyncAddComment
};