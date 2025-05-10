import React, { useState } from 'react';
import CareerCard from './CareerCard';
import { careers, filterOptions, CareerType } from '../data/careerData';

interface CareersSectionProps {
  darkMode: boolean;
}

const CareersSection: React.FC<CareersSectionProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredCareers, setFilteredCareers] = useState<CareerType[]>(careers);
  
  // Demonstrates modifying content based on user interaction
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredCareers(careers);
    } else {
      setFilteredCareers(careers.filter(career => career.category === filter));
    }
  };

  return (
    <section id="careers" className="py-12">
      <h2 className={`text-3xl font-serif font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Career Opportunities
      </h2>
      <p className={`text-center mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Discover diverse career paths available at prestigious international universities
      </p>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleFilterChange(filter.value)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeFilter === filter.value
                ? darkMode
                  ? 'bg-yellow-500 text-gray-900 font-medium'
                  : 'bg-blue-600 text-white font-medium'
                : darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      {/* Career cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => (
          <CareerCard 
            key={career.id} 
            career={career} 
            darkMode={darkMode} 
          />
        ))}
      </div>
      
      {filteredCareers.length === 0 && (
        <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p className="text-xl">No career opportunities found in this category.</p>
          <button 
            onClick={() => handleFilterChange('all')}
            className={`mt-4 px-6 py-2 rounded-full ${
              darkMode ? 'bg-yellow-500 text-gray-900' : 'bg-blue-600 text-white'
            }`}
          >
            Show all careers
          </button>
        </div>
      )}
    </section>
  );
};

export default CareersSection;