import React from 'react';

export default function IjacitAbout({ darkMode }) {
  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <h1 className="text-2xl font-bold mb-4">About IJACIT</h1>
      <p>Information about IJACIT.</p>
    </div>
  );
}
