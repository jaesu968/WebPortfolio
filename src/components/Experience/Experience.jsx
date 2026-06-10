import React from 'react'; 
import './Experience.css'; // Importing the CSS file for styling the Experience component

const Experience = () => {
    return (
        <section className="experience">
            <h1>Experience</h1>
            <div className="experience-item">
                <h3>ID Card IT Customer Support Specialist</h3>
                <h4>Northwestern University</h4>
                <p><strong>Aug. 2024 - Present</strong></p>
                    <ul>
                        <li> Maintains operational integrity of high-availability software/hardware infrastructure for university access control and identity card production.</li>
                        <li> Collaborated with vendors and internal departments to diagnose performance bottlenecks, driving a 50% increase in system processing efficiency.</li>
                        <li> Maintains and queries an internal SQL database holding over 100,000 distinct user records; executed efficient data insertions.</li>
                    </ul>
            </div>
        </section>
    ); 
}

export default Experience;