import AndroidScreenShot from './assets/Woofstagram/AndroidScreenShot.png';
import AndroidVideo from './assets/Woofstagram/androidEmulator.mp4'; // Changed from .gif
import iOSVideo from './assets/Woofstagram/iosSimulator.mp4'; // Changed from .mov
import ReactApp from './assets/ReactWebApp/ReactApp1.jpg'; // added image for react web app project
import TipCalculatorScreenshot from './assets/TipCalculator/TipCalculatorScreenshot.png';
import TipCalculatorVideo from './assets/TipCalculator/TipCalculatorVideo.mp4';
import StopwatchScreenshot from './assets/Stopwatch/StopwatchAndroid.png';
import StopwatchVideo from './assets/Stopwatch/stopwatchVideo.mp4';
import FullStackVueApp from './assets/ShoppingList/FullStackVueApp.mp4'; // Video for MEVN full stack project
import FullStackScreenshot from './assets/ShoppingList/itemList.png';
import calculatorScreenshot from './assets/JavaCalculator/calculator.jpg'; // Added screenshot for java calculator project
import oldSchoolForums from './assets/OldSchoolForums/website.mp4'; // added video to show project from intro to web dev class
import JavaQuizMaster from './assets/JavaQuizMaster/JavaQuizMaster.jpg'; // added screenshot of Java project from Intro to Programming Class




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
    type: 'mobile[ios/android]'
  },
  {
    id: 2,
    title: 'Create Playlist React Web App - Jammming',
    description: 'Jammming is a web application that allows users to search for songs on Spotify and create custom playlists that are saved directly to their Spotify account. Built with React and integrated with the Spotify Web API, Jammming provides an intuitive interface for discovering and organizing music.',
    tech: ['React', 'Vite', 'CSS', 'Spotify API', 'HTML', 'JavaScript'],
    imageUrl: ReactApp, // You can use public assets too
    githubUrl: 'https://github.com/jaesu968/jammming',
    liveUrl: null,
    type: 'web[React]'
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
    type: 'mobile[android]'
  },
  {
    id: 4, 
    title: 'Stopwatch with Productivity Timer',
    description: 'This is a custom-built Android application that functions as a stopwatch with an added productivity feature inspired by the Pomodoro technique. The main idea is to allow users to time their work intervals and get a notification when a self-imposed time limit is reached, reminding them to take a break.',
    tech: ['Kotlin', 'Android Studio', 'XML Layouts', 'Java'],
    imageUrl: StopwatchScreenshot, // Used as poster for video
    videoUrl: StopwatchVideo,       // Single video for web apps
    githubUrl: 'https://github.com/jaesu968/Stopwatch_with_Productivity_Timer', // Add your repo URL
    liveUrl: null, // Add live demo URL if deployed
    type: 'mobile[android]'
  },
  {
    id: 5, 
    title: 'Shopping List',
    description: 'A Vue 3 shopping list management application with a dark/light mode toggle.',
    tech: ['Vue.js', 'Express.js', 'MongoDB', 'Node.js'],
    imageUrl: FullStackScreenshot, // Placeholder or actual image URL
    videoUrl: FullStackVueApp, // Placeholder or actual video URL
    githubUrl: 'https://github.com/jaesu968/shopping-list', // Add your repo URL
    liveUrl: null, // Add live demo URL if deployed
    type: 'web[MEVN full stack app]'
  },
  {
    id: 6, 
    title: 'Java Calculator',
    description: 'A simple calculator app made using Java.',
    tech: ['Java', 'JavaFX'],
    imageUrl: calculatorScreenshot, // Placeholder or actual image URL
    videoUrl: '', // Placeholder or actual video URL
    githubUrl: 'https://github.com/jaesu968/calculator', // Add your repo URL
    liveUrl: null, // Add live demo URL if deployed
    type: 'desktop[java]'
  },
  {
    id: 7, 
    title: 'Old School Forums Website',
    description: 'This project is a multi-page "old school" themed social media and forum website, created as a final project for an introductory web development course. It demonstrates foundational skills in HTML, CSS, and JavaScript to build a responsive and interactive user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '', // Placeholder or actual image URL
    videoUrl: oldSchoolForums, // Placeholder or actual video URL
    githubUrl: 'https://github.com/jaesu968/Final-Project',
    liveUrl: null, // Add live demo URL if deployed
    type: 'web[HTML/CSS/JS]'
  },
  {
    id: 8, 
    title: 'Java Quiz Master',
    description: 'Quiz Master is a console-based Java application that allows users to both manage a collection of quiz questions and take quizzes. It features a persistent storage system, saving all questions to a local text file (`QuizQuestions.txt`).',
    tech: ['Java'],
    imageUrl: JavaQuizMaster, // Placeholder or actual image URL
    videoUrl: '', // Placeholder or actual video URL
    githubUrl: 'https://github.com/jaesu968/QuizMaster',
    liveUrl: null, // add live demo URL if deployed
    type: 'desktop[java]'
  }
];