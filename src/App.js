import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CallForPapers from './pages/CallForPapers';
import AuthorGuidelines from './pages/AuthorGuidelines';
import CameraReady from './pages/CameraReady';
import PresentationGuidelines from './pages/PresentationGuidelines';
import Registration from './pages/Registration';
import OrganizingCommittee from './pages/OrganizingCommittee';
import SubmitPaper from './pages/SubmitPapers';
import IJACITJournal from './pages/IJACITJournal';
import Gallery from './pages/Gallery';

function App() {
  const location = useLocation();
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track details data
  const trackDetails = {
    t1: {
      title: "T1 — Human–Technology Interaction & Digital Workplaces",
      topics: [
        "Human–Computer Interaction (HCI)",
        "User Experience (UX) Design",
        "Digital Collaboration Tools",
        "Workplace Automation",
        "Human Factors & Ergonomics",
        "Remote & Hybrid Work Technologies",
        "Intelligent Assistive Systems",
        "Cognitive Workload Analysis",
        "Interaction Paradigms (AR/VR/MR)",
        "Digital Well-being in Workplaces"
      ]
    },
    t2: {
      title: "T2 — Technology Education & Management",
      topics: [
        "Educational Technology (EdTech)",
        "Digital Pedagogies",
        "Learning Management Systems (LMS)",
        "Virtual & Remote Learning Environments",
        "Technology-Enhanced Assessment",
        "ICT in Education Governance",
        "STEM Education Innovation",
        "Curriculum Design for Emerging Technologies",
        "E-Learning Analytics",
        "Academic Technology Leadership"
      ]
    },
    t3: {
      title: "T3 — Gen AI & Derivative Systems",
      topics: [
        "Generative AI Models",
        "Large Language Models (LLMs)",
        "Multimodal AI",
        "AI-Generated Content (AIGC)",
        "Ethical & Responsible GenAI",
        "AI Automation Systems",
        "Prompt Engineering",
        "Synthetic Data Generation",
        "Foundation Model Optimization",
        "AI Evaluation & Benchmarking"
      ]
    },
    t4: {
      title: "T4 — Software Engineering & Development Practices",
      topics: [
        "Software Architecture",
        "Agile & DevOps Methodologies",
        "CI/CD Pipelines",
        "Cloud-Native Development",
        "Microservices & Containers",
        "Software Quality Assurance",
        "Programming Paradigms",
        "Requirements Engineering",
        "Testing & Debugging Automation",
        "Secure Software Development"
      ]
    },
    t5: {
      title: "T5 — Cybersecurity Governance, Risk & Compliance",
      topics: [
        "Cybersecurity Frameworks",
        "Governance, Risk & Compliance (GRC)",
        "Threat Intelligence",
        "Data Privacy & Protection",
        "Security Policies & Standards",
        "Identity & Access Management",
        "Incident Response Planning",
        "Cyber Risk Assessment",
        "Compliance Auditing",
        "Security Awareness & Training"
      ]
    },
    t6: {
      title: "T6 — SecOps & Security Engineering",
      topics: [
        "Security Operations Centers (SOC)",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Network Security Engineering",
        "Cloud Security Operations",
        "Malware Analysis",
        "Security Automation (SOAR)",
        "Zero Trust Architecture",
        "Endpoint Security",
        "Security Monitoring & Analytics"
      ]
    },
    t7: {
      title: "T7 — Data Science & Big Data Analytics",
      topics: [
        "Statistical Data Analysis",
        "Predictive Analytics",
        "Big Data Processing",
        "Data Warehousing",
        "Feature Engineering",
        "Visualization & Reporting Tools",
        "Machine Learning Applications",
        "Data Governance",
        "Distributed Data Systems (Hadoop, Spark)",
        "Business Intelligence (BI)"
      ]
    },
    t8: {
      title: "T8 — Computer Vision & Image Processing",
      topics: [
        "Image Recognition",
        "Object Detection & Tracking",
        "Facial Analysis",
        "Image Segmentation",
        "Medical Image Processing",
        "3D Vision & Reconstruction",
        "Video Analytics",
        "Pattern Recognition",
        "AR/VR Image Enhancement",
        "Remote Sensing & Satellite Image Analysis"
      ]
    },
    t9: {
      title: "T9 — Transmedia Storytelling in Modern Cinema",
      topics: [
        "Cross-Platform Narrative Design",
        "Interactive Storytelling",
        "Cinematic VR Experiences",
        "Digital Media Integration",
        "Character & World-Building Strategies",
        "Audience Engagement Frameworks",
        "Narrative Engineering",
        "Immersive Film Technologies",
        "Visual Storytelling Techniques",
        "Media Convergence in Cinema"
      ]
    },
    t10: {
      title: "T10 — Virtual Production vs. Green Screen Environments",
      topics: [
        "Virtual Production Workflows",
        "LED Wall Volumetric Capture",
        "Real-Time Rendering Technologies",
        "Green Screen Compositing",
        "Motion Capture Systems",
        "Production Pipeline Optimization",
        "Camera Tracking Techniques",
        "Digital Asset Creation",
        "Lighting & Scene Integration",
        "Hybrid Production Environments"
      ]
    }
  };

  const showTrackDetails = (trackId) => {
    setSelectedTrack(trackDetails[trackId]);
    setShowDetails(true);
  };

  const hideTrackDetails = () => {
    setShowDetails(false);
    setSelectedTrack(null);
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        hideTrackDetails();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const target = new Date('2026-03-26T00:00:00+05:30').getTime();
    const update = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.textContent = '00';
        });
        return;
      }
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);

      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Lock scroll when menu is open (prevents background scrolling)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when clicking a link (optional but smooth UX)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="top-bar">
  <div className="logo">
    <img src="ICACITLogo.png" alt="ICACIT 2026" className="glass-logo" />
  </div>

  {/* Hamburger */}
  <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>

  {/* Navigation - Centered Properly */}
  <nav className="main-nav">
    <ul className="nav-list">
      <li><Link to="/" onClick={closeMenu}>Home</Link></li>
      <li><a href="#tracks-section" className="smooth-scroll" onClick={closeMenu}>Tracks and Themes</a></li>
      <li><a href="#timeline-section" className="smooth-scroll" onClick={closeMenu}>Important Dates</a></li>

      <li className="dropdown">
        <span className="dropdown-toggle">Submission</span>
        <ul className="dropdown-menu">
          <li><Link to="/call-for-papers" onClick={closeMenu}>Call For Papers</Link></li>
          <li><Link to="/author-guidelines" onClick={closeMenu}>Author Guidelines</Link></li>
          <li><Link to="/submit-paper" onClick={closeMenu}>Submit Paper</Link></li>
          <li><Link to="/camera-ready-submission" onClick={closeMenu}>Camera Ready Paper Submission</Link></li>
          <li><Link to="/presentation-guidelines" onClick={closeMenu}>Presentation Submission Guidelines</Link></li>
        </ul>
      </li>

      <li><Link to="/registration" onClick={closeMenu}>Registration</Link></li>
      <li><Link to="/committee" onClick={closeMenu}>Organizing Committee</Link></li>
      <li><Link to="/ijacit-journal" onClick={closeMenu}>IJACIT JOURNAL</Link></li>
      <li><Link to="/gallery" onClick={closeMenu}>GALLERY</Link></li>
    </ul>
  </nav>
</div>
        
        <div className="hero">
          <div className="glass-title">
            <h1>The International Conference on <br />Advanced Computing and Information Technology</h1>
            <p>26<sup>th</sup> March 2026</p>
          </div>

          <div className="glass-countdown">
            <div className="countdown">
              <div className="time-box"><span className="num" id="days">13</span><span className="label">Days</span></div>
              <div className="time-box"><span className="num" id="hours">23</span><span className="label">Hours</span></div>
              <div className="time-box"><span className="num" id="minutes">30</span><span className="label">Minutes</span></div>
              <div className="time-box"><span className="num" id="seconds">00</span><span className="label">Seconds</span></div>
            </div>
          </div>
        </div>
        
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/author-guidelines" element={<AuthorGuidelines />} />
          <Route path="/submit-paper" element={<SubmitPaper />} />
          <Route path="/camera-ready-submission" element={<CameraReady />} />
          <Route path="/presentation-guidelines" element={<PresentationGuidelines />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/committee" element={<OrganizingCommittee />} />
          <Route path="/ijacit-journal" element={<IJACITJournal />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      
       
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>About the ICACIT 2026</h2>
            <div className="underline"></div>

            <p className="quote">
              ..
            </p>

            <p className="description">
              The International Conference on Advanced Computing and Information Technology (ICACIT) 2026 presents an invaluable opportunity for learners to demonstrate their latest research and innovative ideas for the global advancement of knowledge.         
              The ICACIT conference is hosted by the School of Computing and Engineering - NIBM.
            </p>

            <p className="description">
              Conference focuses on key tracks including Software Engineering, Information Technology for Business, Ethical Hacking and Network Security, and Multimedia within the field of computing. This conference invites researchers who are interested in submitting research papers aligned with these core tracks. 
              All submissions undergo a rigorous blind review process by a panel of 
              experienced reviewers from both local and international universities.
            </p>
          </div>

          <div className="about-logos">
            <img src="ICACITLogo.png" alt="ICACIT 2025" className="logo-icacit" />
            <img src="NIBMlogo.png" alt="NIBM" className="logo-nibm" />
            <img src="socelogos.png" alt="SOCE" className="logo-soce" />
          </div>
        </div>
      </section>
 
{/* CONFERENCE TRACKS — WIDER CARDS */}
<section className="tracks-section" id="tracks-section">
  <div className="tracks-white-top"></div>
  <div className="tracks-photo-bg">
    <div className="tracks-overlay">
      <div className="tracks-container">
        <h2>Conference Tracks</h2>
        <p className="tracks-intro">
          We encourage the submission of high-quality papers reporting original work in both theoretical and experimental research areas. The following tracks are hereby solicited.
        </p>

        <div className="tracks-grid-wide">
          {/* LEFT COLUMN — T1 to T5 */}
          <div className="track-column-wide">
            {/* T1 */}
            <div className="track-card-wide">
              <div className="track-pill green">
                <span className="track-id">T1</span> Human–Technology Interaction & Digital Workplaces
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                  <img src="/tracks/t1-human-technology.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                  <h4>Topics Include:</h4>
                  <ul className="subtopics-list-single">
                    <li>Human–Computer Interaction (HCI)</li>
                    <li>User Experience (UX) Design</li>
                    <li>Digital Collaboration Tools</li>
                    <li>Workplace Automation</li>
                    <li>Human Factors & Ergonomics</li>
                    <li>Remote & Hybrid Work Technologies</li>
                    <li>Intelligent Assistive Systems</li>
                    <li>Cognitive Workload Analysis</li>
                    <li>Interaction Paradigms (AR/VR/MR)</li>
                    <li>Digital Well-being in Workplaces</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* T2 */}
            <div className="track-card-wide">
              <div className="track-pill pink">
                <span className="track-id">T2</span> Technology Education & Management
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                 <img src="/tracks/  t2-education.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                  
                  <ul className="subtopics-list-single">
                    <li>Educational Technology (EdTech)</li>
                    <li>Digital Pedagogies</li>
                    <li>Learning Management Systems (LMS)</li>
                    <li>Virtual & Remote Learning Environments</li>
                    <li>Technology-Enhanced Assessment</li>
                    <li>ICT in Education Governance</li>
                    <li>STEM Education Innovation</li>
                    <li>Curriculum Design for Emerging Technologies</li>
                    <li>E-Learning Analytics</li>
                    <li>Academic Technology Leadership</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* T3 */}
            <div className="track-card-wide">
              <div className="track-pill blue">
                <span className="track-id">T3</span> Gen AI & Derivative Systems
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                  <img src="/tracks/  t3-gen-ai.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                  
                  <ul className="subtopics-list-single">
                    <li>Generative AI Models</li>
                    <li>Large Language Models (LLMs)</li>
                    <li>Multimodal AI</li>
                    <li>AI-Generated Content (AIGC)</li>
                    <li>Ethical & Responsible GenAI</li>
                    <li>AI Automation Systems</li>
                    <li>Prompt Engineering</li>
                    <li>Synthetic Data Generation</li>
                    <li>Foundation Model Optimization</li>
                    <li>AI Evaluation & Benchmarking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* T4 */}
            <div className="track-card-wide">
              <div className="track-pill lightblue">
                <span className="track-id">T4</span> Software Engineering & Development Practices
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                 <img src="/tracks/  t4-software.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                  
                  <ul className="subtopics-list-single">
                    <li>Software Architecture</li>
                    <li>Agile & DevOps Methodologies</li>
                    <li>CI/CD Pipelines</li>
                    <li>Cloud-Native Development</li>
                    <li>Microservices & Containers</li>
                    <li>Software Quality Assurance</li>
                    <li>Programming Paradigms</li>
                    <li>Requirements Engineering</li>
                    <li>Testing & Debugging Automation</li>
                    <li>Secure Software Development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* T5 */}
            <div className="track-card-wide">
              <div className="track-pill maroon">
                <span className="track-id">T5</span> Cybersecurity Governance, Risk, & Compliance
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                  <img src="/tracks/t5-cybersecurity.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                 
                  <ul className="subtopics-list-single">
                    <li>Cybersecurity Frameworks</li>
                    <li>Governance, Risk & Compliance (GRC)</li>
                    <li>Threat Intelligence</li>
                    <li>Data Privacy & Protection</li>
                    <li>Security Policies & Standards</li>
                    <li>Identity & Access Management</li>
                    <li>Incident Response Planning</li>
                    <li>Cyber Risk Assessment</li>
                    <li>Compliance Auditing</li>
                    <li>Security Awareness & Training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — T6 to T10 */}
          <div className="track-column-wide">
            {/* T6 */}
            <div className="track-card-wide">
              <div className="track-pill purple">
                <span className="track-id">T6</span> SecOps & Security Engineering
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                <img src="/tracks/ t6-secops.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                  
                  <ul className="subtopics-list-single">
                    <li>Security Operations Centers (SOC)</li>
                    <li>Vulnerability Assessment</li>
                    <li>Penetration Testing</li>
                    <li>Network Security Engineering</li>
                    <li>Cloud Security Operations</li>
                    <li>Malware Analysis</li>
                    <li>Security Automation (SOAR)</li>
                    <li>Zero Trust Architecture</li>
                    <li>Endpoint Security</li>
                    <li>Security Monitoring & Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* T7 */}
            <div className="track-card-wide">
              <div className="track-pill lavender">
                <span className="track-id">T7</span> Data Science & Big Data Analytics
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                 <img src="/tracks/ t7-data-science.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                  
                  <ul className="subtopics-list-single">
                    <li>Statistical Data Analysis</li>
                    <li>Predictive Analytics</li>
                    <li>Big Data Processing</li>
                    <li>Data Warehousing</li>
                    <li>Feature Engineering</li>
                    <li>Visualization & Reporting Tools</li>
                    <li>Machine Learning Applications</li>
                    <li>Data Governance</li>
                    <li>Distributed Data Systems (Hadoop, Spark)</li>
                    <li>Business Intelligence (BI)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* T8 */}
            <div className="track-card-wide">
              <div className="track-pill yellow">
                <span className="track-id">T8</span> Computer Vision & Image Processing
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                  <img src="/tracks/ t8-computer-vision.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                 
                  <ul className="subtopics-list-single">
                    <li>Image Recognition</li>
                    <li>Object Detection & Tracking</li>
                    <li>Facial Analysis</li>
                    <li>Image Segmentation</li>
                    <li>Medical Image Processing</li>
                    <li>3D Vision & Reconstruction</li>
                    <li>Video Analytics</li>
                    <li>Pattern Recognition</li>
                    <li>AR/VR Image Enhancement</li>
                    <li>Remote Sensing & Satellite Image Analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* T9 */}
            <div className="track-card-wide">
              <div className="track-pill cyan">
                <span className="track-id">T9</span> Transmedia Storytelling in Modern Cinema
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                  <img src="/tracks/ t9-storytelling.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                  
                  <ul className="subtopics-list-single">
                    <li>Cross-Platform Narrative Design</li>
                    <li>Interactive Storytelling</li>
                    <li>Cinematic VR Experiences</li>
                    <li>Digital Media Integration</li>
                    <li>Character & World-Building Strategies</li>
                    <li>Audience Engagement Frameworks</li>
                    <li>Narrative Engineering</li>
                    <li>Immersive Film Technologies</li>
                    <li>Visual Storytelling Techniques</li>
                    <li>Media Convergence in Cinema</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* T10 */}
            <div className="track-card-wide">
              <div className="track-pill teal">
                <span className="track-id">T10</span> Virtual Production Vs. Green Screen Environments
              </div>
              <div className="track-content-wide">
                <div className="track-image-wide">
                  <img src="/tracks/  t10-virtual-production.jpg" alt="Human Technology Interaction" className="track-image-real" />
                </div>
                <div className="track-subtopics-wide">
                  
                  <ul className="subtopics-list-single">
                    <li>Virtual Production Workflows</li>
                    <li>LED Wall Volumetric Capture</li>
                    <li>Real-Time Rendering Technologies</li>
                    <li>Green Screen Compositing</li>
                    <li>Motion Capture Systems</li>
                    <li>Production Pipeline Optimization</li>
                    <li>Camera Tracking Techniques</li>
                    <li>Digital Asset Creation</li>
                    <li>Lighting & Scene Integration</li>
                    <li>Hybrid Production Environments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tracks-white-bottom"></div>
</section>

      {/* TIMELINE — FINAL, PIXEL-PERFECT, 2025 + 2026 CONNECTED */}
      <section className="timeline-section" id="timeline-section">
        <div className="timeline-container">
          <h2>Timeline</h2>

          <div className="timeline">
            {/* 2025 BADGE — CONNECTED */}
            <div className="timeline-year-item">
              <div className="timeline-year-badge">2025</div>
            </div>

            {/* ITEM 1 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <div className="day">10th</div>
                <div className="month">November</div>
              </div>
              <div className="timeline-content">
                <p>Call for Abstract / Extended Abstract submission</p>
                {/*<span className="closed-pill">CLOSED</span>*/}
                 <span className="open-pill">OPEN</span>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <div className="day">20th</div>
                <div className="month">December</div>
              </div>
              <div className="timeline-content">
                <p>Deadline of Abstract/ Extended Abstract submission</p>
                {/*<span className="open-pill">OPEN</span>*/}
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <div className="day">20th</div>
                <div className="month">January</div>
              </div>
              <div className="timeline-content">
                <p>Notification of Acceptance</p>
                {/* <span className="Notify-pill">Notified</span>*/}
              </div>
            </div>

            {/* 2026 BADGE — CONNECTED */}
            <div className="timeline-year-item">
              <div className="timeline-year-badge">2026</div>
            </div>

            {/* ITEM 4 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <div className="day">30th</div>
                <div className="month">January</div>
              </div>
              <div className="timeline-content">
                <p>Submission of Camera Ready Papers </p>
              </div>
            </div>

            {/* ITEM 5 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <div className="day">10th</div>
                <div className="month">February</div>
              </div>
              <div className="timeline-content">
                <p>Commencement of Registration for Conference</p>
              </div>
            </div>

            {/* ITEM 6 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <div className="day">20th</div>
                <div className="month">February</div>
              </div>
              <div className="timeline-content">
                <p>Deadline for registration for Conference</p>
              </div>
            </div>

            {/* ITEM 7 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <div className="day">26th</div>
                <div className="month">March</div>
              </div>
              <div className="timeline-content">
                <p>ICACIT Conference '26</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MAP + FOOTER SECTION */}
      <section className="map-footer-section">
        {/* LIVE GOOGLE MAP */}
        <div className="map-container">
          <iframe
            title="NIBM Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.2840873039668!2d79.87046046888585!3d6.90646371147587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597908e10713%3A0x5094ec60f1e2649e!2sNational%20Institute%20of%20Business%20Management!5e1!3m2!1sen!2slk!4v1762803306357!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-container">
            {/* Left: Logo + Title */}
            <div className="footer-brand">
              <img src="ICACITLogo.png" alt="ICACIT 2026" className="footer-logo" />
              <div className="footer-title">
                The International Conference on Advanced<br />
                Computing and Information Technology<br />
                (ICACIT) 2026
              </div>
            </div>

            {/* Center: Navigation */}
            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">TRACKS AND THEMES</a></li>
              </ul>
            </div>

            {/* Right: Contact + Social */}
            <div className="footer-contact">
              <h3>Contact</h3>
              <div className="contact-item">
                <span className="icon">Email</span>
                <a href="mailto: computingresearch@nibm.lk">computingresearch@nibm.lk</a>
              </div>
              <div className="contact-item">
                <span className="icon">Address</span>
                <p>
                  No: 120/5,<br />
                  Wijerama (Vidya) Mawatha,<br />
                  Colombo 07, Sri Lanka.,<br />
                </p>
              </div>
              <div className="contact-item">
                <span className="icon">Telephone</span>
                <p>
                  +94 117 321 000
                </p>
              </div>
              
              <div className="social-links">
                <a href="#" aria-label="Facebook"><img src="%PUBLIC_URL%/fb-icon.png" alt="FB" /></a>
                <a href="#" aria-label="Instagram"><img src="%PUBLIC_URL%/ig-icon.png" alt="IG" /></a>
              </div>
            </div>

            {/* USJ Logo */}
            <div className="footer-usj-logo">
              <img src="socelogos.png" alt="NIBM" />
              <p>
                SCHOOL OF COMPUTING<br />
                National Institute of <br />
                Business Management <br />
                (NIBM), Sri Lanka
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 ICAIT Conference. All Rights Reserved.</p>
          </div>
          <div className="footer-sign">
            <p>Designed & Developed by Kithnuka Gunawardene. All Rights Reserved.</p>
          </div>
        </footer>
      </section>
    </>
  );
  
}
   
export default App;