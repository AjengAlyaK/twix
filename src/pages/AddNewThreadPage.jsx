// eslint-disable-next-line no-unused-vars
import React from 'react';
import ThreadInput from '../components/ThreadInput';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const AddNewThreadPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onAddThread = ({ title, body, category }) => {
        dispatch(asyncAddThread({ title, body, category }));
        navigate('/');
    };

    return (
        <>
            <Loading />
            <div className="new-thread-page">
                <h2>Buat Diskusi Baru</h2>
                <ThreadInput addThread={onAddThread} />
            </div>
        </>
    );
};

export default AddNewThreadPage;