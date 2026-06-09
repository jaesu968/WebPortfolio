import React from 'react';
import './Sidebar.css'; // Importing the CSS file for styling the Sidebar component

// this component is for the sidebar content 
// so Name, Current Job Title, and one sentence about myself, 
// then a link to the about section of the page 
// then a link to the experience section of the page 
// and then a link to the projects section of the page
// lastly icons links to my GitHub, LinkedIn, and email 

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h1>Kyle Jaesu Akuya</h1>
            <h2>Web and Mobile Developer</h2>
            <p>Passionate about creating intuitive and responsive web and mobile applications.</p>
            <nav>
                <ul className="sidebar-nav">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <div className="social-links">
                <ul className="social-links-list">
                    <li><a href="https://github.com/jaesu968" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/kyle-jaesu-akuya-8b1a2520b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:mazterk968@gmail.com">Email</a></li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;