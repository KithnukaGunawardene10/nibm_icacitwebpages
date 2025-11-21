import React from 'react';

const IcacitAbout = ({ darkMode }) => (
  <div className="space-y-8 animate-fadeIn">
    <div className={`relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white overflow-hidden`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">ICACIT 2025 — About the Conference</h1>
        <p className="text-lg opacity-90 max-w-3xl mx-auto">Organized by School of Computing and Engineering (SOCE), National Institute of Business Management (NIBM), Sri Lanka.</p>
      </div>
    </div>

    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8`}>
      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>About the Conference</h2>
      <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>The International Conference on Advanced Computing and Information Technology (ICACIT) 2025 presents an invaluable opportunity for learners to demonstrate their latest research and innovative ideas for the global advancement of knowledge. The ICACIT conference is hosted by the School of Computing and Engineering, NIBM and focuses on key tracks including Software Engineering, Information Technology for Business, and Ethical Hacking and Network Security within the field of computing.</p>
    </div>

  </div>
);

export default IcacitAbout;
