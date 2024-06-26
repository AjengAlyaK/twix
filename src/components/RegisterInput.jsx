// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const RegisterInput = ({ register }) => {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    return (
        <form className="register-input" action="">
            <input type="text" value={name} onChange={onNameChange} placeholder="Name" />
            <input type="email" value={email} onChange={onEmailChange} placeholder="Email" />
            <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
            <button type="button" onClick={() => register({ name, email, password })}>Register</button>
        </form>
    );
};

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;