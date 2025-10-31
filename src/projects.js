import AndroidScreenShot from './assets/Woofstagram/AndroidScreenShot.png'
import AndroidVideo from './assets/Woofstagram/androidEmulator.mp4' // Changed from .gif
import iOSVideo from './assets/Woofstagram/iosSimulator.mp4' // Changed from .mov
import ReactApp from './assets/ReactWebApp/ReactApp1.jpg'; // added image for react web app project

export const projects = [
  {
    id: 1,
    title: 'Woofstagram',
    description: 'A social media app for sharing pictures of cute dogs. Built with Expo and React Native.',
    tech: ['React Native', 'Expo', 'React Navigation'],
    imageUrl: AndroidScreenShot, // We can keep this as a poster/fallback
    androidVideoUrl: AndroidVideo,
    iosVideoUrl: iOSVideo,
    githubUrl: 'https://github.com/jaesu968/ReactNativeProject_InstagramLikeAppComplete',
    liveUrl: null, // Or link to App/Play Store
    type: 'mobile'
  },
  {
    id: 2,
    title: 'Create Playlist React Web App - Jammming',
    description: 'Jammming is a web application that allows users to search for songs on Spotify and create custom playlists that are saved directly to their Spotify account. Built with React and integrated with the Spotify Web API, Jammming provides an intuitive interface for discovering and organizing music.',
    tech: ['React', 'Vite', 'CSS', 'Spotify API', 'HTML', 'JavaScript'],
    imageUrl: ReactApp, // You can use public assets too
    githubUrl: 'https://github.com/jaesu968/jammming',
    liveUrl: null,
    type: 'web'
  }
];