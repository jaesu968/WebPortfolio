import React from 'react';

function ProjectCard({ project }) {
  // Check if the project has videos or an image
  const hasVideos = project.androidVideoUrl || project.iosVideoUrl || project.videoUrl;

  return (
    <div className="card">
      <h3>{project.title} ({project.type})</h3>
      {hasVideos ? (
        <div className="video-container">
          {project.videoUrl && (
            <video className="project-video" poster={project.imageUrl} autoPlay loop muted playsInline>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {project.iosVideoUrl && (
            <video className="project-video" poster={project.imageUrl} autoPlay loop muted playsInline>
              <source src={project.iosVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {project.androidVideoUrl && (
            <video className="project-video" poster={project.imageUrl} autoPlay loop muted playsInline>
              <source src={project.androidVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : (
        <img src={project.imageUrl} alt={project.title} className="project-image" />
      )}

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
