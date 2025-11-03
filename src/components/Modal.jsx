import React from 'react';
import './Modal.css';

/**
 * A modal component to display an enlarged image or video in an overlay.
 * @param {{ isOpen: boolean, onClose: () => void, mediaUrl: string, title: string }} props
 * @param {boolean} props.isOpen - Controls whether the modal is visible.
 * @param {() => void} props.onClose - Function to call to close the modal.
 * @param {string} props.mediaUrl - The URL of the image or video to display.
 * @param {string} props.title - The title to display above the media.
 */
function Modal({ isOpen, onClose, mediaUrl, title }) {
  if (!isOpen || !mediaUrl) {
    return null;
  }

  // Simple check for video files based on extension
  const isVideo = /\.(mp4|webm|ogv)$/i.test(mediaUrl);

  return (
    // The overlay that covers the screen. Clicking it closes the modal.
    <div className="modal-overlay" onClick={onClose}>
      {/* 
        The content container. 
        We add an `onClick` handler here that calls `e.stopPropagation()`.
        This prevents the click event from "bubbling up" to the `modal-overlay`.
        Without this, clicking on the image/video would also trigger the `onClose`
        function of the overlay, closing the modal.
      */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && <h4 className="modal-title">{title}</h4>}
        <button className="modal-close" onClick={onClose}>&times;</button>
        {isVideo ? (
          // Render a video player if the media is a video.
          <video src={mediaUrl} className="modal-media" controls autoPlay loop playsInline>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={mediaUrl} alt="Enlarged view" className="modal-media" />
        )}
      </div>
    </div>
  );
}

export default Modal;