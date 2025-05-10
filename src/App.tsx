import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import CareersSection from './components/CareersSection';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-200 shadow-md'}`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      
      <Header darkMode={darkMode} />
      <main className="container mx-auto px-4 pt-8 pb-16">
        <CareersSection darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;