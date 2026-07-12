import { render, screen } from '@testing-library/react';
import Certificates from './Certificates';

// Test 1: Renders the Certificates component
describe('Certificates', () => {
    it('renders the Certificates component', () => {
        render(<Certificates />);
        // assert the title is correct 
        expect(screen.getByRole('heading', { name: 'Certificates' })).toBeInTheDocument();
        // assert the job is correct
        expect(screen.getByText('Android Developer with Kotlin')).toBeInTheDocument();
        // assert the issuer is correct
        expect(screen.getByText('Hyperskill')).toBeInTheDocument();
    })
});