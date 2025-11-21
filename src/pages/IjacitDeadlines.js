import React from 'react';

export default function IjacitDeadlines({ darkMode }) {
  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <h1 className="text-2xl font-bold mb-4">IJACIT Deadlines</h1>
      <p>Deadlines and important dates.</p>
    </div>
  );
}
