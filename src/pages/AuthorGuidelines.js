// src/pages/AuthorGuidelines.js
import React from 'react';
import '../App.css';

export default function AuthorGuidelines() {
  return (
    <div className="guidelines-page">
      {/* HERO */}
      <div className="guidelines-hero">
        <h1>AUTHOR GUIDELINES</h1>
        <p className="breadcrumb">HOME > AUTHOR GUIDELINES</p>
      </div>

      <div className="guidelines-content">
        {/* PAPER PREPARATION */}
        <div className="section-box">
          <h2>Paper Preparation</h2>
          <ul>
            <li>Abstract proceedings will be published in the university e-repository.</li>
            <li>Abstracts should report original research. Papers based on previously published work or currently submitted for any other publication will not be accepted.</li>
            <li>The conference only encourages the submission of extended abstracts. The maximum length of extended abstracts is limited to <strong>five (05) A4 pages</strong> (Maximum 2000 words and minimum 1200 words) in the given conference format.</li>
            <li>Since the review process is double-blind (neither the author nor the reviewers are aware of each other's identity), authors are requested,</li>
            <ul className="nested">
              <li><strong>NOT</strong> to include authors' information (name, affiliations, e-mail), acknowledgements, grant information of the research carried out.</li>
              <li>To <strong>INCLUDE</strong> authors' previous work should be referred as 3rd persons' works.</li>
            </ul>
            <li>During the desk review process (prior to the formal double blind review), the following will be checked. Papers having non-compliances, including the following, will be rejected.</li>
            <ul className="nested">
              <li>Extended abstracts that have more than five (05) pages.</li>
              <li>Extended abstracts that do not with the scope of the conference.</li>
              <li>Extended abstracts that do not follow proper formatting guidelines.</li>
              <li>Extended abstracts that have a plagiarism score above 20%.</li>
              <li>Extended abstracts that have an AI score above 20%.</li>
            </ul>
            <li>Submission of concept and review papers will not be considered.</li>
            <li>The first author is allowed to present up to three (03) abstracts.</li>
            <li><strong>Guidelines for Generative AI Usage.</strong></li>
            <ul className="nested">
              <li>The developments in generative artificial intelligence (AI) tools, with for example also the large language models (LLMs), are transforming the way publications are produced. We encourage the use of those emerging technologies in a responsible manner. We aim that such AI tools mostly promote researchers’ own capacity to create high-quality scientific work. For instance, AI tools can help researchers arrive at new ideas and improve self-written texts, especially for non-native speakers of English. However, we need to consider that AI tools also raise questions about what exactly constitutes their responsible use.</li>
            </ul>
          </ul>
        </div>

        {/* PAPER SUBMISSION */}
        <div className="section-box">
          <h2>Paper Submission</h2>
          <ul>
            <li>All paper submissions are through <strong>CMT</strong>. If you are a first time user of CMT, create an account using your official email.</li>
            <li>Choose the most appropriate track.</li>
            <li>Manuscript submission should be in both <strong>Microsoft Word and PDF</strong> document only in the given format.</li>
            <li>Authors are required to submit the <strong>"Author Declaration Form"</strong> along with the extended abstract.</li>
            <li>Authors can submit a maximum of one (01) supplementary file in PDF format.</li>
          </ul>
        </div>

        {/* DOWNLOAD LINKS */}
        <div className="download-links">
          <a href="/downloads/Author-Declaration-Form-ICACIT2026.docx" className="download-btn">EXTENDED ABSTRACT TEMPLATE</a>
          <a href="/downloads/icacit2026_abstract_template.docx" className="download-btn">AUTHOR DECLARATION FORM</a>
          <a href="/submission" className="download-btn">SUBMIT ONLINE</a>
        </div>
      </div>
    </div>
  );
}