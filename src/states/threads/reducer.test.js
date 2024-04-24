/**
* test scenario for talksReducer
*
* - talkReducers function
* - should return the initial state when given by unknown action
* - should return the talks when given by RECEIVE_TALKS action
* - should return the talks with the new talk when given by ADD_TALK action
*
*/

import { describe, it, expect } from 'vitest';
import threadsReducer from "./reducer";

describe('threadsReducers function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });
    it('should return the threads when given by RECEIVE_THREADS action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'RECEIVE_THREADS',
            payload: {
                "threads": [
                    {
                        "id": "thread-1",
                        "title": "Thread Pertama",
                        "body": "Ini adalah thread pertama",
                        "category": "General",
                        "createdAt": "2021-06-21T07:00:00.000Z",
                        "ownerId": "users-1",
                        "upVotesBy": [],
                        "downVotesBy": [],
                        "totalComments": 0
                    },
                    {
                        "id": "thread-2",
                        "title": "Thread Kedua",
                        "body": "Ini adalah thread kedua",
                        "category": "General",
                        "createdAt": "2021-06-21T07:00:00.000Z",
                        "ownerId": "users-2",
                        "upVotesBy": [],
                        "downVotesBy": [],
                        "totalComments": 0
                    }
                ]
            }
        }
        // action
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual([...initialState, ...action.payload.threads])
    });
    it('should return the talks with the new talk when given by ADD_TALK action', () => {
        // arrange
        const initialState = [
            {
                "id": "thread-1",
                "title": "Thread Pertama",
                "body": "Ini adalah thread pertama",
                "category": "General",
                "createdAt": "2021-06-21T07:00:00.000Z",
                "ownerId": "users-1",
                "upVotesBy": [],
                "downVotesBy": [],
                "totalComments": 0
            },
        ];

        const action = {
            type: 'ADD_THREAD',
            payload: {
                "threads":
                    {
                        "id": "thread-1",
                        "title": "Thread Pertama",
                        "body": "Ini adalah thread pertama",
                        "category": "General",
                        "createdAt": "2021-06-21T07:00:00.000Z",
                        "ownerId": "users-1",
                        "upVotesBy": [],
                        "downVotesBy": [],
                        "totalComments": 0
                    }, 
            }
        };

        // action
        const nextState = threadsReducer(initialState, action);

        // assert
        expect(nextState).toEqual([action.payload.thread, ...initialState])
    })
});