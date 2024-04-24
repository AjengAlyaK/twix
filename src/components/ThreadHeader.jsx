// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const ThreadHeader = ({ category }) => {
    return (
        <p className="thread-header__category">#{category}</p>
    );
};

ThreadHeader.propTypes = {
    category: PropTypes.string.isRequired,
};

export default ThreadHeader;