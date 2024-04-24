import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import commentReducer from './comment/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import isPreloadReducer from './isPreload/reducer';

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        users: usersReducer,
        threads: threadsReducer,
        threadDetail: threadDetailReducer,
        comment: commentReducer,
        loadingBar: loadingBarReducer,
        leaderboards: leaderboardsReducer,
    },
});

export default store;