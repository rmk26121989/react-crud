import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
const updateAPIData = () => {
    console.log(id);
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
    const response = axios.put(`https://6304c958761a3bce77ef94db.mockapi.io/Users/${id}`, {
        firstName,
         lastName,
         checkbox
	});
    console.log(response);
    if (response) {
        window.location = "/";
      }
}
useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>

            </Form>
        </div>
    )
}