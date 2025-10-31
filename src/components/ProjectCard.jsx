import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title} ({project.type})</h3>
      <img src={project.imageUrl} alt={project.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{project.description}</p>
      <div>
        <strong>Tech Stack:</strong> {project.tech.join(', ')}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View Code</a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>Live Demo</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;