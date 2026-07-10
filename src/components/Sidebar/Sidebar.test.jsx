import { screen, render } from '@testing-library/react';
import Sidebar from './Sidebar';

// Test 1: Sidebar renders with expected values 
describe('sidebar', () => {
    it('has correct content', () => {
        render(<Sidebar />);
        // assert the title is correct
        expect(screen.getByRole('heading', { name: 'Kyle Jaesu Akuya'})); 
        // assert the links are correct
        expect(screen.getByRole('link', { name: 'About Me'})).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Experience'})).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Projects'})).toBeInTheDocument();
        // assert the email is correct
        expect(screen.getByRole('link', { name: 'Email'})).toHaveAttribute('href', 'mailto:mazterk968@gmail.com');
    })
});