// eslint-disable-next-line no-unused-vars
import React from 'react';
import CommentItemHeader from './CommentItemHeader';
import CommentFooter from './CommentFooter';
import PropTypes from 'prop-types';

const CommentItem = ({content, createdAt, owner}) => {
    return (
        <div className="comment-item">
            <header className="comment-item__header">
                <CommentItemHeader createdAt={createdAt} owner={owner} />
            </header>
            <p>{content}</p>
            <footer>
                <CommentFooter />
            </footer>
        </div>
    );
};

CommentItem.propTypes = {
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
}

export default CommentItem;