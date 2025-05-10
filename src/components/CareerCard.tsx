import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { CareerType } from '../data/careerData';

interface CareerCardProps {
  career: CareerType;
  darkMode: boolean;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, darkMode }) => {
  const [expanded, setExpanded] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  
  // Demonstrates modifying CSS styles via JavaScript and toggling element display
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Demonstrates modifying styles via JavaScript
  const toggleHighlight = () => {
    setHighlighted(!highlighted);
  };

  return (
    <div 
      className={`rounded-lg overflow-hidden transition-all duration-300 ${
        highlighted 
          ? darkMode 
            ? 'bg-yellow-500 text-gray-900 transform scale-[1.02]' 
            : 'bg-blue-50 border-2 border-blue-500 transform scale-[1.02]' 
          : darkMode 
            ? 'bg-gray-800' 
            : 'bg-white shadow-md'
      }`}
      style={{ transformOrigin: 'center' }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className={`text-xl font-bold mb-2 ${darkMode && !highlighted ? 'text-white' : 'text-gray-900'}`}>
            {career.title}
          </h3>
          <button 
            onClick={toggleHighlight}
            className={`p-1 rounded-full ${
              highlighted
                ? 'bg-gray-900 text-white'
                : darkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            aria-label={highlighted ? "Remove highlight" : "Highlight this career"}
          >
            <ArrowUpRight size={16} />
          </button>
        </div>
        
        <div className={`mb-3 text-sm font-medium inline-block px-2 py-1 rounded ${
          highlighted 
            ? 'bg-gray-900 text-white' 
            : career.category === 'academic'
            ? darkMode 
              ? 'bg-blue-900 text-blue-200' 
              : 'bg-blue-100 text-blue-800'
            : career.category === 'administrative'
            ? darkMode 
              ? 'bg-green-900 text-green-200' 
              : 'bg-green-100 text-green-800'
            : darkMode 
              ? 'bg-purple-900 text-purple-200' 
              : 'bg-purple-100 text-purple-800'
        }`}>
          {career.category.charAt(0).toUpperCase() + career.category.slice(1)}
        </div>
        
        <p className={`mb-4 ${
          highlighted 
            ? 'text-gray-800' 
            : darkMode 
              ? 'text-gray-300' 
              : 'text-gray-600'
        }`}>
          {career.shortDescription}
        </p>
        
        <button
          onClick={toggleExpand}
          className={`flex items-center text-sm font-medium ${
            highlighted 
              ? 'text-gray-900' 
              : darkMode 
                ? 'text-yellow-400' 
                : 'text-blue-600'
          }`}
        >
          {expanded ? (
            <>
              <span>Show less</span>
              <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              <span>Learn more</span>
              <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>
        
        {/* Expanded content */}
        {expanded && (
          <div className={`mt-4 pt-4 border-t ${
            highlighted 
              ? 'border-gray-800' 
              : darkMode 
                ? 'border-gray-700' 
                : 'border-gray-200'
          }`}>
            <h4 className={`font-bold mb-2 ${
              highlighted 
                ? 'text-gray-900' 
                : darkMode 
                  ? 'text-white' 
                  : 'text-gray-900'
            }`}>
              Responsibilities
            </h4>
            <ul className={`list-disc pl-5 mb-4 ${
              highlighted 
                ? 'text-gray-800' 
                : darkMode 
                  ? 'text-gray-300' 
                  : 'text-gray-600'
            }`}>
              {career.responsibilities.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
            
            <h4 className={`font-bold mb-2 ${
              highlighted 
                ? 'text-gray-900' 
                : darkMode 
                  ? 'text-white' 
                  : 'text-gray-900'
            }`}>
              Qualifications
            </h4>
            <ul className={`list-disc pl-5 mb-4 ${
              highlighted 
                ? 'text-gray-800' 
                : darkMode 
                  ? 'text-gray-300' 
                  : 'text-gray-600'
            }`}>
              {career.qualifications.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
            
            <button 
              className={`mt-2 w-full py-2 rounded-md transition-colors ${
                highlighted
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : darkMode
                  ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerCard;