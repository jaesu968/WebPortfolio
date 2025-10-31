import React from 'react';

function ContactCard({ contact }) {
  return (
    <div className="card">
      <h3>{contact.title}</h3>
    </div>
  );
}

export default ContactCard;