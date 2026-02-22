import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../Input';

describe('Input Component', () => {
    test('renders input element with correct attributes', () => {
        console.log("InputTag test 1");        
        render(<Input />);
        const input = screen.getByTitle('username');
        let checkPlaceholder = screen.getByPlaceholderText("Enter Username...")
        expect(input).toBeInTheDocument();
        expect(checkPlaceholder).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
    });

    test('testing onChange() event', () => {
        console.log("InputTag test 2");
        render(<Input />)
        let input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: "a" } })
        expect(input.value).toBe("a")
    })
});


// beforeAll(() => {
//     console.log("Before all run");
// })
// beforeEach(() => {
//     console.log("Before each run");
// })
// afterAll(() => {
//     console.log("After all run");
// })
afterEach(() => {
    console.log("After each run");
})