import myAppScreenshot from '../assets/my-app-screenshot.png'; // Example: Add your images to the assets folder

export const projects = [
  {
    id: 1,
    title: 'My Awesome React Native App',
    description: 'A social media app for sharing pictures of cute pets. Built with Expo and Firebase.',
    tech: ['React Native', 'Expo', 'Firebase', 'React Navigation'],
    imageUrl: myAppScreenshot, // Use the imported image
    githubUrl: 'https://github.com/your-username/my-awesome-app',
    liveUrl: null, // Or link to App/Play Store
    type: 'mobile'
  },
  {
    id: 2,
    title: 'My Web Project',
    description: 'A personal blog built with React and Vite.',
    tech: ['React', 'Vite', 'CSS'],
    imageUrl: '/vite.svg', // You can use public assets too
    githubUrl: 'https://github.com/your-username/my-web-project',
    liveUrl: 'https://my-web-project.com',
    type: 'web'
  }
];