import React from 'react';

const AddUser = () => {
    const handleSubmit = event => {
        event.preventDefault()
        // const name = event.target.name.value;
        // const email = event.target.email.value;

        // const user = { name: name, email: email };

        //send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: event.target.name.value, email: event.target.email.value })
        })
            .then(res => res.json())
            .then(data => console.log('success', data))
    }
    return (
        <div>
            <h2>Please Add a New User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Name' required /> <br />
                <input type="email" name="email" id="" placeholder='Email' required /> <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;