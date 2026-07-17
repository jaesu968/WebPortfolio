import React from 'react';
import resumePdf from '../assets/Resume/KJA_Resume.pdf'


const Resume = () => {
    return (
        <section className="resume">
            <h2>Resume</h2>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                <button>View Resume</button>
            </a>
        </section>
    ); 
}; 

export default Resume; 