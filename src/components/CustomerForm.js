import React, { useState } from 'react';
import {
    Form
} from 'react-bootstrap';

export const CustomerForm = ({ firstName, onSubmit }) => {
    const [customer, setCustomer] = useState({ firstName });

    const handleFirstNameChange = ({ target }) =>
        setCustomer(customer => ({
            ...customer,
            firstName: target.value
        }));

    return (
        <Form id="customerForm" onSubmit={() => onSubmit(customer)}>
            <Form.Group>
                <Form.Label htmlFor="firstName">First name</Form.Label>
                <Form.Control 
                    id="firstName"
                    type="text" 
                    name="firstName" 
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </Form.Group>
        </Form>
    );
};
