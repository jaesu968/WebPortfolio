import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './ThemeToggle.jsx';

describe('ThemeToggle', () => {
    beforeEach(() => {
        // Start each test from a clean slate so theme state never leaks between tests.
        window.localStorage.clear();
        document.documentElement.removeAttribute('data-theme');
    });

    it('renders a button', () => {
        render(<ThemeToggle />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('defaults to dark mode when no theme has been set', () => {
        render(<ThemeToggle />);
        // In dark mode the button offers to switch TO light mode.
        expect(
            screen.getByRole('button', { name: /switch to light mode/i })
        ).toBeInTheDocument();
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
        expect(window.localStorage.getItem('theme')).toBe('dark');
    });

    it('reads the initial theme from the data-theme attribute', () => {
        document.documentElement.setAttribute('data-theme', 'light');
        render(<ThemeToggle />);
        // Starting in light mode, the button offers to switch TO dark mode.
        expect(
            screen.getByRole('button', { name: /switch to dark mode/i })
        ).toBeInTheDocument();
    });

    it('toggles from dark to light on click', async () => {
        const user = userEvent.setup();
        render(<ThemeToggle />);

        await user.click(screen.getByRole('button'));

        expect(
            screen.getByRole('button', { name: /switch to dark mode/i })
        ).toBeInTheDocument();
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        expect(window.localStorage.getItem('theme')).toBe('light');
    });

    it('toggles back to dark on a second click', async () => {
        const user = userEvent.setup();
        render(<ThemeToggle />);

        const button = screen.getByRole('button');
        await user.click(button);
        await user.click(button);

        expect(
            screen.getByRole('button', { name: /switch to light mode/i })
        ).toBeInTheDocument();
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
        expect(window.localStorage.getItem('theme')).toBe('dark');
    });

    it('persists the chosen theme to localStorage', async () => {
        const user = userEvent.setup();
        render(<ThemeToggle />);

        await user.click(screen.getByRole('button'));

        expect(window.localStorage.getItem('theme')).toBe('light');
    });
});
