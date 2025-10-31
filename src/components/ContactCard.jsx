import React from 'react';

function ContactCard({ contact }) {
  return (
    <div className="card">
      <h3>{contact?.title || 'Contact Me'}</h3>
      <p>Email: {contact?.email || 'mazterk968@gmail.com'}</p>
      <p>Location: Chicago, IL, USA</p>
      <p>
        For all my projects see: 
        <a href="https://github.com/jaesu968" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </div>
  );
}

export default ContactCard;
