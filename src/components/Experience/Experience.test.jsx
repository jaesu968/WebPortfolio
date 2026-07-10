import { render, screen } from '@testing-library/react';
import Experience from './Experience';

// Test 1: Renders the Experience component
describe('Experience', () => {
    it('renders the Experience component', () => {
        render(<Experience />);
        // assert the title is correct 
        expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
        // assert the job is correct
        expect(screen.getByText('ID Card IT Customer Support Specialist')).toBeInTheDocument();
        // assert the company is correct
        expect(screen.getByText('Northwestern University')).toBeInTheDocument();
    })
});


