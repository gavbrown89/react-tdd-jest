import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { createContainer } from './DomManipulators';
import { CustomerForm } from '../components/CustomerForm';

describe('CustomerForm', () => {
    let container, render;

    const form = id => container.querySelector(`form[id="${id}"]`);
    const field = name => form('customerForm').elements[name];
    const firstNameField = () => form('customerForm').elements.firstName;
    const label = formElement => container.querySelector(`label[for="${formElement}"]`);

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
    it('renders a text input field for firstName', () => {
        render(<CustomerForm />);
        expectTextInputField(field('firstName'));
    });
    // Test firstName label
    it('renders a label for firstName', () => {
        render(<CustomerForm />);
        expect(label('firstName')).not.toBeNull();
        expect(label('firstName').textContent).toEqual('First name');
    });
    // Test assigns id to match label id
    it('assigns an id to match the label id for firstName', () => {
        render(<CustomerForm />);
        expect(firstNameField().id).toEqual('firstName');
    });
    // Test saving existing firstName value on submit
    it('saves existing firstName value on submit', async () => {
        render(<CustomerForm 
            firstName="John"
            onSubmit={({ firstName }) => {
                expect(firstName).toEqual('John')
            }}
        />
        );
        await ReactTestUtils.Simulate.submit(form('customerForm'));
    });
    // Test submitting firstName
    it('saves new value on submit', async () => {
        expect.hasAssertions();
        render(<CustomerForm 
            firstName="John"
            onSubmit={({ firstName }) => {
                expect(firstName).toEqual('Harry')
            }}            
        />    
        );
        await ReactTestUtils.Simulate.change(firstNameField(), {
            target: { value: 'Harry' }
        });
        await ReactTestUtils.Simulate.submit(form('customerForm'));
    });
});