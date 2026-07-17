import React, { useState } from 'react';
import './App.css'
import { projects } from './projects.js';
import ProjectCard from './components/ProjectCard.jsx';
import ContactCard from './components/ContactCard.jsx';
import Modal from './components/Modal.jsx';
import Resume from './components/Resume.jsx'; // Importing the Resume component
import Sidebar from './components/Sidebar/Sidebar.jsx'; // Importing the Sidebar component
import Experience from './components/Experience/Experience.jsx'; // Importing the Experience component
import Certificates from './components/Certificates/Certificates.jsx'; // Importing the Certificates component

/**
 * The main application component.
 * It renders the portfolio layout, project grid, and manages the state for the media modal.
 */
function App() {
  // The `useState` hook is used to add state to a functional component.
  // `modalContent` will hold the data for the media to be shown in the modal (or null if it's closed).
  // `setModalContent` is the function we use to update this state.
  const [modalContent, setModalContent] = useState(null);

  /**
   * Opens the modal with the specified media URL and title.
   * This function is passed down as a prop to `ProjectCard`. This pattern is called "lifting state up".
   * The child component (`ProjectCard`) can then call this function to change the state in the parent (`App`).
   * @param {string} url - The URL of the image or video to display.
   * @param {string} title - The title of the project to display in the modal.
   */
  const openModal = (url, title) => setModalContent({ url, title });

  /**
   * Closes the modal by resetting the modal content state to null.
   * This function is passed down to the `Modal` component.
   */
  const closeModal = () => setModalContent(null);

  return (
    <div className="page-shell">
    <div className="layout">
    {/* The Sidebar is going to be the left hand column of the portfolio, and the main content will be on the right. */}
      <Sidebar /> 
      <main className="content-column">
        <div id="about"> 
          <h1 className="centerTitle">About Me</h1> 
          <p>
            I'm Kyle, a web and mobile developer who builds full-stack apps and native Android experiences.
          </p>
          <p>
            I work across the stack with React, Node.js, Express, and MongoDB on the web, and Kotlin with
            Jetpack Compose for Android &mdash; recently rebuilding my Shopping List app as a fully native
            Android version. I'm also comfortable with Vue.js, React Native, Java, and the fundamentals of
            HTML5, CSS3, and JavaScript.
          </p>
          <p>
            I'm currently looking for a web or mobile developer role. Feel free to reach out &mdash; I'd love
            to hear about what you're building.
          </p>
      </div>

      <div id="experience">
        <Experience /> {/* Rendering the Experience component to display the experience section */}
      </div>
      
      <div id="projects">
      <h1 className="centerTitle">Projects</h1>
      <h4>Click on the images to see demos or make the images bigger.</h4>
      
      {/* This is where the list of projects is rendered. */}
      <div className="project-grid">
        {/* 
          We use the .map() method to iterate over the `projects` array from projects.js.
          For each `project` object in the array, we render a `ProjectCard` component.
          This is the standard way to render lists of items in React.
        */}
        {projects.map((project) => (
          // - `key` is a special prop required by React for lists to efficiently update the UI. It must be unique among siblings.
          // - `project` prop passes the entire project object to the card.
          // - `onMediaClick` prop passes the `openModal` function so the card can trigger the modal.
          <ProjectCard key={project.id} project={project} onMediaClick={openModal} />
        ))}
      </div>
      
      {/* The Modal component is rendered here, its visibility and content are controlled by state. */}
      <Modal
        // `isOpen` is a boolean that determines if the modal should be shown. `!!modalContent` converts the object to a boolean.
        isOpen={!!modalContent}
        onClose={closeModal}
        mediaUrl={modalContent?.url}
        title={modalContent?.title}
      />
      </div>
      
      <div id="certificates">
        <Certificates onMediaClick={openModal} />
      </div>

      <Resume /> {/* Rendering the Resume component to display the resume section */}

    </main>
    </div>
    <footer className="site-footer">
        <ContactCard contact={{ title: 'Get In Touch', email: 'mazterk968@gmail.com' }} />
        <p className="footer-p">&copy; {new Date().getFullYear()} Kyle Jaesu Akuya</p>
      </footer>

    </div>
  )
}

export default App
