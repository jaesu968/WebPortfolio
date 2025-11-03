import React, { useState } from 'react';
import './App.css'
import { projects } from './projects.js';
import ProjectCard from './components/ProjectCard.jsx';
import ContactCard from './components/ContactCard.jsx';
import Modal from './components/Modal.jsx';

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
    <main>
      <h1>Kyle Jaesu Akuya's Web Portfolio</h1>
      {/* A brief introduction to about myself*/}
      <p>Hello Everyone. Welcome to my Web Portfolio.</p>
      <p>I am a web and mobile developer. 
        I have experience working with React, Node.js, ExpressJS, MongoDB,
        Vue.js, Kotlin, Java, Android Studio and React Native. 
        I also have knowledge of HTML5, CSS3, JavaScript. 
        I am currently focusing on learning more about React Native.
        And next step will be a deeper dive into Kotlin for more Android development.
        Feel free to contact me if you need any help or want to work together.
        Thank You!
      </p>

      <p>Here are some of the projects I've worked on.</p>
      
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

      <footer>
        <ContactCard contact={{ title: 'Get In Touch', email: 'mazterk968@gmail.com' }} />
        <p className="footer-p">&copy; {new Date().getFullYear()} Kyle Jaesu Akuya</p>
      </footer>
    </main>
  )
}

export default App
