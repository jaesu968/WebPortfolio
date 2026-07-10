import { render, screen } from '@testing-library/react';
import Resume from './Resume';

// Test 1: make sure resume link works 
describe('resume', () => {
    it('renders heading, button, and a PDF link', () => {
        render(<Resume />);
        // assert the title 
        expect(screen.getByRole('heading', { name: 'Resume' })).toBeInTheDocument();
        // assert the button 
        expect(screen.getByRole('button', { name: 'View Resume' })).toBeInTheDocument();
        // variable for PDF link
        const link = screen.getByRole('link'); 
        // assert the link has target _blank
        expect(link).toHaveAttribute('target', '_blank');
        // assert the link has the correct href
        expect(link.getAttribute('href')).toMatch(/\.pdf$/);
    }); 
}); 