// eslint-disable-next-line no-unused-vars
import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../states/users/action';
import Loading from '../components/Loading';

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onRegister = ({ name, email, password }) => {
        dispatch(asyncRegisterUser({ name, email, password }));
        navigate('/');
    };

    return (
        <>
            <Loading />
            <section className="register-page">
                <h2>Register Page</h2>
                <RegisterInput register={onRegister} />
            </section>
        </>
    );
};

export default RegisterPage;