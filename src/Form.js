import React from 'react';

const Form = () => {
    return (
    <form>
        <label>
            Username:
            <input type="text" id="name" name="name" />
        </label>
        <label>
            Email:
            <input type="text" id="name" name="motto" />
        </label>
        <label>
            Role:
            <input type="text" id="name" name="role" />
        </label>
            <button type="submit">Submit!</button>
    </form>
)
};

export default Form;