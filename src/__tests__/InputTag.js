import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../Input';

describe('Input Component', () => {
    test('renders input element with correct attributes', () => {
        render(<Input />);
        const input = screen.getByTitle('username');
        let checkPlaceholder = screen.getByPlaceholderText("Enter Username...")
        expect(input).toBeInTheDocument();
        expect(checkPlaceholder).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
    });

    test('testing onChange() event', () => {
        render(<Input />)
        let input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: "a" } })
        expect(input.value).toBe("a")
    })
});
