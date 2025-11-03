import './App.css'
import { projects } from './projects.js';
import ProjectCard from './components/ProjectCard.jsx';
import ContactCard from './components/ContactCard.jsx';

function App() {
  return (
    <main>
      <h1>Kyle Jaesu Akuya's Web Portfolio</h1>
      {/* A brief introduction to about myself*/}
      <p>Hello Everyone. I am a web and mobile developer. 
        I have experience working with React, Node.js, ExpressJS, MongoDB,
        Vue.js, Kotlin, Java, Android Studio and React Native. 
        I also have knowledge of HTML5, CSS3, JavaScript. 
        I am currently focusing on learning more about React Native.
        And next step will be Kotlin for more Android development.
        Feel free to contact me if you need any help or want to work together.
        Thank You!
      </p>

      <p>Here are some of the projects I've worked on.</p>
      
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <footer>
        <ContactCard contact={{ title: 'Get In Touch', email: 'mazterk968@gmail.com' }} />
        <p className="footer-p">&copy; {new Date().getFullYear()} Kyle Jaesu Akuya</p>
      </footer>
    </main>
  )
}

export default App
