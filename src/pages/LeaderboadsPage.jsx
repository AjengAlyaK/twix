// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardItem from '../components/LeaderboardItem';
import { asyncLeaderboards } from '../states/leaderboards/action';
import Loading from '../components/Loading';

const LeaderboadsPage = () => {
    const {
        leaderboards = [],
        authUser,
    } = useSelector((states) => states);

    const { name } = authUser || { name: null };
    console.log(typeof(name));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncLeaderboards());
    }, [dispatch]);

    return (
        <>
            <Loading />
            <div className="board-page">
                <h2>Klasmen Pengguna Aktif</h2>
                <div className="leaderboards-list">
                    <header>
                        <p className="leaderboards-list__user-label">Pengguna</p>
                        <p className="leaderboards-list__score-label">Skor</p>
                    </header>
                    {
                        leaderboards.slice(0, 10).map((leaderboard) => (
                            <LeaderboardItem key={leaderboard.id} {...leaderboard} name={name}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default LeaderboadsPage;