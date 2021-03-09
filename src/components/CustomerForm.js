import React from 'react';
import {
    Form
} from 'react-bootstrap';

export const CustomerForm = () => {
    return (
        <Form id="customerForm">
            <Form.Control type="text" name="firstName" />
        </Form>
    );
};
