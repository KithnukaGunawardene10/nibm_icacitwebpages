import React from 'react';

const IcacitDeadlines = ({ darkMode }) => (
  <div className="space-y-8 animate-fadeIn">
    <div className={`bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : ''}`}>
      <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Important Deadlines</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl p-4`}>
          <p className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Abstract Submission</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>15 March 2025</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl p-4`}>
          <p className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Full Paper Submission</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>30 April 2025</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl p-4`}>
          <p className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Conference Dates</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>20-22 August 2025</p>
        </div>
      </div>
    </div>
  </div>
);

export default IcacitDeadlines;
