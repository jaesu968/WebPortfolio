import { render, screen } from '@testing-library/react';
import ContactCard from './ContactCard.jsx';

// test with a prop 
describe('contact card', () => {
    it('has correct content', () => {
        render(<ContactCard contact={{title: 'Get In Touch', email: 'test@example.com', location: 'Chicago, IL, USA', githubUrl: 'https://github.com/jaesu968'}} />);
        expect(screen.getByText('Get In Touch')).toBeInTheDocument();
        expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
        expect(screen.getByText(/Chicago, IL, USA/)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/jaesu968');
    })
}); 

// fallbacks (no prop)
describe('contact card', () => {
    it('has correct content', () => {
        render(<ContactCard />);
        expect(screen.getByText('Contact Me')).toBeInTheDocument();
        expect(screen.getByText(/mazterk968@gmail.com/)).toBeInTheDocument();
        expect(screen.getByText(/Chicago, IL, USA/)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/jaesu968');
    })
});