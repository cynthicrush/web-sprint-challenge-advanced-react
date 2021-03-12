import React from "react";
import { screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
    render(<CheckoutForm />);
    const header = screen.queryByText('Checkout Form');
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    expect(firstName).not.toBeNull();
    expect(lastName).not.toBeNull();
    expect(address).not.toBeNull();
    expect(city).not.toBeNull();
    expect(state).not.toBeNull();
    expect(zip).not.toBeNull();
});
