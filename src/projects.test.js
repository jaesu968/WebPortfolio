import { projects } from './projects.js';

// testing projects.js
describe('projects data', () => {
    it('has projects', () => {
        expect(Array.isArray(projects)).toBe(true);
        expect(projects.length).toBeGreaterThan(0)      
    }); 
    it('has project data', () => {
        // create an array of project ids
        const ids = projects.map((project) => project.id);
        // assert that new Set of ids is the same as the length of the projects array
        expect(new Set(ids).size).toBe(projects.length);
    })
    it.each(projects)('project "$title" (id $id) is well-formed', (project) => {
        // variable to test hasImage, hasVideo 
        const hasImage = typeof project.imageUrl === 'string' && project.imageUrl.length > 0 ||
        (Array.isArray(project.imageUrl) && project.imageUrl.length > 0); 
        const hasVideo = Boolean(project.videoUrl || project.androidVideoUrl || project.iosVideoUrl);
        // required fields , p.id, p.title, p.description, p.type are all truthy 
        expect(project.id).toBeTruthy();
        expect(project.title).toBeTruthy();
        expect(project.description).toBeTruthy();
        expect(project.type).toBeTruthy();
        // expect hasImage or hasVideo to be true
        expect(hasImage || hasVideo).toBe(true);

        // github url shape is null or contains the expected url pattern 
        expect(project.githubUrl === null || project.githubUrl.match(/https?:\/\/github\.com\/[\w-]+\/[\w-]+/)).toBeTruthy();
    })
}); 
