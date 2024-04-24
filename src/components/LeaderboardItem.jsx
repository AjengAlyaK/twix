// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardItem = ({ user, score, name }) => {
    console.log(user);
    return (
        <div className="leaderboard-item">
            <div className="leaderboard-item__user-info">
                <img src={user.avatar} alt={user.name} />
                {/* {
                    user.name == name ? <p>{user.name} <em>(Anda)</em></p> :  <p>{user.name}</p>                
                } */}
                {
                    name ? (
                        user.name === name ? (
                            <p>{user.name} <em>(Anda)</em></p>
                        ) : <p>{user.name}</p>
                    ) : <p>{user.name}</p>
                }

            </div>
            <p className="leaderboard-item__score">{score}</p>
        </div>

    );
};

LeaderboardItem.propTypes = {
    user: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired,
    name: PropTypes.string,
};

export default LeaderboardItem;