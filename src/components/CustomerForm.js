import React from 'react';
import {
    Form
} from 'react-bootstrap';

export const CustomerForm = () => {
    return (
        <Form id="customerForm">
            <Form.Group>
                <Form.Label htmlFor="firstName">First name</Form.Label>
                <Form.Control 
                    id="firstName"
                    type="text" 
                    name="firstName" 
                />
            </Form.Group>
        </Form>
    );
};
