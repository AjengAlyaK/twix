import api from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(detailThread){
    return {
        type: ActionType.RECEIVE_THREAD_DETAIL,
        payload: {
            detailThread,
        },
    };
}

function clearThreadDetailActionCreator(){
    return {
        type: ActionType.CLEAR_THREAD_DETAIL,
    };
}

function asyncReceiveThreadDetail(threadId){
    return async (dispatch) => {
        dispatch(clearThreadDetailActionCreator());
        dispatch(showLoading());
        try {
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(receiveThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearThreadDetailActionCreator,
    asyncReceiveThreadDetail,
};

