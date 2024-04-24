// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const ThreadContent = ({ title, body }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="thread-content__body">{body}</div>
        </>
    );
};

ThreadContent.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default ThreadContent;