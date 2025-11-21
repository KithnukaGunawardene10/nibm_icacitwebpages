// src/pages/IJACITJournal.js
import React from 'react';
import '../App.css';

export default function IJACITJournal() {
  return (
    <div className="journal-page">
      <div className="journal-hero">
        <h1>IJACIT JOURNAL</h1>
        <p className="breadcrumb">HOME > IJACIT JOURNAL</p>
      </div>

      <div className="journal-content">
        <div className="journal-card glass-effect">
          <h2>International Journal of Advanced Computing and Information Technology (IJACIT)</h2>
          <p className="issn">ISSN: 3093-625X (Online)</p>
          <div className="journal-info">
            <p><strong>Publisher:</strong> NIBM School of Computing, NIBM</p>
            <p><strong>Frequency:</strong> Quarterly (in March, June, September, and December)</p>
            <p><strong>Scope:</strong> AI, Data Science, Software Engineering, IoT</p>
          </div>

          {/* PDF VIEWER — FULLY EMBEDDED & RESPONSIVE */}
          <div className="pdf-viewer-container">
            <h3 className="pdf-title">Call for Papers – IJACIT 2026</h3>
            <iframe
              src="/pdfs/Finalized_journal.pdf"   // Put your PDF in public/pdfs/
              title="IJACIT Call for Papers"
              width="100%"
              height="800px"
              style={{ border: 'none', borderRadius: '16px' }}
              allowFullScreen
            />
            <div className="pdf-download">
              <a 
                href="/pdfs/Finalized_journal.pdf" 
                download
                className="btn-primary"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Optional: Latest Issue List */}
          <div className="latest-issue">
            <h3>Latest Issue: Volume 1, Issue 1 (March 2025)</h3>
            <ul>
              <li><a href="#">AI-Driven Healthcare Systems</a></li>
              <li><a href="#">Blockchain in Supply Chain</a></li>
              <li><a href="#">Quantum Computing Applications</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}