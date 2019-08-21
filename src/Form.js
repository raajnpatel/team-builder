import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={event => props.handleForm(event)}>
            <label>
                Name:
                <input
                    onChange={event => props.handleChange(event)}
                    type="text"
                    name="name"
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    onChange={event => props.handleChange(event)}
                    type="email"
                    name="email"
                />
            </label>
            <br />
            <label>
                Role:
                <input
                    onChange={event => props.handleChange(event)}
                    type="text"
                    name="role"
                />
            </label>
            <br />
            <button>Submit!</button>
        </form>
)
};

export default Form;