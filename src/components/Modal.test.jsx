import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

// helper for default props keeping the tests short 
const defaultProps = {
    isOpen: true, 
    onClose: vi.fn(), 
    mediaUrl: '/fake/image.png', 
    title: 'My Modal',
}; 
// spread and override during each test 

// Test 1: Modal is Hidden when closed 
describe('modal is hidden', () => {
    it('is hidden by default', () => {
        render(<Modal {...defaultProps} isOpen={false} />);
        expect(screen.queryByRole('dialog')).toBeNull();
    })
}); 

// Test 2: Hidden when no media 
describe('modal is hidden', () => {
    it('is hidden when no media', () => {
        render(<Modal {...defaultProps} mediaUrl={null} />);
        expect(screen.queryByRole('dialog')).toBeNull();
    })
});

// Test 3: shows content when open (image)
describe('modal is visible', () => {
    it('shows image when open', () => {
        render(<Modal {...defaultProps} mediaUrl="/fake/image.png" />);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        // assert the title shows 
        expect(screen.getByText('My Modal')).toBeInTheDocument();
        // assert the image shows
        expect(screen.getByRole('img')).toHaveAttribute('src', '/fake/image.png');
    })
});

// Test 4: video vs image switch 
describe('modal is visible', () => {
    it('shows video when open', () => {
        // variable for video 
        const { container } = render(<Modal {...defaultProps} mediaUrl="/fake/clip.mp4" />);
        // assert there is a video 
        expect(container.querySelector('video')).toBeInTheDocument();
        // assrt there is no image
        expect(screen.queryByRole('img')).toBeNull();
    })
}); 

// Test 5: close button fires onClose 
describe('close button', () => {
    const onClose = vi.fn();
    it('calls onClose when clicked', async () => {
        render(<Modal {...defaultProps} onClose={onClose} />);
        await userEvent.click(screen.getByRole('button', { name: 'Close modal' }));
        expect(onClose).toHaveBeenCalled();
    })
}); 

// Test 6: Escape key fires onClose
describe('escape key', () => {
    const onClose = vi.fn();
    it('calls onClose when clicked', async () => {
        render(<Modal {...defaultProps} onClose={onClose} />);
        await userEvent.keyboard('{Escape}');
        expect(onClose).toHaveBeenCalled();
    })
});

// Test 7: Overlay closes , content click does not
describe('overlay close', () => {
    const onClose = vi.fn();
    it('calls onClose when clicked', async () => {
        // overaly is .modal-overlay and content is .modal-content 
        render(<Modal {...defaultProps} onClose={onClose} />);
        await userEvent.click(screen.getByRole('dialog'));
        expect(onClose).toHaveBeenCalled();
    }), 
    it('does not close when content is clicked', async () => {
        const onClose = vi.fn();
        const { container } = render(<Modal {...defaultProps} onClose={onClose} />);
        await userEvent.click(container.querySelector('.modal-content'));
        expect(onClose).not.toHaveBeenCalled();
    })
});