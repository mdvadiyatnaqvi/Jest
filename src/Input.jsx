import { useState } from 'react';

const Input = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleButton = () => {
        setData("Updated Successfully!!!")
    }

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
            <button data-testid="updated-btn" onClick={handleButton}>Update</button>
            <p>{data}</p>
        </div>
    );
};

export default Input;
