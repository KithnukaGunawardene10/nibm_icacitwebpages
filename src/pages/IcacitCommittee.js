import React from 'react';

export default function IcacitCommittee({ darkMode }) {
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const textPrimary = darkMode ? 'text-gray-100' : 'text-gray-900';

  const members = [
    'Miss. Kavishna Wijesinghe', 'Mr. Vimukthi Pathirana', 'Mr. Ilham Rasif', 'Ms. Pavithra Maheshwara',
    'Mr. Kithnuka Gunawardene', 'Mr. Supun Liyanage', 'Ms. Iresha Gamage', 'Ms. Chamudi Jayasinghe',
    'Ms. Binali Dissanayake', 'Ms. Sadunika Kapuliyadda', 'Mr. Pamod Madushan', 'Mr. Chathuranga Rajapaksha', 'Mr. Rusith Tharuka'
  ];

  return (
    <div className="space-y-8 animate-fadeIn p-4 md:p-8">
      <div className="text-center">
        <h1 className={`text-3xl font-bold mb-2 ${textPrimary}`}>Organizing Committee</h1>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>ICACIT 2025</p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-blue-400 mb-4">PATRONS</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Dr. Gunathilake Tantirigama</p>
            <p className="text-sm text-gray-400">Chairman, NIBM</p>
          </div>
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Dr. DMA Kulasooriya</p>
            <p className="text-sm text-gray-400">Director General, NIBM</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-purple-400 mb-4">ADVISORY BOARD</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Ms. Gangani Wickramasinghe</p>
            <p className="text-sm text-gray-400">Director, SOCE, NIBM</p>
          </div>
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Dr. Thisara Weerasinghe</p>
            <p className="text-sm text-gray-400">Head/Computer Science, SOCE, NIBM</p>
          </div>
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Dr. Rushan Abeygunawardana</p>
            <p className="text-sm text-gray-400">Senior Lecturer, University of Colombo</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-pink-400 mb-4">CONFERENCE CO-CHAIRS</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Ms. Amila De Silva</p>
          </div>
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Miss. Chandula Rajapaksha</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-indigo-400 mb-4">CONFERENCE CO-EDITORS</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Ms. Bhagya Hapuarachchi</p>
          </div>
          <div className={`${cardBg} rounded-xl p-4 shadow-sm`}>
            <p className={`font-semibold ${textPrimary}`}>Miss. Chalana Hansi Jayaweera</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-green-400 mb-4">ORGANIZING COMMITTEE MEMBERS</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {members.map((m, i) => (
            <div key={i} className={`${cardBg} rounded-xl p-3 shadow-sm`}>
              <p className={`text-sm font-medium ${textPrimary}`}>{m}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
