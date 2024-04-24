// eslint-disable-next-line no-unused-vars
import React from 'react';

const CommentFooter = () => {
    return (
        <>
            <button type="button" className="comment-upvote__button"><svg
                stroke="currentColor" fill="currentColor" strokeWidth="0"
                viewBox="0 0 24 24" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                <path
                    d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z">
                </path>
            </svg><span className="comment-upvote__label">0</span>
            </button>
            <button type="button" className="comment-downvote__button"><svg stroke="currentColor"
                fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                <path
                    d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z">
                </path>
            </svg><span className="comment-downvote__label">0</span>
            </button>
        </>
    );
};

export default CommentFooter;