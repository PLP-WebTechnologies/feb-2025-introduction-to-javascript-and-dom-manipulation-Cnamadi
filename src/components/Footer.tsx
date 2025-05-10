import React, { useState } from 'react';
import { Send, Check, AlertTriangle } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Demonstrates form handling and dynamic element addition/removal
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    // Simulating form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Reset form status when user starts typing again
    if (formStatus !== 'idle') {
      setFormStatus('idle');
    }
  };

  return (
    <footer id="contact" className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-2 text-center">Contact Us</h2>
          <p className={`text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have questions about career opportunities? Get in touch with our team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Get In Touch
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our team of career advisors is ready to help you find the perfect academic 
                or administrative role at international universities worldwide.
              </p>
              <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p className="mb-2"><strong>Email:</strong> careers@globaledu.example</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 University Ave, Academic City, 10001</p>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500' 
                        : 'bg-white text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500' 
                        : 'bg-white text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    placeholder="jane.doe@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500' 
                        : 'bg-white text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    placeholder="I'm interested in opportunities for..."
                  />
                </div>
                
                <button
                  type="submit"
                  className={`flex items-center justify-center w-full py-2 px-4 rounded-md transition-colors ${
                    darkMode 
                      ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                  
                  {formStatus === 'success' && (
                    <>
                      <span>Message Sent!</span>
                      <Check size={16} className="ml-2" />
                    </>
                  )}
                  
                  {formStatus === 'error' && (
                    <>
                      <span>Please Fill All Fields</span>
                      <AlertTriangle size={16} className="ml-2" />
                    </>
                  )}
                </button>
                
                {/* Dynamic notification - demonstrates adding/removing elements */}
                {formStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md flex items-start">
                    <Check size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                    <p>Thank you for your message! Our team will get back to you shortly.</p>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md flex items-start">
                    <AlertTriangle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                    <p>Please fill in all fields before submitting the form.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-700 text-center">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              © {new Date().getFullYear()} GlobalEdu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;