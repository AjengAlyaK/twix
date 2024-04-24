/**
* test scenario for talksReducer
*
* - commentsReducers function
* - should return the initial state when given by unknown action
* - should return the comments with the new comment when given by ADD_COMMENT action
*
*/

import { describe, it, expect } from 'vitest';
import commentReducer from './reducer';

describe('commentReducer function', ()=> {
    it('should return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = commentReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });
    it('should return the comments with the new comment when given by ADD_COMMENT', ()=> {
        // arrange
        const initialState = [
            {
                "id": "comment-1",
                "content": "Ini adalah komentar pertama",
                "createdAt": "2021-06-21T07:00:00.000Z",
                "upVotesBy": [],
                "downVotesBy": [],
                "owner": {
                    "id": "users-1",
                    "name": "John Doe",
                    "email": "john@example.com",
                }
            }
        ];

        const action = {
            type: "ADD_COMMENT",
            payload: {
                "comment": {
                    "id": "comment-1",
                    "content": "Ini adalah komentar pertama",
                    "createdAt": "2021-06-21T07:00:00.000Z",
                    "upVotesBy": [],
                    "downVotesBy": [],
                    "owner": {
                        "id": "users-1",
                        "name": "John Doe",
                        "email": "john@example.com"
                    },
                }
            }
        };

        // action
        const nextState = commentReducer(initialState, action);

        // assert
        expect(nextState).toEqual([...initialState, action.payload.comment])
    })
});