// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ThreadInput = ({ addThread }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (event) => {
        setTitle(String(event.target.value));
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.innerHTML);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim() && category.trim() && body.trim()) {
            addThread({ title, body, category });
            setTitle('');
            setCategory('');
            setBody('');
            document.querySelector('.input-body').innerHTML = '';
        } else {
            alert('Please fill out all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="new-thread-input">
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Judul" />
            <input type="text" value={category} onChange={handleCategoryChange} placeholder="Kategori" />
            <div className="input-body" contentEditable="true" onInput={handleBodyChange}></div>
            <button type="submit">Buat</button>
        </form>
    );
};

ThreadInput.propTypes = {
    addThread: PropTypes.func.isRequired,
};

export default ThreadInput;