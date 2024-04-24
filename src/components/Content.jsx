// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

const Content = ({ threads }) => {
    return (
        <div className="threads-list">
            {
                threads.map((thread) => (
                    <ThreadItem key={thread.id} {...thread} />
                ))
            }
        </div>
    );
};

Content.propTypes = {
    threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default Content;