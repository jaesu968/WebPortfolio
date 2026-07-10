import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react'; 

// jsdom doesn't provide these by default; ThemeToggle needs them 
const store = {}; 
Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: (k) => (k in store ? store[k] : null),
        setItem: (k, v) => { store[k] = String(v); },
        removeItem: (k) => { delete store[k]; },
        clear: () => { for (const k in store) delete store[k]; },
    },
    writable: true,
}); 

Object.defineProperty(window, 'matchMedia', {
    writable: true, 
    value : (query) => ({
        matches: false, media: query, onchange: null, 
        addEventListener: () => {}, removeEventListener: () => {}, 
        addListener: () => {}, removeListener: () => {}, dispatchEvent: () => false, 
    }),
});

afterEach(() => {
    cleanup();
});
