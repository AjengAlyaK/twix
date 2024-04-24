// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import Loading from '../components/Loading';

const LoginPage = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogin = async ({ email, password }) => {
        await dispatch(asyncSetAuthUser({ email, password }));
        Navigate('/');
    };

    return (
        <>
            <Loading />
            <section className="login-page">
                <h2>Login</h2>
                <LoginInput login={onLogin} />
                <p className="register-info">Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
            </section>
        </>
    );
};

export default LoginPage;