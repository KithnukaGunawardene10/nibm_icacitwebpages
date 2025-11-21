import React from 'react';

export default function IjacitOverview({ darkMode }) {
  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <h1 className="text-2xl font-bold mb-4">IJACIT</h1>
      <p>This is the overview page for IJACIT.</p>
    </div>
  );
}
