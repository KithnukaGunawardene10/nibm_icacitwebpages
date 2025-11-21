// src/pages/SubmitPaper.js
import React from 'react';
import '../App.css';


export default function SubmitPaper() {
  return (
    
    <div className="page-container">
      <div className="page-hero">
        <h1>Submit Paper</h1>
        <p>Upload your research paper for ICACIT 2025</p>
      </div>

      <div className="page-content">
        <div className="submit-form glass-effect">
          <h2>Paper Submission Portal</h2>
          <p>All submissions are saved to Google Sheets & Drive.</p>

          {/* OFFICIAL GOOGLE EMBED — WORKS INSIDE PAGE */}
          <div className="embed-container">
            <iframe
                src="https://forms.gle/KwFaDvaWcYpaEYjHA"
              width="100%"
              height="1400"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="ICACIT 2025 Submission"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              allow="geolocation; microphone; camera"
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

