import {
    SiReact, SiVite, SiKotlin, SiVuedotjs, SiExpress,
    SiMongodb, SiNodedotjs, SiHtml5, SiCss, SiJavascript,
    SiSpotify, SiAndroidstudio, SiExpo, SiSqlite,
    SiIntellijidea, SiJetpackcompose, SiXml
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // Java isn't in Simple Icons 

const techIcons = {
    'React': SiReact, 
    'React Native': SiReact, 
    'Vite': SiVite,
    'Kotlin': SiKotlin,
    'Vue.js': SiVuedotjs,
    'Express.js': SiExpress,
    'MongoDB': SiMongodb,
    'Node.js': SiNodedotjs,
    'HTML': SiHtml5,
    'CSS': SiCss,
    'JavaScript': SiJavascript,
    'Spotify API': SiSpotify,
    'Android Studio': SiAndroidstudio,
    'Expo': SiExpo,
    'SQLite': SiSqlite,
    'Java': FaJava,
    'JavaFX': FaJava,
    'IntelliJ': SiIntellijidea,
    'Jetpack Compose': SiJetpackcompose,
    'Navigation Compose': SiJetpackcompose, // part of Jetpack Compose — reuse logo
    'Kotlin Coroutines': SiKotlin, // no distinct icon — reuse Kotlin logo
    'React Navigation': SiReact, // no distinct icon — reuse React logo
    'XML Layouts': SiXml
};

export default function TechIcon({ name }) {
    const Icon = techIcons[name];
    return (
        <span className="tech-tag">
            {Icon && <Icon aria-hidden="true" />} {name}
        </span>
    );
}