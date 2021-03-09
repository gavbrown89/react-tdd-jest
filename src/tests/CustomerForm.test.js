import React from 'react';
import { createContainer } from './DomManipulators';
import { CustomerForm } from '../components/CustomerForm';

describe('CustomerForm', () => {
    let container, render;

    const form = id => container.querySelector(`form[id="${id}"]`);

    beforeEach(() => {
        ({ render, container } = createContainer());
    });

    it('renders a form', () => {
        render(<CustomerForm />);
        expect(form('customerForm')).not.toBeNull();
    });
});