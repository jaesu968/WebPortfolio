import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const getInitialTheme = () => 
    document.documentElement.getAttribute('data-theme') || 'dark'; 

const ThemeToggle = () => {
    const [theme, setTheme] = useState(getInitialTheme()); 

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); 
        localStorage.setItem('theme', theme); 
    }, [theme]); 

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
    ); 
}; 

export default ThemeToggle;
