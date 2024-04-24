// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

const CommentItemHeader = ({ owner, createdAt }) => {
    return (
        <>
            <div className="comment-item__owner-info">
                <img src="https://ui-avatars.com/api/?name=cok&amp;background=random" alt="{owner.name}" />
                <p>{owner.name}</p>
            </div>
            <p className="posted-at">{postedAt(createdAt)}</p>
        </>
    );
};

CommentItemHeader.propTypes = {
    owner: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default CommentItemHeader;