// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Content from '../components/Content';
import Loading from '../components/Loading';
import AddNewThreadButton from '../components/AddNewThreadButton';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

const HomePage = () => {
    const {
        threads = [],
        users = [],
        authUser,
    } = useSelector((states) => states);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads());
    }, [dispatch]);

    const isLoading = threads.length === 0 || users.length === 0;

    const threadList = threads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
        authUser: authUser && authUser.id,
    }));

    const uniqueThreadList = threadList.filter(
        (thread, index, self) =>
            index ===
            self.findIndex(t => t.id === thread.id)
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Loading />
            <section className="home-page">
                <header>
                    <p>Kategori Popular</p>
                    <Header />
                </header>
                <div className="home-page__content">
                    <h2>Diskusi Tersedia</h2>
                    <Content threads={uniqueThreadList} />
                    {authUser && <AddNewThreadButton />}
                </div>
            </section>
        </>
    );
};

export default HomePage;