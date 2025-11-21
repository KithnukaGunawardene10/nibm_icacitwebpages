import React from 'react';
import '../App.css';

export default function Registration() {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Registration</h1>
        <p>Secure your spot at ICACIT 2026</p>
      </div>

      <div className="page-content">
      
        {/* IMAGE ADDED HERE — FULLY RESPONSIVE & BEAUTIFUL */}
        <div className="registration-image">
          <img 
            src="registration.png" 
            alt="ICACIT 2026 Registration — Join us in Colombo" 
            className="reg-image"
          />
        </div>

       
      </div>
    </div>
  );
}