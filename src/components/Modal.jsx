import React, { useEffect, useRef, useId } from 'react';
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
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const generatedTitleId = useId();
  const titleId = title ? generatedTitleId : undefined;

  // Escape key handling to close the modal
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Move focus into modal on open and restore on close
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    return () => {
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen || !mediaUrl) {
    return null;
  }

  // Simple check for video files based on extension
  const isVideo = /\.(mp4|webm|ogv)$/i.test(mediaUrl);

  return (
    // The overlay that covers the screen. Clicking it closes the modal.
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      {/* 
        The content container. 
        We add an `onClick` handler here that calls `e.stopPropagation()`.
        This prevents the click event from "bubbling up" to the `modal-overlay`.
        Without this, clicking on the image/video would also trigger the `onClose`
        function of the overlay, closing the modal.
      */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && <h4 className="modal-title" id={titleId}>{title}</h4>}
        <button className="modal-close" onClick={onClose} ref={closeButtonRef} type="button" aria-label="Close modal">
          &times;
        </button>
        {isVideo ? (
          // Render a video player if the media is a video.
          <video src={mediaUrl} className="modal-media" controls autoPlay loop playsInline>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={mediaUrl} alt={title || "Enlarged view"} className="modal-media" />
        )}
      </div>
    </div>
  );
}

export default Modal;