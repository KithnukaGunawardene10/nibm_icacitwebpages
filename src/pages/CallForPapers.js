import React from 'react';
import '../App.css';

export default function CallForPapers() {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Call for Papers</h1>
        <p>ICIET 2025 invites original research contributions</p>
      </div>
      <div className="page-content">
        <h2>Submission Guidelines</h2>
        <p>We welcome high-quality papers in innovation and emerging technologies...</p>
        <a href="#" className="btn-primary">Submit Your Paper</a>
      </div>
    </div>
  );
}