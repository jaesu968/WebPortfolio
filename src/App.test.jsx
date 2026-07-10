import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { projects } from './projects.js';

// Integration Tests for the whole App 

// Test 1: Render the main section headings 
describe('main section headings', () => {
    it('has the correct headings', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    })
});

// Test 2: Renders one card per project 
describe('projects', () => {
    it('has the correct number of cards', () => {
        render(<App />);
        expect(screen.getAllByRole('link', { name: 'View Code' })).toHaveLength(projects.length);
    })
});

// Test 3: modal opens on media click 
describe('media click', async () => {
    it('opens the modal when media is clicked' , async () => {
    const { container } = render(<App />);
    // assert there is no modal
    expect(screen.queryByRole('dialog')).toBeNull();
    // assert media trigger 
    await userEvent.click(container.querySelector('.media-trigger'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    })
}); 