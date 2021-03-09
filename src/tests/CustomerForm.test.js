import React from 'react';
import { createContainer } from './DomManipulators';
import { CustomerForm } from '../components/CustomerForm';

describe('CustomerForm', () => {
    let container, render;

    const form = id => container.querySelector(`form[id="${id}"]`);
    const field = name => form('customerForm').elements[name];
    
    // Check type of input field is text
    const expectTextInputField = formElement => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
    }

    beforeEach(() => {
        ({ render, container } = createContainer());
    });

    // Test form is not null
    it('renders a form', () => {
        render(<CustomerForm />);
        expect(form('customerForm')).not.toBeNull();
    });
    // Test firstName input field exists
    it('renders a text input field', () => {
        render(<CustomerForm />);
        expectTextInputField(field('firstName'));
    });
});