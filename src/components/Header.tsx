import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [headline, setHeadline] = useState('Shape Your Future in Academia');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Demonstrates changing text content dynamically
  useEffect(() => {
    const headlines = [
      'Shape Your Future in Academia',
      'Discover Global Career Paths',
      'Excellence in International Education',
      'Build Your Academic Legacy'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % headlines.length;
      setHeadline(headlines[index]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? `${darkMode ? 'bg-gray-800/95 shadow-gray-900/20' : 'bg-white/95 shadow-gray-200/20'} shadow-lg` 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className={`h-8 w-8 ${darkMode ? 'text-yellow-400' : 'text-blue-700'}`} />
            <span className="text-xl font-serif font-bold">GlobalEdu</span>
          </div>
          
          <nav>
            <ul className="flex space-x-6 font-medium">
              <li><a href="#" className={`hover:underline decoration-2 underline-offset-4 ${darkMode ? 'decoration-yellow-400' : 'decoration-blue-600'}`}>Home</a></li>
              <li><a href="#careers" className={`hover:underline decoration-2 underline-offset-4 ${darkMode ? 'decoration-yellow-400' : 'decoration-blue-600'}`}>Careers</a></li>
              <li><a href="#contact" className={`hover:underline decoration-2 underline-offset-4 ${darkMode ? 'decoration-yellow-400' : 'decoration-blue-600'}`}>Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 transition-opacity duration-700">
            {headline}
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore prestigious career opportunities that international universities offer to aspiring academics and professionals.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;