import React from 'react';
import TechIcon from './TechIcon';
import { FaGlobe, FaMobileAlt, FaDesktop } from 'react-icons/fa';

/**
 * A card component that displays information about a single project.
 * @param {{ project: object, onMediaClick: (url: string, title: string) => void }} props
 * @param {object} props.project - The project data object.
 * @param {(url: string, title: string) => void} props.onMediaClick - Function to call when media is clicked.
 */

// list of types 
  const typeMeta = {
    web: { icon: FaGlobe, label: 'Web' },
    mobile: { icon: FaMobileAlt, label: 'Mobile' },
    desktop: { icon: FaDesktop, label: 'Desktop' },
  }; 

function ProjectCard({ project, onMediaClick }) {

  
  // Check if the project has videos or an image
  const hasVideos = project.androidVideoUrl || project.iosVideoUrl || project.videoUrl;
  const isImageArray = Array.isArray(project.imageUrl);
  const videoItems = [
    { url: project.videoUrl, label: `${project.title} demo video` },
    { url: project.iosVideoUrl, label: `${project.title} iOS demo video` },
    { url: project.androidVideoUrl, label: `${project.title} Android demo video` },
  ].filter((item) => item.url);

  const { icon: Icon, label } = typeMeta[project.type] ?? {};

  return (
    <div className="card">
      <div className="card-header">
        <h3>{project.title}</h3>
        <span className="type-badge">{Icon && <Icon aria-hidden="true" />} {label}</span>
      </div>
      {/* 
        This is conditional rendering using a ternary operator.
        - If `hasVideos` is true, it renders the video container.
        - Otherwise, it checks if `isImageArray` is true to render a gallery, or falls back to a single image.
      */}
      {hasVideos ? (
        <div className="video-container">
          {videoItems.map((video) => (
            <button
              key={`${project.id}-${video.url}`}
              type="button"
              className="media-trigger"
              onClick={() => onMediaClick(video.url, project.title)}
              aria-label={`Open ${video.label} in modal`}
              title={`Open ${video.label}`}
            >
              <video className="project-video" poster={project.imageUrl} loop muted playsInline preload="metadata">
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </button>
          ))}
        </div>
      ) : isImageArray ? (
        <div className="image-gallery" title={`Click to enlarge images for ${project.title}`}>
          {project.imageUrl.map((image, index) => (
            <button
              key={`${project.id}-image-${index}`}
              type="button"
              className="media-trigger"
              onClick={() => onMediaClick(image, project.title)}
              aria-label={`Open ${project.title} screenshot ${index + 1} in modal`}
              title={`Open ${project.title} screenshot ${index + 1}`}
            >
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="project-image"
              />
            </button>
          ))}
        </div>
      ) : (
        project.imageUrl && (
          <button
            type="button"
            className="media-trigger"
            onClick={() => onMediaClick(project.imageUrl, project.title)}
            aria-label={`Open ${project.title} image in modal`}
            title={`Open ${project.title} image`}
          >
            <img src={project.imageUrl} alt={project.title} className="project-image" />
          </button>
        )
      )}

      <p>{project.description}</p>
      <div className="tech-stack">
        <strong>Tech Stack:</strong> {project.tech.map((t) => <TechIcon key={t} name={t} />)}
      </div>
      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View Code</a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-demo-link">View It Live</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
