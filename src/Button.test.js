import '@testing-library/jest-dom';
import Button from "./Button"
import { fireEvent, render, screen } from '@testing-library/react';

describe("testing button click", () => {
    test('click testing', () => {
        render(<Button />)
        const btn = screen.getByRole("button")
        fireEvent.click(btn)
        expect(screen.getByText("API Data onClick!")).toBeInTheDocument();
    })
})