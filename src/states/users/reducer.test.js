/**
* test scenario for talksReducer
*
* - usersReducers function
* - should return the initial state when given by unknown action
* - should return the talks when given by RECEIVE_USERS action
*
*/

import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

describe('usersReducers function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = usersReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });
    it('should return the talks when given by RECEIVE_USERS', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'RECEIVE_USERS',
            payload: {
                "users": [
                    {
                        "id": "john_doe",
                        "name": "John Doe",
                        "email": "john@example.com",
                        "avatar": "https://generated-image-url.jpg"
                    },
                    {
                        "id": "jane_doe",
                        "name": "Jane Doe",
                        "email": "jane@example.com",
                        "avatar": "https://generated-image-url.jpg"
                    },
                    {
                        "id": "fulan",
                        "name": "Si Fulan",
                        "email": "fulan@example.com",
                        "avatar": "https://generated-image-url.jpg"
                    }
                ]
            }
        }

        // action
        const nextState = usersReducer(initialState, action);

        // receive
        expect(nextState).toEqual([...initialState, ...action.payload.users])
    })
})