import React from 'react'; 
// import modal from './components/Modal.jsx';
import modal from './Modal.jsx'; // Importing the Modal component to use for displaying media content in the Resume section


const Resume = () => {
    return (
        <section className="resume">
            <h2>Resume</h2>
            <a href="src/assets/Resume/KJA_AndroidDevResumeJune2026.pdf" target="_blank" rel="noopener noreferrer">
                <button>View Resume</button>
            </a>
        </section>
    ); 
}; 

export default Resume; 