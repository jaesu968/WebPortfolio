import { render, screen } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event';
import ProjectCard from './ProjectCard.jsx';

// define a reusable fake project about your tess an image-only project so can control the shape 
const imageProject = {
    id: 99, title: 'Test Project', type: 'web',
    description: 'A test description', tech: ['React', 'Vite'],
    imageUrl: '/fake/image.png', videoUrl: null, 
    githubUrl: 'https://github.com/jaesu968/test-repo', liveUrl: null
}; 

// build small variants of this proejct with the spread operator inside individual tests

// Test 1: Render Core Content 
describe('renders core content', () => {
    // heading shows title + type - query with a regex pattern 
    it('has title and type', () => {
        render(<ProjectCard project={imageProject} />);
        expect(screen.getByRole('heading', { name: /Test Project/ })).toBeInTheDocument();
        expect(screen.getByText('A test description')).toBeInTheDocument(); 
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Vite')).toBeInTheDocument();
    })
}); 

// Test 2: View Code link is correct
describe('view code link', () => {
    it('has correct link', () => {
        render(<ProjectCard project={imageProject} />);
        expect(screen.getByRole('link', { name: 'View Code' })).toHaveAttribute('href', imageProject.githubUrl);
        expect(screen.getByRole('link', { name: 'View Code' })).toHaveAttribute('target', '_blank');
    })
}); 

// Test 3: Live Demo is conditional 
describe('live demo link', () => {
    it('has no live demo', () => {
        render(<ProjectCard project={imageProject} />);
        expect(screen.queryByRole('link', { name: 'View It Live' })).toBeNull();
    })
    it('renders live demo when liveUrl is set', () => {
        render(<ProjectCard project={{ ...imageProject, liveUrl: 'https://example.com' }} />);
        expect(screen.getByRole('link', { name: 'View It Live' })).toHaveAttribute('href', 'https://example.com');
    })
});

// Test 4: Clicking the image fires the callback 
describe('image click', () => {
    it('calls the callback', async () => {
        const onMediaClick = vi.fn(); 
        render(<ProjectCard project={imageProject} onMediaClick={onMediaClick} />);
        await userEvent.click(screen.getByRole('button', { name: /Open Test Project image in modal/i})); 
        expect(onMediaClick).toHaveBeenCalledWith(imageProject.imageUrl, imageProject.title);
    })
}); 

// Test 5: Clicking the video fires the callback 
describe('video click', () => {
    it('calls the callback', async () => {
        const onMediaClick = vi.fn(); 
        // variable for fake project with video
        const videoProject = { ...imageProject, imageUrl: '/fake/poster.png', videoUrl: '/fake/video.mp4' };
        render(<ProjectCard project={videoProject} onMediaClick={onMediaClick} />);
        await userEvent.click(screen.getByRole('button', { name: /Open Test Project demo video in modal/i})); 
        expect(onMediaClick).toHaveBeenCalledWith(videoProject.videoUrl, videoProject.title);
    })
});