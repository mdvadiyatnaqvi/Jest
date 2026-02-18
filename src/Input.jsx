import React, { useState } from 'react';

const Input = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Enter Username..."
                data-testid="username-input"
                title="username"
            />
            <p data-testid="char-count">{value.length} characters</p>
        </div>
    );
};

export default Input;
