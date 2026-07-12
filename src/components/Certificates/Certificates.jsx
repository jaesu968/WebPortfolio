import React from 'react'; 
import './Certificates.css'; //co-located styles, like Experience does 
import { certificates } from '../../certificates.js';  

// component for certificates section
// maps through the certificates array and displays each certificate as a card 
// receives onMediaClick from App.jsx so clicking the image opens the existing Modal

const Certificates = ({ onMediaClick }) => {
    return (
        <section className="certificates"> 
                <h1 className="centerTitle">Certificates</h1>
                <div className="certificates-container">
            {certificates.map((certificate) => (
                <div className="certificate-item" key={certificate.id}>
                    <button 
                        type="button"
                        className="media-trigger"
                        onClick={() => onMediaClick(certificate.imageUrl, certificate.title)}
                        aria-label={`Open ${certificate.title} certificate in modal`}
                        title={`Open ${certificate.title} certificate`}
                    >
                        <img src={certificate.imageUrl} 
                        alt={`${certificate.title} certificate`}
                        className="certificate-image"
                        />
                </button>
                <h3>{certificate.title}</h3>
                <h4>{certificate.issuer}</h4>
                <p><strong>{certificate.date}</strong></p>
                {certificate.credentialUrl && (
                    <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                        View Credential
                    </a>
                )}
            </div>
          ))}
        </div>
    </section>
    ); 
}; 

export default Certificates;