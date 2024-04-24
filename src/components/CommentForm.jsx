// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ addComment, threadId }) => {
    const [content, setContent] = useState('');
    console.log(typeof (threadId));
    console.log(content);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (content.trim()) {
            addComment({ threadId, content });
            setContent('');
        } else {
            alert('Please enter a comment');
        }
    };

    const handleChange = (event) => {
        setContent(event.target.innerText);
    };

    return (
        <form onSubmit={handleSubmit} className="comment-input">
            <input type="hidden" value={threadId} />
            <div className="comment-input__field" contentEditable="true" onInput={handleChange}></div>
            <button type="submit">Kirim</button>
        </form>
    );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    threadId: PropTypes.string.isRequired,
}
export default CommentForm;