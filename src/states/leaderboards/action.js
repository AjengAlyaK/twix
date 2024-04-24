import api from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const ActionType = {
    RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
    return {
        type: ActionType.RECEIVE_LEADERBOARDS,
        payload: {
            leaderboards,
        },
    };
}

function asyncLeaderboards() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const leaderboards = await api.getLeaderboards();

            dispatch(receiveLeaderboardsActionCreator(leaderboards));
        } catch (error) {
            console.error('Error fetching leaderboards:', error);
        }
        dispatch(hideLoading());
    }
}

export {
    ActionType,
    receiveLeaderboardsActionCreator,
    asyncLeaderboards,
}