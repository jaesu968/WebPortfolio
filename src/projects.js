import AndroidScreenShot from './assets/Woofstagram/AndroidScreenShot.png'
import AndroidVideo from './assets/Woofstagram/androidEmulator.mp4' // Changed from .gif
import iOSVideo from './assets/Woofstagram/iosSimulator.mp4' // Changed from .mov
import ReactApp from './assets/ReactWebApp/ReactApp1.jpg'; // added image for react web app project
import TipCalculatorScreenshot from './assets/TipCalculator/TipCalculatorScreenshot.png'
import TipCalculatorVideo from './assets/TipCalculator/TipCalculatorVideo.mp4'


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
  },
  {
  id: 3,
  title: 'Tip Calculator',
  description: 'This project is a simple yet functional Tip Calculator application for Android, built using Kotlin. It provides a user-friendly interface to quickly calculate the appropriate tip for a bill.',
  tech: ['Kotlin', 'Android Studio', 'XML Layouts', 'Java'],
  imageUrl: TipCalculatorScreenshot, // Used as poster for video
  videoUrl: TipCalculatorVideo,      // Single video for web apps
  githubUrl: 'https://github.com/jaesu968/Tip_Calculator', // Add your repo URL
  liveUrl: null, // Add live demo URL if deployed
  type: 'web'
}
];