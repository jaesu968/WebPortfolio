import React from 'react';

/**
 * A card component that displays information about a single project.
 * @param {{ project: object, onMediaClick: (url: string, title: string) => void }} props
 * @param {object} props.project - The project data object.
 * @param {(url: string, title: string) => void} props.onMediaClick - Function to call when media is clicked.
 */
function ProjectCard({ project, onMediaClick }) {
  // Check if the project has videos or an image
  const hasVideos = project.androidVideoUrl || project.iosVideoUrl || project.videoUrl;
  const isImageArray = Array.isArray(project.imageUrl);

  return (
    <div className="card">
      <h3>{project.title} ({project.type})</h3>
      {/* 
        This is conditional rendering using a ternary operator.
        - If `hasVideos` is true, it renders the video container.
        - Otherwise, it checks if `isImageArray` is true to render a gallery, or falls back to a single image.
      */}
      {hasVideos ? (
        <div className="video-container" style={{ cursor: 'pointer' }}>
          {project.videoUrl && (
            <video onClick={() => onMediaClick(project.videoUrl, project.title)} className="project-video" poster={project.imageUrl} autoPlay loop muted playsInline title={`Click to enlarge ${project.title} video`}>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {project.iosVideoUrl && (
            <video onClick={() => onMediaClick(project.iosVideoUrl, project.title)} className="project-video" poster={project.imageUrl} autoPlay loop muted playsInline title={`Click to enlarge ${project.title} video`}>
              <source src={project.iosVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {project.androidVideoUrl && (
            <video onClick={() => onMediaClick(project.androidVideoUrl, project.title)} className="project-video" poster={project.imageUrl} autoPlay loop muted playsInline title={`Click to enlarge ${project.title} video`}>
              <source src={project.androidVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : isImageArray ? (
        <div className="image-gallery" style={{ cursor: 'pointer' }} title={`Click to enlarge images for ${project.title}`}>
          {project.imageUrl.map((image, index) => (
            <img
              onClick={() => onMediaClick(image, project.title)}
              key={`${project.id}-image-${index}`}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              className="project-image"
            />
          ))}
        </div>
      ) : (
        project.imageUrl && <img onClick={() => onMediaClick(project.imageUrl, project.title)} src={project.imageUrl} alt={project.title} className="project-image" style={{ cursor: 'pointer' }} title={`Click to enlarge image for ${project.title}`} />
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
