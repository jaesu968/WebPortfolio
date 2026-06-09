import React, { useEffect, useState } from 'react';
import './Sidebar.css'; // Importing the CSS file for styling the Sidebar component
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// this component is for the sidebar content 
// so Name, Current Job Title, and one sentence about myself, 
// then a link to the about section of the page 
// then a link to the experience section of the page 
// and then a link to the projects section of the page
// lastly icons links to my GitHub, LinkedIn, and email 

const Sidebar = () => {
    // Tracks which section is currently active so the nav line can expand on the correct link.
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        // Keep section IDs centralized so hash handling and scroll logic stay in sync.
        const sectionIds = ['about', 'experience', 'projects'];
        const getSections = () =>
            sectionIds
                .map((id) => document.getElementById(id))
                .filter(Boolean);

        // When a hash link is clicked, immediately reflect the selected section in nav state.
        const updateFromHash = () => {
            const hash = window.location.hash.replace('#', '');
            if (sectionIds.includes(hash)) {
                setActiveSection(hash);
            }
        };

        // Uses a viewport anchor point to decide which content section is currently "active".
        const updateFromScroll = () => {
            const sections = getSections();
            if (!sections.length) {
                return;
            }

            // Anchor the active section to a point near the upper viewport area.
            const scrollAnchor = window.scrollY + window.innerHeight * 0.28;
            let currentSection = sectionIds[0];

            for (const sectionId of sectionIds) {
                const section = document.getElementById(sectionId);
                if (section && section.offsetTop <= scrollAnchor) {
                    currentSection = sectionId;
                }
            }

            setActiveSection(currentSection);
        };

        updateFromHash();
        updateFromScroll();
        // Keep nav state responsive to user scrolling and viewport size changes.
        window.addEventListener('scroll', updateFromScroll, { passive: true });
        window.addEventListener('resize', updateFromScroll);
        window.addEventListener('hashchange', updateFromHash);

        return () => {
            // Clean up listeners to prevent stale handlers during unmount/remount.
            window.removeEventListener('scroll', updateFromScroll);
            window.removeEventListener('resize', updateFromScroll);
            window.removeEventListener('hashchange', updateFromHash);
        };
    }, []);

    return (
        <aside className="sidebar">
            <h1>Kyle Jaesu Akuya</h1>
            <h2>Web and Mobile Developer</h2>
            <p>Passionate about creating intuitive and responsive web and mobile applications.</p>
            <nav>
                <ul className="sidebar-nav">
                    <li>
                        <a
                            href="#about"
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            aria-current={activeSection === 'about' ? 'location' : undefined}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                            aria-current={activeSection === 'experience' ? 'location' : undefined}
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            aria-current={activeSection === 'projects' ? 'location' : undefined}
                        >
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="social-links">
                <ul className="social-links-list">
                    <li><a 
                        href="https://github.com/jaesu968" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaGithub />
                        </a>
                    </li>
                    <li><a 
                        href="https://www.linkedin.com/in/kyle-akuya-a2bb278a/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaLinkedinIn />
                        </a>
                    </li>
                        <li><a href="mailto:mazterk968@gmail.com" aria-label="Email">
                        <HiOutlineMail />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;