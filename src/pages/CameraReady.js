import React from 'react';
import '../App.css';

export default function CameraReady() {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Camera Ready Submission</h1>
        <p>Final paper submission portal</p>
      </div>
      <div className="page-content">
        <p>Deadline: 07 October 2025</p>
        <a href="#" className="btn-primary">Upload Camera Ready</a>
      </div>
    </div>
  );
}